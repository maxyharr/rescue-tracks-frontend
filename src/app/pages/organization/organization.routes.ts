import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreatePage } from "./create/create.page";
import { JoinPage } from "./join/join.page";
import { ManagePage } from "./manage/manage.page";
import { ManageMembersPage } from "./manage-members/manage-members.page";


const routes: Routes = [
    {path: "", component: ManagePage},
    {path: "create", component: CreatePage},
    {path: "join", component: JoinPage},
    {path: "members", component: ManageMembersPage},
];

export const OrganizationRoutes: ModuleWithProviders = RouterModule.forChild(routes);
