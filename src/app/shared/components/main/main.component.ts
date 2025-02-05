import { Component, Input } from '@angular/core';
import { DoctorHomeComponent } from "../../../doctor-home/doctor-home.component";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DoctorHomeComponent, HeaderComponent, SidebarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
