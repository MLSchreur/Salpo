import { Component } from '@angular/core';
import { Owner } from './owner/owner';
import { AppService } from './app.service';
import { NgModel } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AppService],
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private appService: AppService){
    console.log('App werkt!'); 
  }
  
}
