import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import { Animal } from "./animal";

const BASE_RESCUE_TRACKS_URL = "http://localhost:9000";

@Injectable()
export class APIService {

    constructor(private http: HttpClient) {}

    public getAnimalsForEvent(eventId: number, all: boolean = false): Observable<Animal[]> {
        return this.http
                   .get<Animal[]>(
                       `${BASE_RESCUE_TRACKS_URL}/events/${eventId}/animals`,
                       { params: { all: all ? "true" : "" } }
                   );
    }

    public setAnimalsInEvent(eventId: number, animals: string[]): Observable<Object> {
        return this.http
                   .put(
                       `${BASE_RESCUE_TRACKS_URL}/events/${eventId}`,
                       { animals }
                   )
    }
}
