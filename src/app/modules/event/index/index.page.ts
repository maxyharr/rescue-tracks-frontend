import { Component, Input } from "@angular/core";

import { Observable } from "rxjs";

import { EventService } from "../event.service";

import { EventModel } from "../event.model";

@Component({
    selector: 'page-event-index',
    templateUrl: 'index.html',
})
export class EventIndexPage {

    public events: Observable<EventModel[]>;

    constructor(eventService: EventService) {
        this.events = eventService.getEvents();
    }
}
