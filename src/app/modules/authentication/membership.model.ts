import { AbstractModel } from "../../abstract.model";

import { Organization } from "../../pages/organization/organization.model";
import { User } from "./user.model";

export class Membership extends AbstractModel {
    public organization: Organization;
    public user: User;

    set _organization(organization: Organization) {
        this.organization = new Organization(organization);
    }

    set _member(user: User) {
        this.user = new User(user);
    }
}
