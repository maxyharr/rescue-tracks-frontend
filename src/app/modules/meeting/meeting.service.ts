import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, ReplaySubject } from "rxjs";
import * as _ from "lodash";

import * as socketIO from "socket.io-client";

import { Animal } from "../api";
import { Attendee } from "../event/attendee.model";
import { Meeting } from "./meeting.model";

const BASE_RESCUE_TRACKS_URL = "http://localhost:9000";

@Injectable()
export class MeetingService {
    constructor(private http: HttpClient) { }

    public currentMeetingForAnimal(animal: Animal): Meeting {
        if((animal as any).__animalMeetings__ && (animal as any).__animalMeetings__.length) {
            let meeting = _.find((animal as any).__animalMeetings__, (m) => !m.concludedAt);
            if(meeting.__personMeeting__) {
                return Object.assign(new Meeting(), meeting.__personMeeting__, {startedAt: meeting.createdAt});
            }
        }
        return undefined;
    }

    public getMeeting(meetingId: number): Observable<Meeting> {
        return this.http.get<Meeting>(
                `${BASE_RESCUE_TRACKS_URL}/meetings/${meetingId}`
            );
    }

    public getEventAnimals(eventId: number): Observable<Animal[]> {
        let action = "animals";
        let socket: SocketIOClient.Socket = socketIO(`${BASE_RESCUE_TRACKS_URL}/event`, {
              query: {
                  event_id: eventId,
                  action
              }
          });

        let animals: ReplaySubject<Animal[]> = new ReplaySubject<Animal[]>(1);

        this.http
            .get<Animal[]>(`${BASE_RESCUE_TRACKS_URL}/events/${eventId}/animals-for-meeting`)
            .subscribe(animals.next.bind(animals));

        socket.on(action, animals.next.bind(animals));

        return animals;
    }

    public getMeetingDetails(meetingId: number): Observable<Meeting> {
        return this.http.get<Meeting>(
                `${BASE_RESCUE_TRACKS_URL}/meetings/${meetingId}/details`
            );
    }

    public startMeetingWithAnimal(meetingId: number, animal: Animal): Observable<Meeting> {
        return this.http.post<Meeting>(
            `${BASE_RESCUE_TRACKS_URL}/meetings/${meetingId}`,
            { animal_id: animal.id }
        );
    }

    public endCurrentMeetingWithAnimal(meetingId: number): Observable<Meeting> {
        return this.http.post<Meeting>(
            `${BASE_RESCUE_TRACKS_URL}/meetings/${meetingId}/end_animal_meeting`, {}
        );
    }

    public adoptFromMeeting(meetingId: number): Observable<{success: boolean, error: string}> {
        return this.http.post<{success: boolean, error: string}>(
            `${BASE_RESCUE_TRACKS_URL}/meetings/${meetingId}/adopt`, {}
        );
    }

    public endMeeting(meetingId: number): Observable<{success: boolean, error: string}> {
        return this.http.post<{success: boolean, error: string}>(
            `${BASE_RESCUE_TRACKS_URL}/meetings/${meetingId}/end`, {}
        );
    }
}
