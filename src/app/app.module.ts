import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnregisteredBusinessComponent } from './unregistered-business/unregistered-business.component';
import { Angular2CsvModule } from 'angular2-csv';

const appRoutes: Routes = [
  {path:"" , component:LoginComponent} ,
  {path:"signup" , component:SignupComponent} ,
  {path:"home" , component:HomeComponent} ,
  {path:"stats" , component:StatsComponent} ,
  {path:'business' , component:UnregisteredBusinessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    StatsComponent,
    NavbarComponent,
    UnregisteredBusinessComponent ,
    
  ],
  
  imports: [
    BrowserModule ,
    Angular2CsvModule ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent] ,

  
})
export class AppModule { }
