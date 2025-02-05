import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { NgFor, NgIf } from '@angular/common';
import { Doctor } from '../../models/doctor.model';
import { Router, RouterModule } from '@angular/router';
import { ColDef } from './../../../../../node_modules/ag-grid-community/dist/types/src/entities/colDef.d';
import {AgGridModule} from 'ag-grid-angular'
import { AddDoctorComponent } from "../add-doctor/add-doctor.component";
import { DoctorNameFormatterPipe } from '../../../pipes/doctor-name-formatter.pipe';

@Component({
  selector: 'app-view-all-doctors',
  standalone: true,
  imports: [ NgFor, AgGridModule, RouterModule,DoctorNameFormatterPipe ],
  templateUrl: './view-all-doctors.component.html',
  styleUrl: './view-all-doctors.component.css'
})

export class ViewAllDoctorsComponent implements OnInit {
  doctors: Doctor[] = [];
  showDoctors = false;
  isVisible = false;

  constructor(private doctorService: DoctorService, private router:Router) {}

  public ngOnInit(): void {
    this.loadDoctors();
  }

  public loadDoctors() : void {
    this.doctorService.getAllDoctors().subscribe({
      next: (data)=>(this.doctors = data),
      error: (err) => console.error('Error message: '+err)
    })
  }

  public editDoctor(doctorId: string): void {
    console.log("edit button clicked")
    this.router.navigate(['/edit-doctor', doctorId]);
  }

  public toggleForm():void{
    this.isVisible = !this.isVisible;
  }

  public updateAddress(doctorId: string) {
    this.router.navigate(['/edit-doctor'], { queryParams: { id: doctorId, section: 'address' } });
  }

  public updateExperience(doctorId: string) {
    this.router.navigate(['/edit-doctor'], { queryParams: { id: doctorId, section: 'experience' } });
  }

  public deleteDoctor(doctorId:string) {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.doctorService.deleteDoctor(doctorId).subscribe(
        () => {
          alert('Doctor deleted successfully!');
          this.router.navigate(['/']);
        },
        (error) => {
          alert('Error deleting doctor');
        }
      );
    }
  }

}
