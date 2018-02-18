import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { BASE_RESCUE_TRACKS_URL } from "./constants";

import { HomePage } from "./pages/home/home";

import { APIModule } from "./modules/api";
import { AuthenticationModule } from "./modules/authentication";
import { AuthenticationInterceptor } from "./modules/authentication/authentication.interceptor";

import { AppComponent } from "./app.component";

import { routes } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
  ],
  imports: [
    APIModule,
    AuthenticationModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },{
      provide: BASE_RESCUE_TRACKS_URL,
      useValue: "http://localhost:9000",
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
