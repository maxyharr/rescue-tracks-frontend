import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import * as _ from "lodash";

import { ReplaySubject } from "rxjs";

import { Address } from "../address.model";
import { EventModel } from "../../../modules/event/event.model";
import { Membership } from "../../../modules/authentication/membership.model";
import { Organization } from "../organization.model";

import { EventService } from "../../../modules/event/event.service";
import { OrganizationService } from "../organization.service";
import { AuthenticationService } from "../../../modules/authentication/authentication.service";

@Component({
    selector: "page-organization-manage",
    templateUrl: "manage.html",
    styleUrls: ["manage.scss"],
})
export class ManagePage implements OnInit {
    public organization: Organization;

    public events: EventModel[];

    public memberships: {[key: string]: Membership[]};

    public activePanel: ReplaySubject<string>;

    public statusCounts: {pending: number, active: number, inactive: number};

    constructor(
        private authenticationService: AuthenticationService,
        private eventService: EventService,
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

        this.eventService.getEvents().subscribe((events: EventModel[]) => {
            this.events = events;
        });
    }

    actionForMembership(membership: Membership): void {
        this.membershipActions[membership.status](membership);
    }

    private bindActivePanel() {
        this.activePanel.subscribe((currentStatus: string) => {
            this.updateStatus(currentStatus);
        });

        this.activePanel.next("active");
    }

    private membershipActions = {
        active: (membership) => {
        },
        pending: (membership) => {
            this.statusCounts.pending--;
            this.statusCounts.active++;
            this.memberships.active = _.unionBy(
                this.memberships.active,
                _.remove(this.memberships.pending, (m) => m.id == membership.id),
                "id");
            this.organizationService
                .activateMembership(this.organization, membership)
                .subscribe(() => {
                    this.updateStatus("active");
                });
        },
        inactive: (membership) => {
            this.statusCounts.inactive--;
            this.statusCounts.active++;
            this.memberships.active = _.unionBy(
                this.memberships.active,
                _.remove(this.memberships.inactive, (m) => m.id == membership.id),
                "id");
            this.updateStatus("active");

        },
    };

    private updateStatus(status: string) {
        this.organizationService
            .getOrganizationMembers(this.organization, status)
            .subscribe((memberships: Membership[]) => {
                this.memberships[status] = _.map(memberships, (m) => new Membership(m));
                this.statusCounts[status] = this.memberships[status].length;
            });
    }
}
