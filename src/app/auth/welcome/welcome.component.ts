
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

  // ngOnInit(): void {
  //   this.apiService.getTest().subscribe((res) => {
  //     console.log(res.message); // 🎯 Should print: You hit the /api/test route!
  //   });
  // }
  ngOnInit(): void {
    this.apiService.getTest().subscribe({
      next: (res) => {
        console.log('✅ Test API says:', res.message);
      },
      error: (err) => {
        console.error('❌ Test API error:', err);
      }
    });
  }
  
  goToAbout() {
    this.router.navigate(['/login']);
  }
}

