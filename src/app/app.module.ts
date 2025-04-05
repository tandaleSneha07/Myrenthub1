import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddpropertyComponent } from './dashboard/addproperty/addproperty.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { AccountComponent } from './dashboard/account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MapComponent } from './dashboard/map/map.component';

@NgModule({
  declarations: [
    AppComponent,         // Main application component
    WelcomeComponent,     // Welcome page component
    LoginComponent,       // Login page component
    RegisterComponent,    // Registration page component
    AddpropertyComponent, // Add property feature component
    FeedbackComponent,    // Feedback feature component
    AccountComponent,  
    MapComponent   // Account management component
        
  ],
  imports: [
    BrowserModule,        // Core Angular module for browser support
    AppRoutingModule,     // Application routing module
    RouterModule, 
          
    
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrapping the main AppComponent
})
export class AppModule { }