import { Routes } from '@angular/router'

import { HomePage } from "./pages/home/home";

const AuthenticationModule = "./modules/authentication/authentication.module#AuthenticationModule";
const EventModule          = "./modules/event/event.module#EventModule";
const EventPapersModule    = "./modules/event-papers/event-papers.module#EventPapersModule";

export const routes: Routes = [
    {path: "", component: HomePage},
    {path: "auth",         loadChildren: AuthenticationModule },
    {path: "event-papers", loadChildren: EventPapersModule},
    {path: "events",       loadChildren: EventModule},
];
