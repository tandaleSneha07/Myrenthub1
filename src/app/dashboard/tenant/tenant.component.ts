// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { MapComponent } from '../map/map.component';




// @Component({
//   selector: 'app-tenant',
//   imports: [
//     MapComponent
//   ],
//   templateUrl: './tenant.component.html',
//   styleUrl: './tenant.component.scss'
// })
// export class TenantComponent {
//      constructor(private router: Router) {}
    
//      debugNavigation() {
//         this.router.navigate(['/feedback']); // Navigates to FeedbackComponent
//       }
//       navigate() {
//         this.router.navigate(['/account']); // Navigates to FeedbackComponent
//       }

//       onSearchClick() {
//         const searchValue = this.searchText.trim();  // use [(ngModel)]="searchText"
//         if (searchValue) {
//           this.mapService.searchLocation(searchValue);
//         } else {
//           alert('Please enter a search term');
//         }
//       }
      
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MapComponent } from '../map/map.component';
import { MapService } from '../map/map.service'; // Adjust path as needed
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tenant',
  standalone: true,
  imports: [
    MapComponent,
    FormsModule
  ],
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent {
  searchText: string = ''; // <-- declare it
  constructor(private router: Router, public mapService: MapService) {} // <-- inject mapService

  debugNavigation() {
    this.router.navigate(['/feedback']);
  }

  navigate() {
    this.router.navigate(['/account']);
  }

  onSearchClick() {
    const searchValue = this.searchText.trim();
    if (searchValue) {
      this.mapService.searchLocation(searchValue);
    } else {
      alert('Please enter a search term');
    }
  }
}
