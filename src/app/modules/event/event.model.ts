import * as _ from "lodash";

import { AbstractModel } from "../../abstract.model";

import { Animal } from "../api";

export class EventModel extends AbstractModel {
    public startTime: Date;
    public endTime: Date;
    public animals: Animal[];
    private __organization__: {name: string};

    set _animals(animals: Animal[]) {
        this.addArray("animals", Animal, animals);
    }

    get organization(): {name: string} {
        return this.__organization__;
    }
}
