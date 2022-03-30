import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaremaComponent } from './carema/carema.component';
import { GaleryComponent } from './galery/galery.component';
import { StartComponent } from './start/start.component';
import { ThemeService } from './services/theme.service';
import { ChoiceComponent } from './choice/choice.component';
import {WebcamModule} from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    CaremaComponent,
    GaleryComponent,
    StartComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
