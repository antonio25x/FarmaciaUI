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
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { UsersComponent } from './menu/users/users.component';
import { MedicineComponent } from './menu/medicine/medicine.component';
import { ClientsComponent } from './menu/clients/clients.component';
import { SalesComponent } from './menu/sales/sales.component';
import { ReportsComponent } from './menu/reports/reports.component';
import { MomentModule } from "angular2-moment/moment.module";


const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus' , component: ContactUsComponent},
  { path: 'search/:term', component: SearchViewComponent },
  { path: 'users', component: UsersComponent },
  { path: 'medicine', component: MedicineComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'reports', component: ReportsComponent },
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
    MenuListComponent,
    UsersComponent,
    MedicineComponent,
    ClientsComponent,
    SalesComponent,
    ReportsComponent
  ],
  imports: [
    MomentModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }