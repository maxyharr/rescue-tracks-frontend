import { Pipe, PipeTransform } from '@angular/core';

import * as moment from "moment";

@Pipe({
    name: 'dateOrTime'
})
export class FormatDatePipe implements PipeTransform {
    transform(time: Date): string {
        if(!time) {
            return "";
        }
        let mTime = moment(time);

        if(mTime.isSame(moment(), "day")) {
            return mTime.fromNow();
        }

        return mTime.format("lll");
    }
}
