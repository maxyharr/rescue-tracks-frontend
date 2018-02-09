import { Animal } from "../api";

export class EventModel {
    public id: number;
    public startTime: Date;
    public endTime: Date;
    public __animals__: Animal[];
    public __organization__: {name: string};

    get animals(): Animal[] {
        return this.__animals__;
    }

    get organization(): {name: string} {
        return this.__organization__;
    }
}
