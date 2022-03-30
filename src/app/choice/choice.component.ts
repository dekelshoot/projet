import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route(route:string){
    this.router.navigate([route]);
  }

}
