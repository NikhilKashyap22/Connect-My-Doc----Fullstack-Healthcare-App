import { Address, Doctor, Experience } from './../models/doctor.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from '../../environments/environment.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient, private envService:EnvironmentService) {}

  getAllDoctors():Observable<any>{
    const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['getAllDoctors']}`;
    console.log("get all doctors url: "+ url);
    return this.http.get<Doctor>(url);
  }

  addDoctor(doctor:Doctor):Observable<Object>{
    const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['createDoctor']}`;
    console.log("add doctor URL: " + url);
    return this.http.post(url, doctor);
  }

  getDoctorById(id:string): Observable<Doctor>{
    const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['getDoctorById']}${id}`;
    console.log("get doctor by id: " + url);
    return this.http.get<Doctor>(url);
  }

  updateDoctorExperience(id:string, experience:Experience[]): Observable<Doctor>{
    const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['updateDoctorExperience']}${id}`
    console.log("update doctor experience Url: " + url);
    return this.http.put<Doctor>(url, experience);
  }

  updateDoctorAddress(id:string, address:Address): Observable<Doctor>{
    const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['updateDoctorAddress']}${id}`
    console.log("update doctor experience Url: " + url);
    return this.http.put<Doctor>(url,{address});
  }

  deleteDoctor(id:string):Observable<void>{
    const url = `${environment.baseApiUrl}${environment.services['doctors']}${environment.apiPaths['doctors']['deleteDoctor']}${id}`;
    console.log("Deleting doctor: " + url);
    return this.http.delete<void>(url);
  }

}
