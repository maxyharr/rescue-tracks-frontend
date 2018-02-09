import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Observable, Subscription } from "rxjs";

import { EventService } from "../event.service";

import { EventModel } from "../event.model";
import { Attendee } from "../attendee.model";

@Component({
    selector: "page-event-show",
    templateUrl: "show.html",
    styleUrls: ["show.scss"]
})
export class EventPage implements OnInit, OnDestroy {

    private paramsSub: Subscription;

    public eventModel: Observable<EventModel>;

    public newAttendee: Attendee;

    public waitlist: Observable<Attendee[]>;

    constructor(private route: ActivatedRoute, private eventService: EventService) {
        this.newAttendee = new Attendee();
    }

    ngOnInit(): void {
        this.paramsSub = this.route.params.subscribe(params => {
            this.eventModel = this.eventService.getEvent(+params.id);
            this.waitlist   = this.eventService.getEventAttendance(+params.id);
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
                    this.waitlist    = this.eventService.getEventAttendance(eventModel.id);
                });
        });
    }
}
