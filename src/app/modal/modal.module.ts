import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalPage } from './modal.page';
//import {AutoCompleteModule} from 'ion-autocomplete'
//import {RouteService  } from "../route.service";
const routes: Routes = [
  {
    path: '',
    component:ModalPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //AutoCompleteModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[ModalPage],
  declarations: [ModalPage]
})
export class ModalPageModule {}
