import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import * as _ from "lodash";

import { Animal } from "../api";
import { Attendee } from "../event/attendee.model";
import { Meeting } from "./meeting.model";

const BASE_RESCUE_TRACKS_URL = "http://localhost:9000";

@Injectable()
export class MeetingService {
    constructor(private http: HttpClient) { }

    public currentMeetingForAnimal(animal: Animal): Meeting {
        if((animal as any).__meetings__ && (animal as any).__meetings__.length) {
            let meeting = _.find((animal as any).__meetings__, (m) => !m.concludedAt);
            if(meeting.__attender__) {
                return Object.assign(new Meeting(), meeting.__attender__);
            }
        }
        return undefined;
    }

    public getMeeting(meetingId: number): Observable<Meeting> {
        return this.http.get<Meeting>(
                `${BASE_RESCUE_TRACKS_URL}/meetings/${meetingId}`
            );
    }

    public startMeetingWithAnimal(meetingId: number, animal: Animal): Observable<Meeting> {
        return this.http.post<Meeting>(
            `${BASE_RESCUE_TRACKS_URL}/meetings/${meetingId}`,
            { animal_id: animal.id }
        );
    }
}
