import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import {LogementListDetailComponent} from "./shared/components/logement-list-detail/logement-list-detail.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'housing/:id',component:LogementListDetailComponent}
];
