import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})



export class UtilsService {
  env = {
    prod: 2,
    logger: true,
    API_RETRY_COUNT: 2,
  };

  constructor(private httpClient: HttpClient, private router: Router ) {}

  baseUrl(): string {
      return 'https://apiapddcf.ap.gov.in/jpv/';
   // return 'http://api.apddcf.ap.gov.in/jpv/';
  }

  reportsBaseUrl(): string {
      return 'https://apiapddcf.ap.gov.in/jpvReports/';
  // return 'http://api.apddcf.ap.gov.in/jpvReports/';
  }

  getPostHttpOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' ,
          Authorization: `Bearer `+this.getToken(),

      }),
    };
    return httpOptions;
  }
  // getToken(): string {
  //  // let token = ''; this.token=sessionStorage.getItem('accessToken'); 
  //    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZTg2NTczNy0zYjRjLTRhNTMtYjBmNS1iM2EwNmM3MWI0ZGEiLCJyb2xlIjoiMTAxIiwidXNlck5hbWUiOiI5OTg5MDcxNzUzIiwiZXhwIjoxNjg3OTU1NTY4LCJpc3MiOiJodHRwOi8vYXBpLmFwZGRjZi5hcC5nb3YuaW4iLCJhdWQiOiJodHRwOi8vYXBpLmFwZGRjZi5hcC5nb3YuaW4ifQ.Y9vX2BOYQICzJbW1r3iWbOBisU79b_jYQGja085bct0";
  //    //token'';
  // }


  getToken(): string {
    let token = '';
    while (token === '') {
      token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZTg2NTczNy0zYjRjLTRhNTMtYjBmNS1iM2EwNmM3MWI0ZGEiLCJyb2xlIjoiMTAxIiwidXNlck5hbWUiOiI5OTg5MDcxNzUzIiwiZXhwIjoxNjg3OTU1NTY4LCJpc3MiOiJodHRwOi8vYXBpLmFwZGRjZi5hcC5nb3YuaW4iLCJhdWQiOiJodHRwOi8vYXBpLmFwZGRjZi5hcC5nb3YuaW4ifQ.Y9vX2BOYQICzJbW1r3iWbOBisU79b_jYQGja085bct0";
    }
    return token;
  }

  // meetinglandingimgFileDownload(file): any {
  //   const resp = this.meetinglandingimgfileIdToBaseString(file );
  //   return resp;
  // }
  
  // public meetinglandingimgfileIdToBaseString(fileId: string) {
  //   const req = {
  //     filePath: fileId,
  //   };
  //   const url =  this.baseUrl();
  //   const result: any = this.httpClient
  //     .post(`${url}api/login/LandingImagefileDownload`, req, this.getPostHttpOptions())
  //     .pipe(retry(3))
  //     .toPromise();
  //   return result;
  // }

  public meetinglandingimgfileIdToBaseString(req: string): Promise<any> {
    const result: any = this.httpClient
      .post(
        `${''}https://apiapddcf.ap.gov.in/jpv/api/login/LandingImagefileDownload`,
        req,this.getPostHttpOptions()
      )
      .pipe(retry(this.env.API_RETRY_COUNT))
      .toPromise();
    return result;
  }
  








  catchResponse(error: any): void {
    console.log(error);
    if (error.status === 401) {
      sessionStorage.clear();
      this.router.navigate(['/']);
    } else if (error.status === 403) {
      sessionStorage.clear();
      this.router.navigate(['/']);
    } else if (error.status >= 500 && error.status < 600) {
      sessionStorage.clear();
      this.router.navigate(['/']);
    } else {
      alert(error.statusText);
    }
  }

 



}

