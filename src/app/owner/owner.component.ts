import { Component, OnInit, NgModule } from '@angular/core';
import { Owner } from './owner';
import { OwnerService } from './owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
  }

  ownerAanmaken:  Owner = new Owner;
  ownerId:        number;

  postOwner(){
    console.log(this.ownerAanmaken);
    this.ownerService.postOwner(this.ownerAanmaken).subscribe(ownerId => {
      console.log("Owner aangemaakt, succes! - " + ownerId);
      this.ownerId = +ownerId;
    });
  }

}
