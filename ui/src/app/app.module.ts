import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HorNavBarComponent } from './hor-nav-bar/hor-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchViewComponent } from './search-view/search-view.component';


const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus' , component: ContactUsComponent},
  { path: 'search/:term', component: SearchViewComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HorNavBarComponent,
    HomeComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    SearchViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }