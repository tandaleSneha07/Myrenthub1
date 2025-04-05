import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Loader } from '@googlemaps/js-api-loader';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private loader: Loader | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loader = new Loader({
        apiKey: 'AIzaSyBA2o7CPHAr1B9T0EAIthT9NZEVvsKkGsk',
        version: 'weekly',
      });
    }
  }

  loadGoogleMaps() {
    return this.loader ? this.loader.load() : Promise.resolve();
  }
}
