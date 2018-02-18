import { Routes } from '@angular/router'

import { HomePage } from "./pages/home/home";

const AuthenticationModule = "./modules/authentication/authentication.module#AuthenticationModule";
const EventModule          = "./pages/event/event.page-module#EventPageModule";
// const EventPapersModule    = "./modules/event-papers/event-papers.module#EventPapersModule";
const MeetingPages         = "./pages/meeting/meeting.page-module#MeetingPageModule";

export const routes: Routes = [
    {path: "", component: HomePage},
    {path: "auth",         loadChildren: AuthenticationModule },
    // {path: "event-papers", loadChildren: EventPapersModule},
    {path: "events",       loadChildren: EventModule},
    {path: "meetings",     loadChildren: MeetingPages},
];
