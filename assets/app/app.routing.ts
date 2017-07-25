import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './authentication/login.component';
import { HomeComponent } from './home/home.component';
import { FlightInfoComponent } from './home/flight-info/flight-info.component';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, 
        children: [
            { path: 'flight-info', component: FlightInfoComponent }
        ]},
];

export const routing = RouterModule.forRoot(APP_ROUTES);