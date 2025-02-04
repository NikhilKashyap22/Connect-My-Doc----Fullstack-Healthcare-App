import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewAllDoctorsComponent } from "./doctors/components/view-all-doctors/view-all-doctors.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { MainComponent } from "./shared/components/main/main.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { DoctorHomeComponent } from "./doctor-home/doctor-home.component";
import { AddDoctorComponent } from './doctors/components/add-doctor/add-doctor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DoctorHomeComponent, RouterModule, AddDoctorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CMD_UI';
}
