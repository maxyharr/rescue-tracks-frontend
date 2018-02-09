import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MeetingPage } from "./show/show.page";
import { MeetWithPage } from "./meet-with/meet-with.page";

const routes: Routes = [
    {path: ":id/with", component: MeetWithPage},
    {path: ":id", component: MeetingPage},
];

export const MeetingRoutes: ModuleWithProviders = RouterModule.forChild(routes);
