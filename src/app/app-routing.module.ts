import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { CaremaComponent } from './carema/carema.component';
import { GaleryComponent } from './galery/galery.component';
import { ChoiceComponent } from './choice/choice.component';

const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: 'camera', component: CaremaComponent} ,
  { path: 'choice', component: ChoiceComponent} ,
  { path: 'galerie', component: GaleryComponent} ,
  { path : '' , redirectTo: 'start', pathMatch: 'full'},
  { path : '**' , redirectTo: 'start'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
