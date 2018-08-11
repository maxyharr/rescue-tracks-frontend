import { Pipe, PipeTransform } from '@angular/core';

import * as moment from "moment";
import "twix";

import { EventModel } from "models/event.model";

@Pipe({
    name: 'eventIsActive'
})
export class EventIsActivePipe implements PipeTransform {
    transform(event: EventModel): boolean {
        if(!event) {
            return false;
        }

        return moment(event.startTime).twix(event.endTime).isCurrent();
    }
}
