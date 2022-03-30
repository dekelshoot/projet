import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base';
  theme = "white"
  changeTheme(){
    if(this.theme=="white"){
      this.theme="dark"
    }else{
      this.theme="white"
    }

  }
}
