import { Routes } from '@angular/router';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandlordComponent } from './dashboard/landlord/landlord.component';
import { TenantComponent } from './dashboard/tenant/tenant.component';

export const routes: Routes = [
    {path:'welcome',component:WelcomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'landlord',component:LandlordComponent},
    {path:'tenant',component:TenantComponent},

    {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
