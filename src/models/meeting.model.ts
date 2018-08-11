import * as _ from "lodash";
import { Attendee, EventModel } from "modules/event";
import { User } from "./user.model";
import { Animal } from "modules/api";
import { AnimalMeeting } from "./animal-meeting.model";

export class Meeting {
    public id: number;

    private __eventAttender__: any;
    private __animalMeetings__: AnimalMeeting[];

    get animals(): Animal[] {
        return _.map(this.animalMeetings, "animal");
    }

    get activeAnimalMeeting(): AnimalMeeting {
        return _.find(this.animalMeetings, (meeting: AnimalMeeting) => !meeting.concludedAt);
    }

    get animalMeetings(): AnimalMeeting[] {
        return _.map(this.__animalMeetings__, (meeting) => Object.assign(new AnimalMeeting(), meeting));
    }

    get attendee(): Attendee {
        return Object.assign(new Attendee(), this.__eventAttender__.__adopter__);
    }

    get event(): EventModel {
        return Object.assign(new EventModel(), this.__eventAttender__.__event__);
    }

    get adoptionCounselor(): User {
        return Object.assign(new User(), (this as any).__adoptionCounselor__);
    }
}
