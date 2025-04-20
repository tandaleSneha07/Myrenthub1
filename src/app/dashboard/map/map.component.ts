
import { Component, AfterViewInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  map!: google.maps.Map;

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
            center: userLocation,
            zoom: 15, // Adjust zoom level
            mapTypeId: 'roadmap',
          });

          new google.maps.marker.AdvancedMarkerElement({
            map: this.map,
            position: { lat: 19.0760, lng: 72.8777 },
            title: 'Mumbai'
          });
        },
        () => {
          alert('Geolocation failed, showing default location.');
          this.loadDefaultMap();
        }
      );
    } else {
      alert('Geolocation not supported.');
      this.loadDefaultMap();
    }
  }

  loadDefaultMap() {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 20.5937, lng: 78.9629 }, // Default India location
      zoom: 5,
    });
  }
}



