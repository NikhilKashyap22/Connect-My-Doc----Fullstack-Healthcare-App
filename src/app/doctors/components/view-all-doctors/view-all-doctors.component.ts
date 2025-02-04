//1 - Imports
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { NgFor, NgIf } from '@angular/common';
import { Doctor } from '../../models/doctor.model';
import { Router } from '@angular/router';
import { ColDef } from './../../../../../node_modules/ag-grid-community/dist/types/src/entities/colDef.d';
import {AgGridModule} from 'ag-grid-angular'
import { AddDoctorComponent } from "../add-doctor/add-doctor.component";

//2 component
@Component({
  selector: 'app-view-all-doctors',
  standalone: true,
  imports: [NgIf, NgFor, AgGridModule],
  templateUrl: './view-all-doctors.component.html',
  styleUrl: './view-all-doctors.component.css'
})

//3 class
export class ViewAllDoctorsComponent implements OnInit {
  doctors: Doctor[] = [];
  showDoctors = false;
  //4 constructor
  constructor(private doctorService: DoctorService, private router:Router) {}

  //5 init
  ngOnInit(): void {
    this.loadDoctors();
  }

  //6 functional methods (domain related methods)

  //7 action methods(submit, add events from the UI which is for interacting with backend)

  //8 validations

  //9 ui methods (only behavioural changes)

  //10 test cases - unit tests written in unit test file

  //11 comments

  //12 implement using FSD
  loadDoctors() : void {
    this.doctorService.getAllDoctors().subscribe({
      next: (data)=>(this.doctors = data),
      error: (err) => console.error('Error message: '+err)
    })
  }

  editDoctor(doctorId: string): void {
    console.log("edit button clicked")
    this.router.navigate(['/edit-doctor', doctorId]);
  }

  columnDefs: ColDef[] = [
    { headerName: 'Doctor ID', field: 'doctorId', sortable: true, filter: true },
    { headerName: 'Name', valueGetter: params => `${params.data.firstName} ${params.data.lastName}`, sortable: true, filter: true },
    { headerName: 'Phone Number', field: 'phoneNum', sortable: true, filter: true },
    { headerName: 'Date of Birth', field: 'dateOfBirth', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'Experience (Years)', field: 'experienceInYears', sortable: true, filter: true },
    { headerName: 'Gender', field: 'gender', sortable: true, filter: true },
    { headerName: 'Status', field: 'status', sortable: true, filter: true },
    { headerName: 'Clinic ID', field: 'clinicId', sortable: true, filter: true },

    // Address (Nested Object)
    { headerName: 'Address', valueGetter: params => `${params.data.address?.houseName}, ${params.data.address?.city}, ${params.data.address?.state}, ${params.data.address?.country}, ${params.data.address?.zipCode}`, sortable: true, filter: true },

    // Specialization (Nested Object)
    { headerName: 'Specialization', valueGetter: params => `${params.data.specialization?.specializationType} - ${params.data.specialization?.specializationDescription}`, sortable: true, filter: true },

    // Fix: Explicitly define the type for experiences
    {
      headerName: 'Experiences',
      valueGetter: (params) => {
        return (params.data.experiences as { clinicName: string, role: string, experienceInYears: number }[])
          ?.map((exp) => `${exp.clinicName} - ${exp.role} (${exp.experienceInYears} years)`)
          .join(', ');
      },
      sortable: true,
      filter: true
    },

    // Fix: Explicitly define the type for qualifications
    {
      headerName: 'Qualifications',
      valueGetter: (params) => {
        return (params.data.qualifications as { degree: string, university: string, startYear: number, endYear: number }[])
          ?.map((qual) => `${qual.degree} from ${qual.university} (${qual.startYear} - ${qual.endYear})`)
          .join(', ');
      },
      sortable: true,
      filter: true
    }
  ];

  isVisible = false;

  toggleForm():void{
    this.isVisible = !this.isVisible;
  }

}
