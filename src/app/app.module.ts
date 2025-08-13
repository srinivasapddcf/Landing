import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingPageService } from './services/landing-page.service';
import { UtilsService } from './services/utils.service';
import { IndianNumberPipe } from './pipes/indian-number.pipe';
import { JobNotificationComponent } from './components/Notifications/job-notification/job-notification.component';
import { JobDetailsComponent } from './components/Notifications/job-details/job-details.component';
import { LogRegComponent } from './components/Notifications/log-reg/log-reg.component';
import { CareersComponent } from './components/careers/careers.component';
 
 

@NgModule({ declarations: [
        AppComponent,
        LandingPageComponent,
        IndianNumberPipe,
        JobNotificationComponent,
        JobDetailsComponent,
        LogRegComponent,
        CareersComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule], providers: [LandingPageService, UtilsService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
