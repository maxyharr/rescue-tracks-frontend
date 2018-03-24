import * as _ from "lodash";

import { AbstractModel } from "../../abstract.model";

import { Organization } from "../../pages/organization/organization.model";
import { Animal } from "../api";

export class EventModel extends AbstractModel {
    public startTime: Date;
    public endTime: Date;
    public animals: Animal[];
    public organization: Organization;

    public animalCount: number;

    set _animals(animals: Animal[]) {
        this.addArray("animals", Animal, animals);
    }

    set _organization(organization: Organization) {
        this.add("organization", Organization, organization);
    }
}
