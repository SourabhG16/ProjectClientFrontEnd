import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {  GlobalVarService} from "../global-var.service";
const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController,private GlobalVarService:GlobalVarService) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
          this.GlobalVarService.LoggedUser=null;
        }
      }
    });
  }

  register(credentials) {
    return this.http.post('http://ec2-52-66-169-149.ap-south-1.compute.amazonaws.com:80/api/first/register', credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  login(credentials) {
    return this.http.post('http://ec2-52-66-169-149.ap-south-1.compute.amazonaws.com:80/api/first/login', credentials)
      .pipe(
        tap(res => {
          this.storage.set(TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken(res['token']);
          console.log(res["Name"]);
          this.GlobalVarService.LoggedUser=res["Name"];
          this.authenticationState.next(true);
        }),
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      );
  }

  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
      this.GlobalVarService.LoggedUser=null;
    });
  }

  getSpecialData() {
    return this.http.get('http://ec2-52-66-169-149.ap-south-1.compute.amazonaws.com:80/api/special').pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.authenticationState.next(false);
        }
        throw new Error(e);
      })
    )
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }


  // showAlert(msg) {
  showAlert(msg) {
  let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}
