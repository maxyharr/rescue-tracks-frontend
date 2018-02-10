import { Attendee,  } from "../event";
import { User } from "../authentication/user.model";
import { Animal } from "../api";
import * as _ from "lodash";

export class Meeting {
    public id: number;

    get attendee(): Attendee {
        return Object.assign(new Attendee(), (this as any).__adopter__);
    }

    get animals(): Animal[] {
        if((this as any).__event__ && (this as any).__event__.__animals__) {
            return _.map((this as any).__event__.__animals__,
                (a) => Object.assign(new Animal(), a)
            );
        } else if((this as any).__meetings__ && (this as any).__meetings__.length && (this as any).__meetings__[0].__animal__) {
            return _.map((this as any).__meetings__,
                (meeting: {__animal__: any}) => Object.assign(new Animal(), meeting.__animal__)
            );
        } else {
            return [];
        }
    }

    get adoptionCounselor(): User {
        return Object.assign(new User(), (this as any).__adoptionCounselor__);
    }
}
