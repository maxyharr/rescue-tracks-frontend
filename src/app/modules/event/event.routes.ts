import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StartEventPage } from "./start/start.page";
import { SelectAnimalsPage } from "./select-animals/select-animals.page";


const routes: Routes = [
  { path: "start", component: StartEventPage },
  { path: ":id/dogs", component: SelectAnimalsPage },
];

export const EventRoutes: ModuleWithProviders = RouterModule.forChild(routes);
