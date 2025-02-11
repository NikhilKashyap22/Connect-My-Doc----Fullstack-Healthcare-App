import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { User } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://cmd-auth-service.azurewebsites.net/api/auth';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // private handleError(error: HttpErrorResponse) {
  //   let errorMsg = 'Something went wrong. Please try again later.';
  //   console.log("strnigggggg");
  //   if (error.status === 0) {
  //     errorMsg = 'Login failed. Please come back later and try.';
  //   } else if (error.status === 401) {
  //     errorMsg = 'Invalid credentials!';
  //   } else if (error.status === 500) {
  //     errorMsg = 'Server error. Please try again later.';
  //   }

  //   return throwError(() => new Error(errorMsg));
  // }

    public getAuthHeaders(): HttpHeaders{
      const token = localStorage.getItem('jwtToken');
      console.log(token)
      return new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      })
    }

  // User Login
  login(username: string, password: string) {
    console.log(`${this.apiUrl}/login`);
    return this.http.post<string>(`${this.apiUrl}/login`, { username, password }, { responseType: 'text' as 'json' }).pipe(catchError(this.handleError<any>('Login service', "Error")));
  }

  // User Registration
  register(user: User): Observable<User> {
    console.log("Registration URL: " + `${this.apiUrl}/register`);
    console.log(user)
    return this.http.post<User>(`${this.apiUrl}/register`, user, {headers:this.getAuthHeaders()}).pipe(catchError(this.handleError<any>('register failed')));
  }

  // Save JWT Token
  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  // Get JWT Token
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  // Remove Token (Logout)
  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  // Check if User is Logged In
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
