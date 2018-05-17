import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import { Address } from "../address.model";
import { Organization } from "../organization.model";

import { OrganizationService } from "../organization.service";

@Component({
    selector: 'page-organization-create',
    templateUrl: 'create.html',
})
export class CreatePage implements OnInit {
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
                this.router.navigateByUrl("organization");
            });
    }
}
