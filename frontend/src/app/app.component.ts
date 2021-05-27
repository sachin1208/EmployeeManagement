import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'Employee Management System';
  username: any;
  constructor(private router: Router){}
  ngDoCheck(): void {
    this.username = sessionStorage.getItem('username');
  }

  logoutMethod(): void {
    if (confirm('Are you sure you want to logout ?')) {
      console.log('Successfully logged out');
      this.router.navigate(['/login']);
    }
  }
}
