import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { imageModel, imagepathModel, imagepathModel1, landingimghModel } from 'src/app/models/landing-page.models';
import { DownloadURLsService } from 'src/app/services/download-urls.service';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { UtilsService } from 'src/app/services/utils.service'; 
 
 
//import Swal from 'sweetalert2';
declare var window: any;
@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
    standalone: false
})
export class LandingPageComponent implements OnInit {
  MeetingimageList: imageModel[] = [];landingimageList=[];
  MeetingimageList1=[];   imgpath:any;
   
  wonders: imagepathModel1[] = [];
  wondersimgList: imageModel[] = [];
  landingPageCounts = {
    NO_OF_DISTRICTS: '0',
    NO_OF_FARMERS: '0',
    NO_OF_LITERS_MILK_POURED: '0',
    NO_OF_RBKS: '0',
    TOTAL_AMOUNT: '0',
  };
  imagesList1= [];
  
  launcheddistrictname:any;

  imagesList: imageModel[] = [];
  LandingimagesList: imageModel[] = [];
   
  imagesListnew:landingimghModel[]=[];
  
  gallaryAvailable = false;
  formModal: any;
  constructor(
    private spinner: NgxSpinnerService,
    private landingAPI: LandingPageService,
    private sanitizer: DomSanitizer,
    private utils: UtilsService, 
    private downloadURLs: DownloadURLsService, 
  ) {}

  ngOnInit(): void {    this.LandingImagelistitems();

     this.loadLandingPageCounts();
    // this.loadLandinimagesList();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
     //this.formModal.show();
    
  }
 
  openFormModal() {
    this.formModal.hide();
  }
  clsclose() {
    // confirm or save something
    this.formModal.hide();
  }
  async loadLandinimagesList(): Promise<void> {
    try {
      //11072025  srinivas commented present not use

    //   this.spinner.show(); 
    //   this.LandingimagesList = [];
    //   const req={
    //     '':''
    //   }
    // //  const res = await this.landingAPI.landingGalaryImages();
    //   const res = await this.landingAPI.landingGalaryImages_POST(req);
    //   if (res.success) {
    //     for (let i = 0; i < res.LandingimagesList.length; i++) {
    //       this.LandingimagesList.push({
    //         image: this.sanitizer.bypassSecurityTrustResourceUrl(
    //           'data:image/jpeg;base64,' + res.LandingimagesList[i].image
    //         ),
    //         timeStamp: res.LandingimagesList[i].timeStamp,
             
    //       });
    //     }
    //   }
      this.spinner.hide(); 
    } catch (error) {
      this.utils.catchResponse(error);
      this.spinner.hide(); 
    }
  }

  async loadLandingPageCounts(): Promise<void> {
    try {
      this.spinner.show();  
     // const response = await this.landingAPI.landingPageCounts();
const req={'':''}
      const response =  await this.landingAPI.landingPageCounts_POST(req);
      this.spinner.hide();
      if (response.success) {
          debugger;
         this.landingPageCounts = response.result[0];
      this.launcheddistrictname=response.result[0].LAUNCHED_DISTRICT;
      } else { debugger;
      this.utils.catchResponse(alert('info'+ response.message+'warning'));
       // Swal.fire('info', response.message, 'warning');
      }



  debugger;

      this.imagesList = [];
      //11072025  srinivas commented present not use
      
      // const res = await this.landingAPI.landingPageImages(); //landingGalaryImages    //landingPageImages
      // if (res.success) {debugger;
      //   for (let i = 0; i < res.imagesList.length; i++) { debugger;
      //     if(res.imagesList[i].TYPE_ID=="1")
      //     {
      //       this.wondersimgList.push({
      //         image: this.sanitizer.bypassSecurityTrustResourceUrl(
      //           'data:image/jpeg;base64,' + res.imagesList[i].image
      //         ),
      //         timeStamp: res.imagesList[i].timeStamp,
             
      //       }); 
      //     }
      //     else{
      //     this.imagesList.push({
      //       image: this.sanitizer.bypassSecurityTrustResourceUrl(
      //         'data:image/jpeg;base64,' + res.imagesList[i].image
      //       ),
      //       timeStamp: res.imagesList[i].timeStamp,
           
      //     }); 
      //   }debugger;
      //   } 
      //  this.spinner.hide();  
      //    this.gallaryAvailable = true;
      // } 
 









    } catch (error) {
      this.utils.catchResponse(error);
      this.spinner.hide();
    }
  }

