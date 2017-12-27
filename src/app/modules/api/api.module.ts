import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { APIService } from "./api.service";

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        APIService,
    ],
})
export class APIModule {}
