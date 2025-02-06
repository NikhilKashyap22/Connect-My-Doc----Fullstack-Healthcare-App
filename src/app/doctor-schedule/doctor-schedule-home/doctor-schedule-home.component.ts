import { Component } from '@angular/core';
import { GetAllSchedulesComponent } from "../components/get-all-schedules/get-all-schedules.component";
import { GetScheduleByIdComponent } from "../components/get-schedule-by-id/get-schedule-by-id.component";
import { CreateScheduleComponent } from "../components/create-schedule/create-schedule.component";
import { UpdateDoctorScheduleComponent } from "../components/update-doctor-schedule/update-doctor-schedule.component";

@Component({
  selector: 'app-doctor-schedule-home',
  standalone: true,
  imports: [GetAllSchedulesComponent, GetScheduleByIdComponent, CreateScheduleComponent, UpdateDoctorScheduleComponent],
  templateUrl: './doctor-schedule-home.component.html',
  styleUrl: './doctor-schedule-home.component.css'
})
export class DoctorScheduleHomeComponent {

}
