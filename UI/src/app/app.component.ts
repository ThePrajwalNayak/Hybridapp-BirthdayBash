import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash = true; // <-- show animation
  navLinksArray = [];// store route links as the user navigates the app

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      const url = this.router.url //current url
      if (event instanceof NavigationEnd) {
        const isCurrentUrlSaved = this.navLinksArray.find((item) => { return item === url });
        if (!isCurrentUrlSaved) {
          this.navLinksArray.push(url)
        };
      }// end event if stmt
    }) // end subscribe
    this.hardwareBackButton();
    this.initializeApp();
  }

  hardwareBackButton() {
    this.platform.backButton.subscribe(() => {
      if (this.navLinksArray.length > 1) {
        this.navLinksArray.pop();
        const index = this.navLinksArray.length + 1;
        const url = this.navLinksArray[index];
        this.router.navigate([url])
      }
    });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s

    });
  }
}
