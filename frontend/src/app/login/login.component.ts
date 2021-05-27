import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  usersList: any;
  valid = true;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    sessionStorage.setItem('username', '');
    this.loginService.getUsers().subscribe(res => {
      this.usersList = res;
    });
  }

  verify(): void {
    console.log(this.username);
    console.log(this.password);
    // tslint:disable-next-line: no-unused-expression
    const userObject = this.usersList.filter((user: any) =>
      user.userName === this.username && user.password === this.password
    )[0];
    if (userObject) {
      this.valid = true;
      sessionStorage.setItem('username', userObject.userName)
      this.router.navigate(['/employees']);
    } else {
      this.valid = false;
    }
  }
}
