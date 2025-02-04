import { ErrorInterceptor } from './app/loggers/error.interceptor';
import { ErrorHandlerService } from './app/loggers/error-handler.service';
import { LoggerService } from './app/loggers/logger.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routerConfig   from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    LoggerService,
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    provideHttpClient(withInterceptors([ErrorInterceptor])),
    provideRouter(routerConfig),
  ]
}).catch(err => console.error(err));
