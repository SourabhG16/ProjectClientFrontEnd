import { Component , ElementRef, NgZone, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
//import { ActionSheetController } from '@ionic/angular';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import { Config } from "../../../config";
import { GlobalVarService } from '../global-var.service';
import { RouteService } from '../route.service';
// var isEmpty = require('is-empty')
declare var google;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('Map') mapElement: ElementRef;
  map: any;
 directionsService:any; 
  directionsDisplay:any;
  mapOptions: any;
   RouteJson:any;
   lat1:any;
   long1:any;
   lat2:any;
   long2:any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  
constructor(public zone: NgZone, public geolocation: Geolocation,public modalController: ModalController,public Config:Config, public global_var: GlobalVarService,private routeservice: RouteService) {
  /*load google map script dynamically */
    var apiKey=Config.apireturn();
    const script = document.createElement('script');
    script.id = 'googleMap';
    if (apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey;
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?key= ';
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
        this.markerOptions.position = this.location;
        this.markerOptions.map = this.map;
        this.markerOptions.title = 'My Location';
        this.marker = new google.maps.Marker(this.markerOptions);
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
       this.directionsDisplay.setMap(this.map);
      // this.RouteTO();
          }, 3000);
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
        this.lat1=this.RouteJson.data[0].Longitude;
        this.lat2=this.RouteJson.data[1].Latitude;
        this.long2=this.RouteJson.data[1].Longitude;
        this.long1=this.RouteJson.data[0].Longitude;
        this.routeservice.TripRecord(this.RouteJson).subscribe(res =>{});
        }
        else{
          console.log("unreachable");
        }
    });
    return await modal.present();
  }
/* async RouteTO()
  {
      if (typeof this.lat1 == "undefined" || typeof this.long1 == "undefined") {
        await this.RouteTO();
      };
      this.directionsService.route({
        origin: {lat:this.lat1,lng:this.long1},
        destination: {lat:this.lat2,lng:this.long2},
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          console.log("abcd");
          this.directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to '+status);
        }
      });
}*/

}
