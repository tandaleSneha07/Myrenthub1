//import { Component,OnInit } from '@angular/core';
//import { Loader} from '@googlemaps/js-api-loader';

//@Component({
  //selector: 'app-map',
  //imports:[],
  //templateUrl: './map.component.html',
  //styleUrls: ['./map.component.scss']
//})
//export class MapComponent implements OnInit {
  //title = 'map';

  //ngOnInit(): void {
    //let loader = new Loader({
      //apiKey: 'AIzaSyBS5WJdKBvfS-5tI7VCo7Y2MO-cm0pU6zo'
      //apiKey: 'AIzaSyDp7Xinw9uQwjysHJu_cvojxUd3MWmo5a4'
    //});
  
    //loader.load().then(() => {
     // const mapElement = document.getElementById("map") as HTMLElement | null;
  
      //if (mapElement) {
        //new google.maps.Map(mapElement, {
          //center: { lat: 20.593683, lng: 78.962883 },
          //zoom: 6
       // });
     // } else {
       // console.error("Map element not found");
      //}
   // });
  //}
//}
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

          new google.maps.Marker({
            position: userLocation,
            map: this.map,
            title: 'Your Location',
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



