import { Component } from '@angular/core';
import { ViewAllAppointmentsComponent } from "../appointments/components/view-all-appointments/view-all-appointments.component";
import { ViewAllDoctorsComponent } from "../doctors/components/view-all-doctors/view-all-doctors.component";
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AddDoctorComponent } from "../doctors/components/add-doctor/add-doctor.component";
import { ViewDoctorByIdComponent } from "../doctors/components/view-doctor-by-id/view-doctor-by-id.component";
import { EditAppointmentComponent } from "../appointments/components/edit-appointment/edit-appointment.component";
import { EditDoctorComponent } from "../doctors/components/edit-doctor/edit-doctor.component";

@Component({
  selector: 'app-doctor-home',
  standalone: true,
  imports: [ViewAllDoctorsComponent, RouterModule, AddDoctorComponent, ViewDoctorByIdComponent, EditDoctorComponent],
  templateUrl: './doctor-home.component.html',
  styleUrl: './doctor-home.component.css'
})
export class DoctorHomeComponent {

}
