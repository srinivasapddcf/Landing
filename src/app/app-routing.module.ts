import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { JobNotificationComponent } from './components/Notifications/job-notification/job-notification.component';
import { JobDetailsComponent } from './components/Notifications/job-details/job-details.component';
import { LogRegComponent } from './components/Notifications/log-reg/log-reg.component';
import { CareersComponent } from './components/careers/careers.component';
 

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch:'full',
  //   redirectTo:'LandingPage'
   
  // },
  {
    path: '',
    component: LandingPageComponent,
  
  },
  {
    path: 'LandingPage',
    pathMatch:'full',
    redirectTo:'',
   // component: LandingPageComponent,
  
  },

  // {
  //   path: 'LandingPage',  
  //    component: LandingPageComponent,
  
  // },
  // {
  //   path: 'Notifications',
  //   component: JobNotificationComponent,
  
  // },

     
  // {
  //   path: 'Careers',
  //   component: CareersComponent,
  
  // },
    
  // {
  //   path: 'JobDetails',
  //   component: JobDetailsComponent,
  
  // },

  { 
    path: 'LoginDetails',
    component: LogRegComponent,
  
  },

];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
 //  imports: [RouterModule.forRoot(routes, { useHash: true })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
