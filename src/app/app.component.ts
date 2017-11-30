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
  allOwner: Owner[];
  id: number;

  constructor(private appService: AppService){
    console.log('App werkt!'); 
  }

  getOwner() {
    console.log("in getOwner()");
    this.appService.getOwner().subscribe(allOwner => {
      console.log("Alle owners, succes!");
      console.log(allOwner);
      this.allOwner = allOwner;
    });
  }

  getOwnerById(id: number) {
    console.log("in getOwnerById()");
    this.appService.getOwnerById(id).subscribe(owner => {
      this.owner = owner;
    });
  }
}
