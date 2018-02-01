import { Animal } from "../api";

export class EventModel {
    public id: number;
    public startTime: Date;
    public endTime: Date;
    public __animals__: Animal[];

    get animals(): Animal[] {
        return this.__animals__;
    }
}
