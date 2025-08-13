import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'amul-landing-app';

  noInterNetPopUp = false;

  constructor() {
    let val = 0;
    window.addEventListener('online', () => {
      if (val === 1) {
        val = 0;
        this.noInterNetPopUp = false;
      }
    });

    window.addEventListener('offline', () => {
      val = 1;
      this.noInterNetPopUp = true;
    });
  }
}
