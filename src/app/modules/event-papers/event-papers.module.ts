import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EventPapersRoutes } from "./event-papers.routes";
import { EventPapersPage } from "./event-papers.page";

import { APIModule } from "../api";

@NgModule({
  declarations: [
    EventPapersPage,
  ],
  imports: [
    APIModule,
    CommonModule,

    EventPapersRoutes,
  ],
})
export class EventPapersModule { }
