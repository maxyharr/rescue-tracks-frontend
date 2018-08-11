import * as _ from "lodash";

import { AbstractModel } from "./abstract.model";

export class Address extends AbstractModel {
    public id: number;
    public line1: string;
    public line2: string;
    public city: string;
    public state: string;
    public zipcode: string;
}
