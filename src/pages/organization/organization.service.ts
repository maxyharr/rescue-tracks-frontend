import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Organization } from "./organization.model";
import { Membership } from "models/membership.model";

@Injectable()
export class OrganizationService {
    constructor(private http: HttpClient) {}//, private socket: SocketService, private router: Router) {}

    public getOrganizations() {

    }

    public getOrganization(organization: Organization|number): Observable<Organization> {
        if (organization instanceof Organization) {
            organization = organization.id;
        }

        return this.http.get<Organization>(`organizations/${organization}`);
    }

    public createOrganization(organization: Organization): Observable<Organization> {
        return this.http.post<Organization>("organizations", {organization});
    }

    public getOrganizationMemberStatusCounts(organization: Organization, status?: string): Observable<{[key: string]: number}> {
        let params = {count: "true"};

        if (status) {
            Object.assign(params, {status});
        }

        return this.http.get<{[key: string]: number}>(`organizations/${organization.id}/members`, {params});
    }

    public getOrganizationMembers(organization: Organization, status?: string): Observable<Membership[]> {
        let params = {};

        if (status) {
            Object.assign(params, {status});
        }

        return this.http.get<Membership[]>(`organizations/${organization.id}/members`, {params});
    }

    public activateMembership(organization: Organization, membership: Membership): Observable<Membership> {
        if (membership.status == "active") {
            throw "Cannot activate membership: already active";
        }
        debugger;
        return this.http.put<Membership>(`memberships/${membership.id}`, {
            status: "active",
        });
    }
}
