import { Component , ElementRef, NgZone, ViewChild, OnInit} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import { Config } from "../../../config";
import { GlobalVarService } from '../global-var.service';
import { RouteService } from '../route.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
declare var google;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild('Map') mapElement: ElementRef;
  map: any;
  private obj:any;
 /*directionsService:any; 
 directionsDisplay:any;*/
  mapOptions: any;
  data=[];
  tripDur:any;
   RouteJson:any;
   lat1:any;
   long1:any;
   lat2:any;
   response:any;
   long2:any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  api:any;
constructor(public zone: NgZone, public geolocation: Geolocation,public modalController: ModalController,public Config:Config, public global_var: GlobalVarService,private routeservice: RouteService,
  private Router:Router,private Http:HttpClient) {
  /*load google map script dynamically */
    var apiKey=Config.apireturn();
    this.api=apiKey;
    const script = document.createElement('script');
    script.id = 'googleMap';
    if (apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?&language=en&key=' + apiKey;
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?&language=en&key= ';
    }
    document.head.appendChild(script);
    /*Get Current location*/
    this.geolocation.getCurrentPosition().then((position) =>  {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
    });
   
    /*Map options*/
    this.mapOptions = {
        center: this.location,
        zoom: 15, 
        mapTypeControl: false
    };
    setTimeout(() => {
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        /*Marker Options*/
        //var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer;
        this.markerOptions.position = this.location;
        this.markerOptions.map = this.map;
        this.markerOptions.title = 'My Location';
        this.marker = new google.maps.Marker(this.markerOptions);
       directionsDisplay.setMap(this.map);
          }, 3000);
}
ngOnInit()
{
  this.routeservice.currentJson.subscribe(obj=> this.obj=obj);
}
newMessage()
{
  this.routeservice.changeJson(this.RouteJson);
}
async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { lat:this.location.lat,    
            lang:this.location.lng,
 },
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log("Status");
        console.log(this.global_var.Unreachable);  
        
        if(!this.global_var.Unreachable)
        {
        console.log("data pres");
        this.RouteJson = data; // Here's your selected user!
        console.log(this.RouteJson);
        this.lat1=this.RouteJson.data[0].Latitude;
        this.lat2=this.RouteJson.data[1].Latitude;
        this.long2=this.RouteJson.data[1].Longitude;
        this.long1=this.RouteJson.data[0].Longitude;
        this.newMessage();
        this.routeservice.TripRecord(this.RouteJson).subscribe(res =>{
          console.log('record inserted to db');
        });
        }
        else{
          console.log("unreachable");
        }
        //console.log(this.RouteJson.data[0].AreaName);
        //console.log(this.RouteJson.data[1].AreaName); 
        this.Router.navigate(['/payments']);
        this.RouteTO();
    });
    return await modal.present();
  }
async RouteTO()
  {
    this.mapOptions = {
      center: this.location,
      zoom: 15, 
      mapTypeControl: false
  };
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);   
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
      if (typeof this.lat1 == "undefined" || typeof this.long1 == "undefined") {
        await this.RouteTO();
      };
      var start = new google.maps.LatLng(this.lat1,this.long1);
      var end = new google.maps.LatLng(this.lat2,this.long2);
      directionsService.route({
        origin: start,
        destination:end,
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
         // console.log(response.routes[0].legs[0].duration.text);
         var a=JSON.stringify(response.routes[0].legs[0].duration.text);
         a=a.replace(" mins","");
         console.log("a is:"+a);
         this.tripDur=JSON.parse(a);
         var b= +this.tripDur;
          b=(b)+((b)*1/2);     
          console.log("B is"+b);
          directionsDisplay.setMap(this.map);
          directionsDisplay.setDirections(response);
         // console.log(response);
          this.data=this.data.concat(b,this.global_var.LoggedUser);
          console.log(this.tripDur);
          setTimeout(() => {
            this.routeservice.tripDuration(this.data).subscribe(res=>{
              //console.log(res);
            });
          }, 3000);
        } else {
          window.alert('Directions request failed due to '+status);
        }
      });
      /*
     console.log(this.lat1,this.long1);
     let url: string ="https://maps.googleapis.com/maps/api/directions/json?&origin="+this.lat1+","+this.long1+"&destination="+this.lat2+","+this.long2+"&key="+this.api;
     this.Http.get(url).subscribe( (response) => {
             console.log(response);
             this.response=response;
      })
     await this.directionsDisplay.setDirections(this.response);*/
    }
  
}
