import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AlertController } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private Json1=new BehaviorSubject<any>("abc");
  currentJson=this.Json1.asObservable();
  changeJson(obj:any)
  {
    this.Json1.next(obj);
  }
  constructor(private http:HttpClient,private alertController:AlertController) {

   }
   Source(latitude,longitude)
   {
    let data=
    {
      lat:latitude,
      longi:longitude
    }
    return this.http.post('http://ec2-52-66-169-149.ap-south-1.compute.amazonaws.com:80/api/first/login/findstation',data).pipe(
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
        return this.http.post('http://ec2-52-66-169-149.ap-south-1.compute.amazonaws.com:80/api/first/login/searchdest',data).pipe(
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
  return this.http.post('http://ec2-52-66-169-149.ap-south-1.compute.amazonaws.com:80/api/first/login/triprecord',data).pipe(
   catchError(e => {
     this.showAlert(e.error.msg);
     throw new Error(e);
   })
 );
}
Transaction(data)
{
  console.log("In Transaction"+data[1].AreaName);
  return this.http.post('http://ec2-52-66-169-149.ap-south-1.compute.amazonaws.com:80/api/first/login/transaction',data).pipe(
   catchError(e => {
     this.showAlert(e.error.msg);
     throw new Error(e);
   })
 );
}
tripDuration(data)
{
  console.log("Setting Tour Timings:",data);
  return this.http.post('http://ec2-52-66-169-149.ap-south-1.compute.amazonaws.com:80/api/first/login/tripduration',data).pipe(
   catchError(e => {
     this.showAlert(e.error.msg);
     throw new Error(e);
   })
 );
}
}


