import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ParticlesModule } from "angular-particle";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LightBottomSvgComponent } from "./light-bottom-svg/light-bottom-svg.component";
import { DarkBottomSvgComponent } from "./dark-bottom-svg/dark-bottom-svg.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    LightBottomSvgComponent,
    DarkBottomSvgComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
