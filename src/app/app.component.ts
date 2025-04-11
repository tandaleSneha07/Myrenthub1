// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// @Component({
//   selector: 'app-root',
//   imports:[RouterOutlet,HeaderComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'try5';
// }

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'try5';
  message: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getTest().subscribe(res => {
      this.message = res.message;
    });
  }
}
