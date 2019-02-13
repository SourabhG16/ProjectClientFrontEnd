import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router,RouterEvent,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  pages = [
    {
      title: 'Profile',
      url: '/tab1',
      name:"person"
    }
    ,
    {
      title: 'About',
      url: '/tab/tab2',
      name:"information"
    }
  ];
  constructor(  
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private mnCtrl:MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.authenticationState.subscribe(state => {
        if (state) {
          // this.router.navigate(['tabs']);
          this.router.navigate(['']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }
  ngOnInit()
  {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map( p => {
          return p['active'] = (event.url === p.url);
        });
      }
    });
  }
  LogOutClicked()
  {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
