 // 1. Imports
import { DoctorService } from './../../services/doctor.service';
import { Component, OnInit } from '@angular/core';
import { Address, Doctor, Experience } from '../../models/doctor.model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

 // 2. Component and Templates
@Component({
  selector: 'app-edit-doctor',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './edit-doctor.component.html',
  styleUrl: './edit-doctor.component.css'
})

 // 3. Class
export class EditDoctorComponent implements OnInit {

  // 4. Properties
  doctorId:string = '';

  doctor: Doctor | null = null;

  newExperience: Experience = {clinicName:'',experienceInYears:0,role:'',experienceType:'PRESENTLY_WORKING'};

  updatedExperience: Experience[] = [this.newExperience]

  newAddress: Address = {houseName:'',city:'',state:'',country:'',zipCode:''}

  // 5. Constructor
  constructor(
    private doctorService:DoctorService, // Injecting instance DoctorService
    private route:ActivatedRoute, // Injecting instance of ActivatedRoute
    private router:Router // Injecting instance of Router
  ){}

  // 6. On-Init Method
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.doctorId = params['id'];
        this.fetchDoctor();
      }
    });
  }

  // 7. Functional Methods to get data.
  public fetchDoctor(){
    this.doctorService.getDoctorById(this.doctorId).subscribe(
      (data) => {
        this.doctor = data;
      },
      (error) => {
        alert('Doctor not found');
      }
    );
  }

  // 8. Functional Methods to submit and process data.
  public updateExperience(){
    // const updatedExperience: Experience[] = [this.newExperience];
    this.doctorService.updateDoctorExperience(this.doctorId, this.updatedExperience).subscribe({
      next: (data)=>(
        this.doctor = data,
        console.log("Data: " + data)
      ),
      error: (err) => console.error('Error message: '+err)
    });
    this.router.navigate(['']);
  }

  public updateAddress(){
    this.doctorService.updateDoctorAddress(this.doctorId,this.newAddress).subscribe(
      (updatedDoctor) => {
        this.doctor = updatedDoctor;

      },
      (error) => {
        alert('error updating status');
      }
    )
      this.router.navigate(['']);
  }


}
