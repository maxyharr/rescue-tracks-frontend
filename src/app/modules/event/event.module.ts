import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { APIModule } from "../api/api.module";

import { EventIndexPage } from "./index/index.page";
import { StartEventPage } from "./start/start.page";
import { SelectAnimalsPage } from "./select-animals/select-animals.page";

import { EventRoutes } from "./event.routes";
import { EventService } from "./event.service";

@NgModule({
  declarations: [
    EventIndexPage,
    SelectAnimalsPage,
    StartEventPage,
  ],
  imports: [
    CommonModule,
    FormsModule,

    APIModule,

    EventRoutes,
  ],
  providers: [
    EventService,
  ],
})
export class EventModule { }
