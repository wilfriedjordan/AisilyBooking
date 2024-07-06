import { Component } from '@angular/core';

import {LogementModel} from "../../models/logement.model";
import {HousingService} from "../../services/housing.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrl: './logement.component.scss'
})
export class LogementComponent {
  housings$ : Observable<LogementModel[]> = this.housingService.getAllHousing()
  constructor(private  housingService:HousingService) {
  }

}
