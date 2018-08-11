import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { APIModule } from "services/api/api.module";
import { APIInterceptor } from 'services/api/api.interceptor';
import { AuthenticationInterceptor } from "modules/authentication/authentication.interceptor";
import { EventModule } from "modules/event/event.module";

import { OrganizationService } from "./organization.service";

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    FormsModule,

    APIModule,
    EventModule,
  ],
  exports: [],
  providers: [
    OrganizationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
  ],
})
export class OrganizationModule { }
