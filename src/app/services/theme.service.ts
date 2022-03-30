import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme="white";
  themeSubject= new Subject<string>();
  constructor() { }

  //emetre les les subjects pour permetre leur utilisation
  emitchoixEquipe(){
    this.themeSubject.next(this.theme);
  }
}
