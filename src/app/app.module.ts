import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { HomePage } from "./pages/home/home";

import { APIModule } from "./modules/api";

import { AppComponent } from "./app.component";

import { routes } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
  ],
  imports: [
    APIModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
