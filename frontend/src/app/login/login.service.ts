import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get('./assets/users/users.json').pipe(
      catchError(this.handleError)
    )
  }

   // Invoked if an error is thrown in the get request
   private handleError(err: HttpErrorResponse) {
    console.error(err);
    return Observable.throw(err.error() || 'Server error');
}
}
