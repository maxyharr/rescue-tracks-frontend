import * as _ from "lodash";

import { AbstractModel } from "../../abstract.model";

import { EventModel } from "../../modules/event/event.model";
import { User } from "../../modules/authentication/user.model";
import { Address } from "./address.model";

export class Organization extends AbstractModel {
    public name: string;
    public events: EventModel[];
    public members: User[];
    public address: Address;

    set _address(address: Address) {
        this.add("address", Address, address);
    }

    set _events(events: EventModel[]) {
        this.addArray("events", EventModel, events);
    }

}
