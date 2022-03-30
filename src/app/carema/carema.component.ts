import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carema',
  templateUrl: './carema.component.html',
  styleUrls: ['./carema.component.scss']
})
export class CaremaComponent implements OnInit {

  constructor(private router: Router) { }

  videoRef!:any;

  ngOnInit(): void {

    this.videoRef = document.getElementById('video')
    console.log(this.videoRef)
    this.setupCamera()


    }



    setupCamera(){
      navigator.mediaDevices.getUserMedia({
        video:{},
        audio:false,
      }).then(stream=>{
        this.videoRef.srcObject=stream;
        console.log(this.videoRef)
      })
    }

    route(route:string){
      this.router.navigate([route]);

    }

  }






