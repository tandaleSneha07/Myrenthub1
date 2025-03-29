import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tenant',
  imports: [
   

  ],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.scss'
})
export class TenantComponent {
     constructor(private router: Router) {}
    
     debugNavigation() {
        this.router.navigate(['/feedback']); // Navigates to FeedbackComponent
      }
      navigate() {
        this.router.navigate(['/account']); // Navigates to FeedbackComponent
      }
}
