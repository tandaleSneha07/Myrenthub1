import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-landlord',
  imports:[MapComponent],
  templateUrl: './landlord.component.html',
  styleUrls: ['./landlord.component.scss']
})
export class LandlordComponent {
  
  lat: number = 20.593683;  // ✅ Latitude for India
  lng: number = 78.962883;  // ✅ Longitude for India

  constructor(private router: Router) {}

  navigationToAddproperty() {
    this.router.navigate(['/addproperty']);
  }

  Navigation() {
    this.router.navigate(['/account']);
  }
}

