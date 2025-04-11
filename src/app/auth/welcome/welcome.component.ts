
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-welcome',
//   templateUrl: './welcome.component.html',
//   styleUrls: ['./welcome.component.css']
// })

// export class WelcomeComponent {
//   constructor(private router: Router) {}

//   goToAbout() {
//     this.router.navigate(['/login']); // Navigates to AboutComponent
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTest().subscribe((res) => {
      console.log(res.message); // 🎯 Should print: You hit the /api/test route!
    });
  }

  goToAbout() {
    this.router.navigate(['/login']);
  }
}

