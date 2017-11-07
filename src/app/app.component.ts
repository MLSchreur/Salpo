import { Component } from '@angular/core';
import { Owner } from './owner';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AppService],
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  owner: Owner;
  allOwner: Owner[];

  constructor(private appService: AppService){
    console.log('App werkt!'); 
  }

  getOwner() {
    console.log("in getOwner()")
    this.appService.getOwner().subscribe(allOwner => {
      console.log("Alle owners, succes!");
      console.log(allOwner);
      this.allOwner = allOwner;
    });
  }
}
