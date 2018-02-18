import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import { Animal } from "./animal";

import { BASE_RESCUE_TRACKS_URL } from "../../constants";

@Injectable()
export class APIService {

    constructor(@Inject(BASE_RESCUE_TRACKS_URL) private baseUrl: string, private http: HttpClient) {}

    public getAnimalsForEvent(eventId: number, all: boolean = false): Observable<Animal[]> {
        return this.http
                   .get<Animal[]>(
                       `${this.baseUrl}/events/${eventId}/animals`,
                       { params: { all: all ? "true" : "" } }
                   );
    }

    public setAnimalsInEvent(eventId: number, animals: string[]): Observable<Object> {
        return this.http
                   .put(
                       `${this.baseUrl}/events/${eventId}`,
                       { animals }
                   )
    }
}
