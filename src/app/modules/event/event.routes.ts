import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EventIndexPage } from "./index/index.page";
import { StartEventPage } from "./start/start.page";
import { SelectAnimalsPage } from "./select-animals/select-animals.page";


const routes: Routes = [
    { path: "", component: EventIndexPage },
    { path: "start", component: StartEventPage },
    { path: ":id/animals", component: SelectAnimalsPage },
];

export const EventRoutes: ModuleWithProviders = RouterModule.forChild(routes);
