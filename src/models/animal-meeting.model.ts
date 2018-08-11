import { Animal } from "../api";

export class AnimalMeeting {
    public id: number;

    public concludedAt: Date;
    public createdAt: Date;

    private __animal__: Animal;

    get startedAt(): Date {
        return this.createdAt;
    }

    get animal(): Animal {
        return Object.assign(new Animal(), this.__animal__);
    }
}
