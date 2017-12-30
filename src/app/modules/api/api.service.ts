import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import { ShelterLuvAnimal } from "./shelter-luv.animal";

const BASE_RESCUE_TRACKS_URL = "http://localhost:9000";

@Injectable()
export class APIService {

    constructor(private http: HttpClient) {}

    public getEventPapers(): Observable<ShelterLuvAnimal[]> {
        return this.http
                   .get<ShelterLuvAnimal[]>(
                       `${BASE_RESCUE_TRACKS_URL}/event_papers`
                   );
    }
}
