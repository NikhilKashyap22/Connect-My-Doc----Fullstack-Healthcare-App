import { Address, Doctor, Experience } from './../models/doctor.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EnvironmentService } from '../../environments/environment.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient, private envService: EnvironmentService) {}

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }

  public getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    console.log("Token: "+token)
    if (!token) {
      alert('JWT Token is missing');
      return new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  public getAllDoctors(): Observable<any> {
    try {
      const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['getAllDoctors']}`;
      console.log("get all doctors url: " + url);
      return this.http.get<Doctor>(url, {headers:this.getAuthHeaders()}).pipe(catchError(this.handleError));
    } catch (error) {
      return throwError(() => new Error('Error fetching doctors'));
    }
  }

  public addDoctor(doctor: Doctor): Observable<Object> {
    try {
      const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['createDoctor']}`;
      console.log("add doctor URL: " + url);
      return this.http.post(url, doctor, {headers:this.getAuthHeaders()}).pipe(catchError(this.handleError));
    } catch (error) {
      return throwError(() => new Error('Error adding doctor'));
    }
  }

  public getDoctorById(id: string): Observable<Doctor> {
    try {
      const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['getDoctorById']}${id}`;
      console.log("get doctor by id: " + url);
      return this.http.get<Doctor>(url, {headers:this.getAuthHeaders()}).pipe(catchError(this.handleError));
    } catch (error) {
      return throwError(() => new Error('Error fetching doctor by ID'));
    }
  }

  public updateDoctorExperience(id: string, experience: Experience[]): Observable<Doctor> {
    try {
      const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['updateDoctorExperience']}${id}`;
      console.log("update doctor experience Url: " + url);
      return this.http.put<Doctor>(url, experience, {headers:this.getAuthHeaders()}).pipe(catchError(this.handleError));
    } catch (error) {
      return throwError(() => new Error('Error updating doctor experience'));
    }
  }

  public updateDoctorAddress(id: string, address: Address): Observable<Doctor> {
    try {
      const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['updateDoctorAddress']}${id}`;
      console.log("update doctor address Url: " + url);
      return this.http.put<Doctor>(url, address, {headers:this.getAuthHeaders()} ).pipe(catchError(this.handleError));
    } catch (error) {
      return throwError(() => new Error('Error updating doctor address'));
    }
  }

  public deleteDoctor(id: string): Observable<void> {
    try {
      const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['deleteDoctor']}${id}`;
      console.log("Deleting doctor: " + url);
      return this.http.delete<void>(url, {headers:this.getAuthHeaders()}).pipe(catchError(this.handleError));
    } catch (error) {
      return throwError(() => new Error('Error deleting doctor'));
    }
  }
}
