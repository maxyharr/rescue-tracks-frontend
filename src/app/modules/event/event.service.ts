import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import * as moment from 'moment';

import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import { EventModel } from "./event.model";

const BASE_RESCUE_TRACKS_URL = "http://localhost:9000";

@Injectable()
export class EventService {
    constructor(private http: HttpClient, private router: Router) {}

    public setupEvent(date: string, startTime: string, endTime: string): Observable<Object> {
        return this.http.post(
                   `${BASE_RESCUE_TRACKS_URL}/events`, {
                       startTime: moment(`${date} ${startTime}`).format(),
                       endTime:   moment(`${date} ${endTime}`).format(),
                   });
    }

    public getEvents(): Observable<EventModel[]> {
        return this.http.get<EventModel[]>(`${BASE_RESCUE_TRACKS_URL}/events`);
    }
}
