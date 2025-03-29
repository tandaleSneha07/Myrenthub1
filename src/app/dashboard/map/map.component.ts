import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  // Default coordinates and zoom
  lat: number = 51.678418; // Replace with your desired latitude
  lng: number = 7.809007;  // Replace with your desired longitude
  zoom: number = 8;        // Default zoom level
}
