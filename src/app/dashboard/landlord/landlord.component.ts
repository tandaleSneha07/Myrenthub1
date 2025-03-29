import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-landlord',
  imports: [],
  templateUrl: './landlord.component.html',
  styleUrl: './landlord.component.scss'
})
export class LandlordComponent {
  
  constructor(private router: Router) {}

  navigationToAddproperty() {
    this.router.navigate(['/addproperty']); // Navigates to AboutComponent
  }
  Navigation() {
    this.router.navigate(['/account']); // Navigates to FeedbackComponent
  }
}


