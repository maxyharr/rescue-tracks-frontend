import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { JoinEventModalComponent } from "./join.modal";

export const EventModalComponentRoutes: Routes = [
    {path: "join-event/:id", component: JoinEventModalComponent, outlet: "modal"},
];
