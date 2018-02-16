import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Observable, Subscription, ReplaySubject } from "rxjs";
import * as _ from "lodash";

import * as socketIO from "socket.io-client";

import { EventService } from "../event.service";

import { EventModel } from "../event.model";
import { Attendee } from "../attendee.model";
import { Meeting } from "../../meeting/meeting.model";

@Component({
    selector: "page-event-show",
    templateUrl: "show.html",
    styleUrls: ["show.scss"]
})
export class EventPage implements OnInit, OnDestroy {

    private paramsSub: Subscription;

    public eventModel: Observable<EventModel>;

    public newAttendee: Attendee;

    public waitlist: ReplaySubject<Attendee[]>;

    public myMeetings: Observable<Meeting[]>;

    private socket: SocketIOClient.Socket;

    constructor(private route: ActivatedRoute, private eventService: EventService) {
        this.waitlist = new ReplaySubject<Attendee[]>();
        this.newAttendee = new Attendee();
    }

    ngOnInit(): void {
        this.paramsSub = this.route.params.subscribe(params => {
            localStorage.setItem("eventId", +params.id + "");
            this.eventService.getEventAttendance(+params.id).subscribe((data) => this.waitlist.next(data));
            this.eventModel = this.eventService.getEvent(+params.id);
            this.myMeetings = this.eventService.getMeetingsAtEvent(+params.id)
                .map((meetings) => {
                    return _.map(meetings, (meeting) => Object.assign(new Meeting(), meeting))
                });
            this.socket = socketIO("http://localhost:9000/event", {
                query: {
                    event_id: +params.id,
                    action: "adopters"
                }
            });
            this.socket.on("adopters", (data) => {
                this.waitlist.next(data);
            });
        });
    }

    ngOnDestroy(): void {
        this.paramsSub.unsubscribe();
    }

    addToWaitlist(): void {
        this.eventModel.subscribe((eventModel) => {
            this.eventService.addAttendee(eventModel.id, this.newAttendee)
                .subscribe((attendee: Attendee) => {
                    this.newAttendee = new Attendee();
                });
        });
    }
}
