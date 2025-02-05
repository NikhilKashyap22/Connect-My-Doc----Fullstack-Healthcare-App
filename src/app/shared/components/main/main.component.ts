import { Component, Input } from '@angular/core';
import { DoctorHomeComponent } from "../../../doctor-home/doctor-home.component";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CreateScheduleComponent } from "../../../doctor-schedule/components/create-schedule/create-schedule.component";
import { GetAllSchedulesComponent } from "../../../doctor-schedule/components/get-all-schedules/get-all-schedules.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DoctorHomeComponent, HeaderComponent, SidebarComponent, CreateScheduleComponent, GetAllSchedulesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
