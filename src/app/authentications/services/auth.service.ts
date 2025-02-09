import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api/auth';

  constructor(private http: HttpClient) {}

    public getAuthHeaders(): HttpHeaders{
      const token = localStorage.getItem('jwtToken');
      console.log(token)
      return new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      })
    }

  // User Login
  login(username: string, password: string): Observable<string> {
    console.log(`${this.apiUrl}/login`);
    // Set responseType to 'text' to handle plain JWT token response
    return this.http.post<string>(`${this.apiUrl}/login`, { username, password }, { responseType: 'text' as 'json' });
  }

  // User Registration
  register(user: User): Observable<User> {
    console.log("Registration URL: " + `${this.apiUrl}/register`);
    console.log(user)
    return this.http.post<User>(`${this.apiUrl}/register`, user, {headers:this.getAuthHeaders()});
  }

  // Save JWT Token
  saveToken(token: string): void {
    console.log("Save token: ", token);
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
