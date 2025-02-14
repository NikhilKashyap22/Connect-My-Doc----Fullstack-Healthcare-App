import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { IAppointment } from '../../models/appointment.model';
import { DatePipe } from '@angular/common';
import { LoggerService } from '../../../loggers/logger.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-view-appointment-by-id',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterModule],
  templateUrl: './view-appointment-by-id.component.html',
  styleUrls: ['./view-appointment-by-id.component.css'],
})
export class ViewAppointmentByIdComponent implements OnInit {
  appointment: IAppointment | null = null;
  errorMessage: string = '';

  //5. Constructor
  constructor(
    //Injections of Services
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private router: Router,
    private loggerService: LoggerService,
    private dialog: MatDialog,
) {}

  ngOnInit(): void {
    const appointmentId = this.route.snapshot.paramMap.get('appointmentId');
    if (appointmentId) {
      this.getAppointmentById(appointmentId);
    } else {
      this.errorMessage = 'Invalid appointment ID';
    }
  }

  public goToHome(): void{
    //route to view all appointments
  }

    public cancelAppointment(appointmentId: string): void {
      // Open the confirmation dialog
      //check for already cancelled appointment status---pending
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '400px',
        data: { appointmentId: appointmentId } // Pass appointment ID
      });

      // Handle the result when the dialog is closed
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('User confirmed cancellation');
          this.callCancelApi(appointmentId); // Call the API to cancel
        } else {
          console.log('User canceled the action');
        }
      });
    }

    callCancelApi(appointmentId: string): void {
      this.appointmentService.cancelAppointmentById(appointmentId).subscribe({
        next: (response) => {
          console.log('Appointment canceled successfully', response);
          // this.updateAppointmentList(appointmentId); // Remove from UI
        },
        error: (error) => {
          console.error('Error canceling appointment:', error);
        }
      });
    }



  private getAppointmentById(appointmentId: string): void {
    this.appointmentService.getAppointmentById(appointmentId).subscribe({
      next: (data) => {
        this.appointment = data;
      },
      error: (err) => {
        this.errorMessage = 'Error fetching appointment details';
      },
    });
  }
}
