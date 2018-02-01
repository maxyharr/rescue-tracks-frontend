import { Component, Input } from "@angular/core";

import * as moment from "moment";
import "twix";
import { Observable, BehaviorSubject } from "rxjs";

import { EventService } from "../event.service";

import { EventModel } from "../event.model";

@Component({
    selector: 'page-event-index',
    templateUrl: 'index.html',
})
export class EventIndexPage {

    public events: BehaviorSubject<EventModel[]>;

    constructor(eventService: EventService) {
        this.events = new BehaviorSubject<EventModel[]>([]);
        eventService.getEvents().subscribe((events: EventModel[]) => {
            this.events.next(events.sort((a: EventModel, b: EventModel) => {
                let mAs = moment(a.startTime);
                let mBs = moment(b.startTime);
                let mAe = moment(a.endTime);
                let mBe = moment(b.endTime);

                if (mAs.isBefore(mBs) || (mAs.isSame(mBs) && mAe.isBefore(mBe))) {
                    return -1;
                } else if (mAs.isSame(mBs) && mAs.isSame(mBe)) {
                    return 0;
                }

                return 1;
            }));
        });
    }

    formatEventDate(event: EventModel): string {
        return moment(event.startTime).twix(event.endTime).format({implicitMinutes: false});
    }
}
