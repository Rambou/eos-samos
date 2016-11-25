import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterializeModule} from "angular2-materialize";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ContactComponent} from "./contact/contact.component";
import {AwardsComponent} from "./awards/awards.component";
import {routeModule} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {DistributorsComponent} from "./distributors/distributors.component";
import {NewsComponent} from "./news/news.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {WinesComponent} from "./wines/wines.component";
import {RestaurantComponent} from "./restaurant/restaurant.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AwardsComponent,
    HomeComponent,
    DistributorsComponent,
    NewsComponent,
    GalleryComponent,
    WinesComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
