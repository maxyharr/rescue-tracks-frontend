import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EventModule } from "modules/event/event.module";
import { OrganizationModule } from "./organization.module";

import {
  CreatePage,
  JoinPage,
  ManagePage,
  ManageMembersPage,
} from ".";

import { OrganizationRoutes } from "./organization.routes";

@NgModule({
  declarations: [
    // Pages
    CreatePage,
    JoinPage,
    ManagePage,
    ManageMembersPage,
  ],
  imports: [
    CommonModule,
    FormsModule,

    EventModule,
    OrganizationModule,

    OrganizationRoutes,
  ],
})
export class OrganizationPageModule { }
