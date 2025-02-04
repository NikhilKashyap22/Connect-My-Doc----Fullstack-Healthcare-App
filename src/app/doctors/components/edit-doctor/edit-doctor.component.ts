import { DoctorService } from './../../services/doctor.service';
import { Component, OnInit } from '@angular/core';
import { Address, Doctor, Experience } from '../../models/doctor.model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-doctor',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './edit-doctor.component.html',
  styleUrl: './edit-doctor.component.css'
})
export class EditDoctorComponent  {
  doctorId:string = '';
  doctor: Doctor | null = null;
  newExperience: Experience = {clinicName:'',experienceInYears:0,role:'',experienceType:'PRESENTLY_WORKING'};
  updatedExperience: Experience[] = [this.newExperience]

  newAddress: Address = {houseName:'',city:'',state:'',country:'',zipCode:''}

  constructor(private doctorService:DoctorService){}


  fetchDoctor(){
    this.doctorService.getDoctorById(this.doctorId).subscribe(
      (data) => {
        this.doctor = data;
      },
      (error) => {
        alert('Doctor not found');
      }
    );
  }

  updateExperience(){
    // const updatedExperience: Experience[] = [this.newExperience];
    this.doctorService.updateDoctorExperience(this.doctorId, this.updatedExperience).subscribe({
      next: (data)=>(
        this.doctor = data,
        console.log("Data: " + data)
      ),
      error: (err) => console.error('Error message: '+err)
    });
    console.log(this.updatedExperience);
  }

  updateAddress(){
    this.doctorService.updateDoctorAddress(this.doctorId,this.newAddress).subscribe(
      (updatedDoctor) => {
        this.doctor = updatedDoctor;

      },
      (error) => {
        alert('error updating status');
      }
    )
  }

  deleteDoctor(){
    this.doctorService.deleteDoctor(this.doctorId).subscribe(
      () => {this.doctor = null;},
      (error) => {
        alert('Error deleting doctor')
      }
    );
  }

}
