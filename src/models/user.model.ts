import { AbstractModel } from "./abstract.model";

export class User extends AbstractModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;

    get name(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get shortName(): string {
        return `${this.firstName} ${this.lastName[0]}.`;
    }

    get nameLastFirst(): string {
        return `${this.lastName}, ${this.firstName}`;
    }
}
