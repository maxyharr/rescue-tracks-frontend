import { Component, Input } from "@angular/core";

import { BehaviorSubject } from "rxjs";

import { EventService } from "../event.service";

import { EventModel } from "../event.model";

@Component({
    selector: "page-event-index",
    templateUrl: "index.html",
    styleUrls: ["index.scss"],
})
export class EventIndexPage {

    public events: BehaviorSubject<EventModel[]>;

    constructor(private eventService: EventService) {
        this.events = new BehaviorSubject<EventModel[]>([]);
        eventService.getEvents().subscribe((events: EventModel[]) => {
            this.events.next(events.sort(eventService.compareEventsByTime));
        });
    }
}
