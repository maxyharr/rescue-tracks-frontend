import { Component, Input } from "@angular/core";

import { BehaviorSubject } from "rxjs";

import {
    EventModel,
    EventService,
 } from "modules";

@Component({
    selector: "page-event-index",
    templateUrl: "index.html",
    styleUrls: ["index.scss"],
})
export class EventIndexPage {

    public events: BehaviorSubject<EventModel[]>;

    constructor(private eventService: EventService) {
        this.events = new BehaviorSubject<EventModel[]>([]);
        eventService.getEvents(true).subscribe((events: EventModel[]) => {
            this.events.next(events.sort(eventService.compareEventsByTime));
        });
    }
}