  async btnDownloadMentorApp(): Promise<void> {
    try {
      this.spinner.show();
      window.open(this.downloadURLs.mentorApp, '_Self');
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async btnDownloadVolunteerApp(): Promise<void> {
    try {
      this.spinner.show();
      window.open(this.downloadURLs.volunteerApp, '_Self');

      

      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async Meetingimage(): Promise<void> {
    try {debugger;
      this.MeetingimageList = [];  
       this.MeetingimageList1=[];
      this.spinner.show();    
     debugger;
    const res = await this.landingAPI.Meetingimageslist();
    if (res.success) {
      for (let i = 0; i < res.MeetingimageList.length; i++) {
        this.MeetingimageList.push({
          image: this.sanitizer.bypassSecurityTrustResourceUrl(
            'data:image/jpeg;base64,' + res.MeetingimageList[i].image
          ),
          timeStamp: res.MeetingimageList[i].timeStamp,
           
        });
      }
       //this.gallaryAvailable = true;

      }  
      else
      {debugger;
        this.spinner.hide();
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  
  async LandingImagelistitems_old(): Promise<void> {
    try {debugger;
       ;
      this.landingimageList=[];
      const res = await this.landingAPI.LandingImagelist();
    if (res.success) {  
    //   this.wonders=res.result; 
  debugger;
     for (let i = 0; i < res.result.length; i++) {
      if(res.result[i].LANDIMAGES_TYPE=='0')
      {
  this.wonders.push({         
            IMAGE_PATH: res.result[i].IMAGE_PATH,        
            LANDIMAGES_TYPE: res.result[i].LANDIMAGES_TYPE 
          });

        }
              else  if(res.result[i].LANDIMAGES_TYPE=='1')
             {debugger;
      //  const img=await this.meetinglandingimgFileDownload(res.result[i].IMAGE_PATH);

     const res1=await this.utils.meetinglandingimgfileIdToBaseString(res.result[i].IMAGE_PATH );
        this.wonders.push({         
         IMAGE_PATH:  this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' +  res.result[i].IMAGE_PATH),        
          LANDIMAGES_TYPE: res.result[i].LANDIMAGES_TYPE 
        });

     }
     
   }


 
    }
    else{debugger;
      //Swal.fire('info', res.message, 'warning');
      this.utils.catchResponse(alert('info'+ res.message+'warning'));
    }
 debugger;
    } catch (error) {
      //Swal.fire('info', "error catch", 'warning');
       this.utils.catchResponse(alert('info'+ error.message+'warning'));
    }
  }

  async LandingImagelistitems(): Promise<void> {
    try {
      const req = {
        TYPE:"2"
       }; debugger;
      this.landingimageList=[]; 
      const res =   await this.landingAPI.LandingImagelistwithbase64(req);
    if (res.success) {  
       // this.wonders=res.result; 

debugger;
        for (let i = 0; i < res.result.length; i++) {
          if(res.result[i].LANDIMAGES_TYPE=='0')
          {
                  if(res.result[i].MEETING_ID=='0')
                        {
                          // this.wondersimgList.push({         
                          //   IMAGE_PATH: res.result[i].IMAGE_PATH,        
                          //   LANDIMAGES_TYPE: res.result[i].LANDIMAGES_TYPE 
                          // });


                          // const res1=await this.utils.meetinglandingimgfileIdToBaseString(res.result[i].IMAGE_PATH );
                          // this.wonders.push({         
                          //  IMAGE_PATH:  this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' +  res.result[i].IMAGE_PATH),        
                          //   LANDIMAGES_TYPE: res.result[i].LANDIMAGES_TYPE 
                          // }); 
                        }
                      else
                      {
                    this.wonders.push({         
                              IMAGE_PATH: res.result[i].IMAGE_PATH,        
                              LANDIMAGES_TYPE: res.result[i].LANDIMAGES_TYPE 
                            });
                      
                          }
            }
        //      else  if(res.result[i].LANDIMAGES_TYPE=='1')
        //          { 

                 
        //           const res1=await this.utils.meetinglandingimgfileIdToBaseString(res.result[i].IMAGE_PATH );
        //           this.wondersimgList.push({         
        //            IMAGE_PATH:  this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' +  res.result[i].IMAGE_PATH),        
        //             LANDIMAGES_TYPE: res.result[i].LANDIMAGES_TYPE 
        //           });

        //  }
         
       }
 
 debugger;
    }
    else{
      //Swal.fire('info', res.message, 'warning');
      this.utils.catchResponse(alert('info'+ res.message+'warning'));
    }
 debugger;
    } catch (error) {
     //  Swal.fire('info', "error catch", 'warning');
     this.utils.catchResponse(alert('info'+ error.message+'warning'));
    }
  }

  
   
  async btnDownloadmanualapidownloadApp(): Promise<void> {
    try {
      this.spinner.show();
      window.open(this.downloadURLs.manualapidownload, '_Self');

      

      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  // btnDocumentDownload(): void {
  //   // if (this.utils.isEmpty(url)) {
  //   //   this.toast.warning('User Manual Not Found !!!');
  //   // } else {
  //       window.open("https://apddcf.ap.gov.in/downloads/docs/Privacypolicy.html", '_blank');
  //   // }
  // }
}
