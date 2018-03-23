import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { JoinPage } from "./join/join.page";
import { ManagePage } from "./manage/manage.page";

const routes: Routes = [
    {path: "", component: ManagePage},
    {path: "join", component: JoinPage},
    // {path: ":id", component: MeetingPage},
];

export const OrganizationRoutes: ModuleWithProviders = RouterModule.forChild(routes);
