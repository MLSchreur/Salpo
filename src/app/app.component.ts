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

  owner: Owner;
  id: number;

  constructor(private appService: AppService){
    console.log('App werkt!'); 
  }

  getOwnerById(id: number) {
    console.log("in getOwnerById()");
    this.appService.getOwnerById(id).subscribe(owner => {
      this.owner = owner;
    });
  }
}
