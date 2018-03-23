import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { APIModule, APIInterceptor } from "../../modules/api";
import { AuthenticationInterceptor } from "../../modules/authentication/authentication.interceptor";

import { OrganizationService } from "./organization.service";

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    FormsModule,

    APIModule,
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
