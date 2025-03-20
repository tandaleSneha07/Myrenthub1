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

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }, // ✅ Default page
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'welcome', component: WelcomeComponent}
  // ✅ Redirect unknown routes to welcome
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



