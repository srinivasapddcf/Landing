import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  baseURL = '';
  reportsBaseURL = '';
  jpvrptURL='';
  amulurl='';
  private corsHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient, private utils: UtilsService) {
    this.baseURL += this.utils.baseUrl() + 'api/login/';
    this.reportsBaseURL += this.utils.reportsBaseUrl() + 'api/dashboard/';

    this.jpvrptURL += this.utils.baseUrl() + 'api/DashboardRpt/';

    this.amulurl = utils.baseUrl() + 'api/amulReports/';


    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'https://localhost:4200'
    });

  }

  public downloadMentorApp() {
    const result: any = this.httpClient
      .get(`${this.baseURL}downloadMentorApp`)
      .pipe(retry(1))
      .toPromise();
    return result;
  }

  
  // public landingPageCounts() {
  //   const result: any = this.httpClient
  //     .get(`${this.reportsBaseURL}landingPageCounts`)
  //     .pipe(retry(1))
  //     .toPromise();
  //   return result;
  // }

  public landingPageCounts() {
    const result: any = this.httpClient
      .get(`${this.jpvrptURL}landingPageCounts`)
      .pipe(retry(1))
      .toPromise();
    return result;
  }
  
  public landingPageCounts_POST(req:any): Promise<any> { 

    const result: any = this.httpClient
      .post(
        `${this.jpvrptURL}landingPageCounts_POST`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }

  
  public Meetingimageslist() {
    const result: any = this.httpClient
      .get(`${this.baseURL}Meetingimageslist`)
      .pipe(retry(1))
      .toPromise();
    return result;
  }
  public GetJobDetails(req:any) {
    const result: any = this.httpClient
        .post(
            `${this.amulurl}GetJobDetails`,   //amulurl  baseURL
            req,
            this.utils.getPostHttpOptions()
        )
        .pipe(retry(this.utils.env.API_RETRY_COUNT))
        .toPromise();
    return result;
}

  // public LandingImagelistwithbase64(req:string) {
  //   const result: any = this.httpClient
  //     .post(`${this.baseURL}LandingImagelistwithbase64`,req)
  //     .pipe(retry(this.utils.env.API_RETRY_COUNT))
  //     .toPromise();
  //   return result;
  // }

  public LandingImagelistwithbase64(req:any): Promise<any> { 

    const result: any = this.httpClient
      .post(
        `${this.baseURL}LandingImagelistwithbase64`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }


 

  public LandingImagelist() {
    const result: any = this.httpClient
      .get(`${this.baseURL}LandingImagelist`)
      .pipe(retry(1))
      .toPromise();
    return result;
  }
  

  public landingPageImages() {
    const result: any = this.httpClient
      .get(`${this.jpvrptURL}landingPageImages`)
      .pipe(retry(1))
      .toPromise();
    return result;
  }
  
  public   landingGalaryImages () {
    const result: any = this.httpClient
      .get(`${this.jpvrptURL}landingGalaryImages`)
       
      .pipe(retry(1))
      .toPromise();
    return result;
  }



  public landingGalaryImages_POST(req:any): Promise<any> { 

    const result: any = this.httpClient
      .post(
        `${this.baseURL}landingGalaryImages_POST`,
        req,
        this.utils.getPostHttpOptions()
      )
      .pipe(retry(this.utils.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }


  getPostHttpOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + this.getToken(),
      }),
    };
    return httpOptions;
  }
  getToken(): string {
    let token = '';
    while (token === '') {
      token ='';// sessionStorage.getItem('accessToken');
    }
    return token;
  }
  public testimg()
  {
const result:any="";
    return result;
  }
}
