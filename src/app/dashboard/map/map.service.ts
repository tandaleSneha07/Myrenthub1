// import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { Loader } from '@googlemaps/js-api-loader';

// @Injectable({
//   providedIn: 'root'
// })
// export class MapService {
//   private loader: Loader | null = null;

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {
//     if (isPlatformBrowser(this.platformId)) {
//       this.loader = new Loader({
//         apiKey: 'AIzaSyBA2o7CPHAr1B9T0EAIthT9NZEVvsKkGsk',
//         version: 'weekly',
//       });
//     }
//   }

//   loadGoogleMaps() {
//     return this.loader ? this.loader.load() : Promise.resolve();
//   }
// }
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private loader: Loader | null = null;
  private map!: google.maps.Map;
  private marker!: google.maps.Marker;
  private geocoder!: google.maps.Geocoder;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loader = new Loader({
        apiKey: 'AIzaSyBA2o7CPHAr1B9T0EAIthT9NZEVvsKkGsk',
        version: 'weekly',
        libraries: ['places']
      });
    }
  }

  loadGoogleMaps(): Promise<void> {
    return this.loader
      ? this.loader.load().then(() => {
          this.geocoder = new google.maps.Geocoder();
        })
      : Promise.resolve();
  }

  setMap(map: google.maps.Map) {
    this.map = map;
  }

  searchLocation(address: string) {
    if (!this.geocoder || !this.map) return;
  
    this.geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        const location = results[0].geometry.location;
  
        this.map.setCenter(location);
        this.map.setZoom(15);
  
        if (this.marker) {
          this.marker.setPosition(location);
        } else {
          this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: address
          });
        }
      } else {
        alert('Location not found: ' + status);
      }
    });
  }
}  