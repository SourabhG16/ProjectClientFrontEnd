import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AlertController } from "@ionic/angular";
@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http:HttpClient,private alertController:AlertController) {

   }
   Source(latitude,longitude)
   {
    let data=
    {
      lat:latitude,
      longi:longitude
    }
    return this.http.post('http://localhost:3000/api/first/login/findstation',data).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
   }
   Search(credentials) {
     
    // console.log(credentials.length)
    // if(credentials.length > 1)
    // {
      let data=
      {
        name:credentials,
      }
        return this.http.post('http://localhost:3000/api/first/login/searchdest',data).pipe(
          catchError(e => {
            this.showAlert(e.error.msg);
            throw new Error(e);
          })
        );
      // }
  }
  showAlert(msg) {
    let alert = this.alertController.create({
        message: msg,
        header: 'Error',
        buttons: ['OK']
      });
      alert.then(alert => alert.present());
    }
TripRecord(data)
{ 
  console.log("in triprecord");
  console.log(data);
  return this.http.post('http://localhost:3000/api/first/login/triprecord',data).pipe(
   catchError(e => {
     this.showAlert(e.error.msg);
     throw new Error(e);
   })
 );
}
}


