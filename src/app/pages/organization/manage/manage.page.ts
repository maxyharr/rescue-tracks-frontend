import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import * as _ from "lodash";

import { ReplaySubject } from "rxjs";

import { Address } from "../address.model";
import { Organization } from "../organization.model";
import { Membership } from "../../../modules/authentication/membership.model";

import { OrganizationService } from "../organization.service";
import { AuthenticationService } from "../../../modules/authentication/authentication.service";

@Component({
    selector: "page-organization-manage",
    templateUrl: "manage.html",
    styleUrls: ["manage.scss"],
})
export class ManagePage implements OnInit {
    public organization: Organization;

    public memberships: {[key: string]: Membership[]};

    public activePanel: ReplaySubject<string>;

    public statusCounts: {pending: number, active: number, inactive: number};

    constructor(
        private authenticationService: AuthenticationService,
        private organizationService: OrganizationService,
        private router: Router
    ) {
        this.memberships = {};
        this.statusCounts = {pending: 0, active: 0, inactive: 0};
        this.activePanel = new ReplaySubject<string>(1);
    }

    ngOnInit() {
        this.organizationService.getOrganization(this.authenticationService.currentOrganization().id)
            .subscribe((organization) => {
                this.organization = new Organization(organization);

                this.organizationService
                    .getOrganizationMemberStatusCounts(this.organization)
                    .subscribe((memberCounts) => Object.assign(this.statusCounts, memberCounts));

                this.bindActivePanel();
            });
    }

    hasAnyMembers(): boolean {
        return !!_.reduce(this.statusCounts, (sum, count) => sum + count, 0);
    }

    private bindActivePanel() {
        this.activePanel.subscribe((currentStatus: string) => {
            this.organizationService
                .getOrganizationMembers(this.organization, currentStatus)
                .subscribe((memberships: Membership[]) => {
                    this.memberships[currentStatus] = _.map(memberships, (m) => new Membership(m));
                });
        });

        this.activePanel.next("active");
    }
}
