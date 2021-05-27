import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    if (sessionStorage.getItem('username')) {
      console.log(sessionStorage.getItem('username'));
      return true;
    } else { return false; }
  }
}
