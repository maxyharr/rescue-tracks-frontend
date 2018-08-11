import { AbstractModel } from "./abstract.model";
import { Organization } from "./organization.model";
import { Animal } from "./animal.model";

export class EventModel extends AbstractModel {
    public id: number;
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
