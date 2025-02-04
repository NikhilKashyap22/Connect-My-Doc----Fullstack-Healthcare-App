import { ErrorInterceptor } from './app/loggers/error.interceptor';
import { ErrorHandlerService } from './app/loggers/error-handler.service';
import { LoggerService } from './app/loggers/logger.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom, ErrorHandler } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ClientSideRowModelModule } from 'ag-grid-community';

bootstrapApplication(AppComponent, {
  providers: [
    LoggerService,
    { provide: ErrorHandler, useClass: ErrorHandlerService }, // ✅ Global Error Handler
    provideHttpClient(withInterceptors([ErrorInterceptor])),   // ✅ HTTP Interceptor
  ]
}).catch(err => console.error(err));
