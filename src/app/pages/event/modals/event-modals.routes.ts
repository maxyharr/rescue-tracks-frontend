import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TestModalComponent } from "./test.component";

const routes: Routes = [
    {path: "test", component: TestModalComponent, outlet: "modal"},
];

export const TestModalComponentRoutes: ModuleWithProviders = RouterModule.forChild(routes);
