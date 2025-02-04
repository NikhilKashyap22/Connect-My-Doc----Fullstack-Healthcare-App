import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor.model';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-doctor-by-id',
  standalone: true,
  imports: [NgIf, FormsModule, NgFor],
  templateUrl: './view-doctor-by-id.component.html',
  styleUrl: './view-doctor-by-id.component.css'
})
export class ViewDoctorByIdComponent {
  doctorId!: string;
  doctor!: Doctor;
  isLoading = false;

  constructor(private doctorService: DoctorService) {}

  fetchDoctor(): void {
    if (!this.doctorId) {
      alert('Please enter a valid Doctor ID.');
      return;
    }

    this.isLoading = true;
    this.doctorService.getDoctorById(this.doctorId).subscribe(
      (data) => {
        this.doctor = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching doctor details:', error);
        this.doctor = undefined!;
        this.isLoading = false;
      }
    );
  }

}
