import * as _ from "lodash";

import { AbstractModel } from "../../abstract.model";

import { EventModel } from "models/event.model";
import { User } from "models/user.model";
import { Address } from "../../models/address.model";

export class Organization extends AbstractModel {
    public name: string;
    public events: EventModel[];
    public members: User[];
    public owner: User;
    public address: Address;

    set _address(address: Address) {
        this.add("address", Address, address);
    }

    set _events(events: EventModel[]) {
        this.addArray("events", EventModel, events);
    }

    set _owner(owner: User) {
        this.add("owner", User, owner);
    }
}
