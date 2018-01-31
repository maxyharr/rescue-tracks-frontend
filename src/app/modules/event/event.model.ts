import { Animal } from "../api";

export class EventModel {
    public id: number;
    public start: Date;
    public end: Date;
    public animals: Animal[];
}
