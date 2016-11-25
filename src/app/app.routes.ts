import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ContactComponent} from "./contact/contact.component";
import {AwardsComponent} from "./awards/awards.component";
import {HomeComponent} from "./home/home.component";
import {DistributorsComponent} from "./distributors/distributors.component";
import {NewsComponent} from "./news/news.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {WinesComponent} from "./wines/wines.component";
import {RestaurantComponent} from "./restaurant/restaurant.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent // Remember to import the Home Component
  },
  {path: 'contact', component: ContactComponent},
  {path: 'distributor', component: DistributorsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'wines', component: WinesComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'award', component: AwardsComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const routeModule: ModuleWithProviders = RouterModule.forRoot(routes);
