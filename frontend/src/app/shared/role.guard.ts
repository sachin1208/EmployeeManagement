import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      const username = sessionStorage.getItem('username');
      if (username === 'admin') {
        return true;
      }
      alert('You do not have admin rights');
      this.router.navigate(['/employees']);
    }
    return false;
  }
}
