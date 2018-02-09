import { Pipe, PipeTransform } from '@angular/core';

import * as moment from "moment";
import "twix";

import { EventModel } from "./event.model";

@Pipe({
    name: 'formatEventDate'
})
export class FormatEventDatePipe implements PipeTransform {
    transform(event: EventModel): string {
        if(!event) {
            return "";
        }
        return moment(event.startTime).twix(event.endTime).format({implicitMinutes: false});
    }
}
