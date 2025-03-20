
//import { Component } from '@angular/core';
//import { Router } from '@angular/router';

//@Component({
  //selector: 'app-welcome',
 // templateUrl: './welcome.component.html',
  //styleUrls: ['./welcome.component.css']
//})
//export class WelcomeComponent {
  //constructor(private router: Router) {}

  //navigateToRegister() {
   // this.router.navigate(['/register']);
  //}
//}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
//export class WelcomeComponent {
  //constructor(private router: Router) {
   // console.log('✅ WelcomeComponent Loaded'); // Debugging
  //}

  //navigateToRegister() {
    //console.log('➡️ Navigating to Register');
    //this.router.navigate(['/register']);
 // }
//}
export class WelcomeComponent {
  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/login']); // Navigates to AboutComponent
  }
}

