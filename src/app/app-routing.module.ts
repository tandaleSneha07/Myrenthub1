//import { NgModule} from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './auth/login/login.component';
//import { RegisterComponent } from './auth/register/register.component';
//import { WelcomeComponent } from './auth/welcome/welcome.component';


//const routes: Routes =[
    //{ path :'login', component :LoginComponent },
    //{ path :'register', component :RegisterComponent },
    //{ path :'welcome', component :WelcomeComponent },
   // { path :' ', component :WelcomeComponent }
    
    //{ path :' ', redirectTo : '/welcome', pathMatch : 'full' },


//];

//@NgModule ({
   // imports :[RouterModule.forRoot(routes)],
   // exports :[RouterModule]
//})
//export class AuthRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddpropertyComponent } from './dashboard/addproperty/addproperty.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { AccountComponent } from './dashboard/account/account.component';
import { LandlordComponent } from './dashboard/landlord/landlord.component';
import { TenantComponent } from './dashboard/tenant/tenant.component';
import { MapComponent } from './dashboard/map/map.component';


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // ✅ Default page
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'welcome', component: WelcomeComponent},
  { path:'addproperty', component: AddpropertyComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'account',component:AccountComponent},
  { path: 'landlord', component: LandlordComponent },
  { path: 'tenant', component: TenantComponent },
  {path : 'map', component: MapComponent}
  // ✅ Redirect unknown routes to welcome
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



