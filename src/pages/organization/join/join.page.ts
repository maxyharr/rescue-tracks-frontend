import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Address } from "models/address.model";
import { Organization } from "models/organization.model";
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

    ngOnInit(): void {
        this.newOrganization = new Organization({address: new Address()});
    }

    createOrganization(): void {
        this.organizationService.createOrganization(this.newOrganization)
            .subscribe((organization) => {
                this.router.navigateByUrl("organization");
            });
    }
}
