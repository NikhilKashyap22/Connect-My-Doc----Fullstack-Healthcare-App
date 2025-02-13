import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface NavigationItem {
  name: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports:[RouterModule, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navigation: NavigationItem[] = [
    { name: 'Dashboard', route: '/dashboard', icon: '/assets/images/dashboard-solid-24.png'},
    { name: 'Appointments', route: '/appointments', icon: '/assets/images/calendar-check-solid-24.png'},
    { name: 'Doctors', route: '/doctors', icon: '/assets/images/injection-solid-24.png'},
    { name: 'Doctor Schedules', route: '/doctor-schedules', icon: '/assets/images/stopwatch-solid-24.png'},
    { name: 'Clinics', route: '/view-all-clinics', icon: '/assets/images/plus-medical-regular-24.png'},
    { name: 'Patients', route: '/patients', icon: '/assets/images/body-regular-24.png'},
    { name: 'Departments', route: '/departments', icon: '/assets/images/id-card-solid-24.png'},
    { name: 'Services', route: '/services', icon: '/assets/images/handicap-regular-24.png'},
    { name: 'Assets', route: '/assets', icon: '/assets/images/brightness-solid-24.png'}
  ];

  constructor(private router: Router) {}

  isActive(route: string): boolean {

    return this.router.url === route;
  }
}
