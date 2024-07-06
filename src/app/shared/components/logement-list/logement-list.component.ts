import { Component, Input } from '@angular/core';
import {LogementModel} from '../../models/logement.model'
import {shouldBeautify} from "@angular-devkit/build-angular/src/utils/environment-options";
@Component({
  selector: 'app-logement-list',
  templateUrl: './logement-list.component.html',
  styleUrl: './logement-list.component.scss'
})
export class LogementListComponent {
  @Input()logement!: LogementModel ;
  protected readonly shouldBeautify = shouldBeautify;
}
