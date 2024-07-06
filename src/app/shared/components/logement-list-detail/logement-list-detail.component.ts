import { Component, OnInit} from '@angular/core';

import {LogementModel} from "../../models/logement.model";
import {HousingService} from "../../services/housing.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-logement-list-detail',
  templateUrl: './logement-list-detail.component.html',
  styleUrl: './logement-list-detail.component.scss'
})
export class LogementListDetailComponent implements  OnInit{
    housing!:LogementModel;

  constructor(private housingService:HousingService , private  activatedRoute : ActivatedRoute) {}
  ngOnInit(){
    const idHousing =+ this.activatedRoute.snapshot.params['id'];
     this.housing = this.housingService.getHousingForId(idHousing)
  }

}
