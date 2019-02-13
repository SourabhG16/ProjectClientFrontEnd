import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { GoogleMap } from "@ionic-native/google-maps";
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // GoogleMap,
    // Geolocation,
    RouterModule.forChild([{ path: '', component: Tab1Page }]) 
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
