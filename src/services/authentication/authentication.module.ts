import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AuthenticationService } from "./authentication.service"
import { AuthenticationRoutes } from "./authentication.routes";

import { LoginPage } from "./login/login.page";
import { RegisterPage } from "./register/register.page";

@NgModule({
  declarations: [
    LoginPage,
    RegisterPage,
  ],
  imports: [
    CommonModule,
    FormsModule,

    AuthenticationRoutes,
  ],
  providers: [
    AuthenticationService,
  ],
})
export class AuthenticationModule { }
