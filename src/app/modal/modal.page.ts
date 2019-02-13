import { Component, OnInit, ElementRef, NgZone, ViewChild} from '@angular/core';
import {NavController,ModalController  } from "@ionic/angular";
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouteService } from "../route.service";
// import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  lat;
  lang;
  @ViewChild('Map') mapElement: ElementRef;
  stlist: any;
  dest: any;
  data=[];
  searching: any = false;
  map: any;
  DestSet=false;s
  mapOptions: any;
  location = {lat: null, lng: null};
  src:any;
  finalDest:any;
  srcbool:boolean=false;
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
   apiKey: any = 'AIzaSyBGhOwi5tJLcH5hKBG7fhXLpauPC1Ja76s'; /*Your API Key*/
  // apiKey: any = 'AIzaSyBZamoub9SCWL2GriEBRSgLGVVrF0QPakk'; /*Your API Key*/2nd
  constructor(private nav:NavController,private modalCtrl:ModalController,private geolocation:Geolocation,private formsmodule:FormsModule,private reactive:ReactiveFormsModule,private routeservice:RouteService) { }
  ngOnInit() {
    console.log(`${this.lat}${this.lang}`);
    this.doNothing();
  }
  closeModal()
  {
    this.modalCtrl.dismiss();
  }
  NavNow()
  {
  this.modalCtrl.dismiss(this.data);
  console.log("Submited");
  }
  doNothing()
  {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude,resp.coords.longitude);
      this.routeservice.Source(resp.coords.latitude,resp.coords.longitude).subscribe(res =>
      {
          this.src=res;
        this.srcbool=true;
      });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  
  doSomething($event) {
  console.log($event.target.value);
  //console.log($event.target.length);  
  if($event.target.value.length > 1)
  {
    this.searching = true;
    this.routeservice.Search($event.target.value).subscribe(res => {
      
      //this.router.navigateByUrl('/login');
       this.stlist=res;
      //  var i;var lt=Object.keys(res).length;
      
       console.log(this.stlist);
       this.searching = false;
       console.log(Object.keys(res).length)  
      console.log(res);    
    });
  }
  else{
    this.searching = true;
    this.stlist=[];
    this.searching = false;
  }
 }
 setDest(landm:any,lati:BigInteger,longi:BigInteger)
 {
  console.log(lati);
  console.log(longi);
  console.log(landm);
  this.finalDest=landm;
  this.stlist=[];
  this.DestSet=true;
  this.data=this.data.concat(this.finalDest,this.src);
 // this.data=this.finalDest.concat(this.src);
 }  
}