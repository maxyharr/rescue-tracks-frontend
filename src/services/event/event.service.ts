import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import * as moment from "moment";
import "twix";

import { Observable, ReplaySubject } from "rxjs";
import "rxjs/add/operator/map";

import * as _ from "lodash";

import { SocketService } from "./socket.service";

import { EventModel } from "models/event.model";
import { Attendee } from "models/attendee.model";
import { Meeting } from "models/meeting.model";
import { Animal } from "models/animal.model";

@Injectable()
export class EventService {
    constructor(private http: HttpClient, private socket: SocketService, private router: Router) {}

    public setupEvent(date: string, startTime: string, endTime: string): Observable<EventModel> {
        return this.http.post<EventModel>(
                   `events`, {
                       startTime: moment(`${date} ${startTime}`).format(),
                       endTime:   moment(`${date} ${endTime}`).format(),
                   });
    }

    public getEvents(active?: boolean): Observable<EventModel[]> {
        let params: {active?: string} = {};

        if (active) {
            params.active = "true";
        }
        return this.http
                   .get<EventModel[]>(`events`, {params})
                   .map((events: EventModel[]) => {
                      return _.map(events, (event: EventModel) => new EventModel(event))
                   });
    }

    public getEvent(eventId: number): Observable<EventModel> {
        return this.http
                   .get<EventModel>(`events/${eventId}`)
                   .map((event: EventModel) => new EventModel(event));
    }

    public joinEvent(eventId: number): Observable<{success: boolean, eventId: number}> {
        return Observable.of({success: true, eventId: 3});
    }

    public getEventAttendance(eventId: number): Observable<Attendee[]> {
        let updateAttendance = (attendees: Attendee[]) => localStorage.setItem("eventAttendance", JSON.stringify(attendees));

        let attendance: ReplaySubject<Attendee[]> = this.socket.bindAction("event", "adopters", {event_id: eventId}, updateAttendance)

        this.http
            .get<Attendee[]>(`events/${eventId}/attendance`)
            .subscribe((attendees) => {
              updateAttendance(attendees);
              attendance.next(attendees);
            });

        return attendance;
    }

    public addAttendee(eventId: number, attendee: Attendee): Observable<Attendee> {
        return this.http.post<Attendee>(
                `events/${eventId}/attendance`,
                { attendee }
            );
    }

    public startMeeting(eventId: number, attendee: Attendee): Observable<{id: number}> {
        return this.http.put<{id: number}>(
                `events/${eventId}/attendance`,
                { attendee }
            );
    }

    public getMeetingsAtEvent(eventId: number): Observable<Meeting[]> {
        return this.http.get<Meeting[]>(`events/${eventId}/meetings`);
    }

    public compareEventsByTime(eventA: EventModel, eventB: EventModel): number {
        let mEventAStart = moment(eventA.startTime);
        let mEventBStart = moment(eventB.startTime);
        let mEventAEnd   = moment(eventA.endTime);
        let mEventBEnd   = moment(eventB.endTime);

        if (mEventAStart.isBefore(mEventBStart) || (mEventAStart.isSame(mEventBStart) && mEventAEnd.isBefore(mEventBEnd))) {
            return 1;
        } else if (mEventAStart.isSame(mEventBStart) && mEventAEnd.isSame(mEventBEnd)) {
            return 0;
        }

        return -1;
    }
}
