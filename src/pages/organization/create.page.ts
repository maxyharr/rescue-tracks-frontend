import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Address } from "models/address.model";
import { Organization } from "models/organization.model";
import { OrganizationService } from "./organization.service";

@Component({
    selector: 'page-organization-create',
    template: `
    <div class="card">
        <div class="card-header">
            <div class="card-header-title">
                Create a new organization
            </div>
        </div>
        <form class="card-content" (submit)="createOrganization()">
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" placeholder="RescueTracks Rescue" name="name" [(ngModel)]="newOrganization.name">
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Address</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" placeholder="Street Address" name="address_line1" [(ngModel)]="newOrganization.address.line1">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" placeholder="Apt/Floor/Unit/Suite (optional)" name="address_line2" [(ngModel)]="newOrganization.address.line2">
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" placeholder="City" name="address_city" [(ngModel)]="newOrganization.address.city">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" placeholder="State" name="address_state" [(ngModel)]="newOrganization.address.state">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" placeholder="Zipcode" name="address_zipcode" [(ngModel)]="newOrganization.address.zipcode">
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <button type="submit" class="button is-primary is-large">Create</button>
            </div>
        </form>
    </div>
    `
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
