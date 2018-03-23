import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import { Address } from "../address.model";
import { Organization } from "../organization.model";

import { OrganizationService } from "../organization.service";

@Component({
    selector: 'page-organization-join',
    templateUrl: 'join.html',
})
export class JoinPage implements OnInit {
    public newOrganization: Organization;

    constructor(
        private organizationService: OrganizationService,
        private router: Router
    ) {}

    ngOnInit() {
        this.newOrganization = new Organization({address: new Address()});
    }

    createOrganization() {
        this.organizationService.createOrganization(this.newOrganization)
            .subscribe((organization) => {
                // Will have to reset the token here, new current organization

                this.router.navigateByUrl("organization");
            });
    }
}
