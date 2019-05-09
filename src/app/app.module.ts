import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule, MatTooltipModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { ToolTipComponent } from "./tool-tip/tool-tip.component";
import { ToolTipDirective } from "./tool-tip.directive";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ToolTipComponent,
    ToolTipDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatTooltipModule,
    MatButtonModule,
    BrowserAnimationsModule,
    OverlayModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ToolTipComponent]
})
export class AppModule {}
