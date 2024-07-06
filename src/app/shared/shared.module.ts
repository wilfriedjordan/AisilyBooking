import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import  {MaterialModule} from './material/material.module'
import  {HomeComponent} from  './components/home/home.component'
import { LogementComponent } from './components/logement/logement.component';
import { LogementListComponent } from './components/logement-list/logement-list.component';
import { LogementListDetailComponent } from './components/logement-list-detail/logement-list-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    HomeComponent,
    LogementComponent,
    LogementListComponent,
    LogementListDetailComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
  ],
  exports:[
    HomeComponent,
    LogementComponent,
    LogementListComponent,
    LogementListDetailComponent
  ]

})
export class SharedModule{ }
