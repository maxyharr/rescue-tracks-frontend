import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from "rxjs";

import * as moment from "moment";

@Pipe({
    name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
    transform(date: Date): Observable<string> {
        if(!date) {
            return Observable.of("unknown time ago");
        }
        let startTime = moment(date);

        return Observable.timer(0, 10000).map(() => startTime.fromNow());
    }
}
