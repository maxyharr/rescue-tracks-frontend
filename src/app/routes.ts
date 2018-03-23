import { Routes } from '@angular/router'

import { HomePage } from "./pages/home/home";

const AuthenticationModule = "./modules/authentication/authentication.module#AuthenticationModule";
const EventModule          = "./pages/event/event.page-module#EventPageModule";
const MeetingPages         = "./pages/meeting/meeting.page-module#MeetingPageModule";
const OrganizationModule   = "./pages/organization/organization.page-module#OrganizationPageModule";

export const routes: Routes = [
    {path: "", component: HomePage},
    {path: "auth",         loadChildren: AuthenticationModule },
    {path: "organization", loadChildren: OrganizationModule},
    {path: "events",       loadChildren: EventModule},
    {path: "meetings",     loadChildren: MeetingPages},
];
