  // 1. Imports.
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { NgFor, NgIf } from '@angular/common';
import { Doctor } from '../../models/doctor.model';
import { Router, RouterModule } from '@angular/router';
import { ColDef } from './../../../../../node_modules/ag-grid-community/dist/types/src/entities/colDef.d';
import {AgGridModule} from 'ag-grid-angular'
import { AddDoctorComponent } from "../add-doctor/add-doctor.component";
import { DoctorNameFormatterPipe } from '../../../pipes/doctor-name-formatter.pipe';
import { LoggerService } from '../../../loggers/logger.service';

  // 2. Component and Templates.
@Component({
  selector: 'app-view-all-doctors',
  standalone: true,
  imports: [ NgFor, AgGridModule, RouterModule,DoctorNameFormatterPipe ],
  templateUrl: './view-all-doctors.component.html',
  styleUrl: './view-all-doctors.component.css'
})

  // 3. Class.
export class ViewAllDoctorsComponent implements OnInit {

  // 4. Properties.
  doctors: Doctor[] = [];
  showDoctors = false;
  isVisible = false;

  // 5. Constructor.
  constructor(
    private doctorService: DoctorService, // DoctorService injection
    private router:Router, // Router injection
    private loggerService:LoggerService
  ) {}


  // 6. On-Init Method.
  public ngOnInit(): void {
    this.loadDoctors();
  }

  // 7. Functional Methods to get Doctor data.
  public loadDoctors() : void {
    this.doctorService.getAllDoctors().subscribe({
      next: (data)=>(this.doctors = data),
      error: (err) => {
        console.error('Error message: '+err),
      this.loggerService.logError("Error detected: " + err)
      }
    })
  }

  // 8. Functional Methods to route to respective components.
  public editDoctor(doctorId: string): void {
    console.log("edit button clicked")
    this.router.navigate(['/edit-doctor', doctorId]);
  }

  public updateAddress(doctorId: string) {
    this.router.navigate(['home/edit-doctor'], { queryParams: { id: doctorId, section: 'address' } });
  }

  public viewDoctor(doctorId:string){
    this.router.navigate(['home/view-doctor-by-id'], { queryParams: {id: doctorId, section:'view-doctor-by-id'}});
  }

  // 9. Functional Methods to submit and process data.
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

  // 10. Events
  public toggleForm():void{
    this.isVisible = !this.isVisible;
  }


}
