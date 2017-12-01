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
    this.getOwner()
  }

  ownerAanmaken:  Owner = new Owner;
  ownerId:        number;
  allOwner: Owner[];
  owner: Owner;

  postOwner(){
    console.log(this.ownerAanmaken);
    this.ownerService.postOwner(this.ownerAanmaken).subscribe(ownerId => {
      console.log("Owner aangemaakt, succes! - " + ownerId);
      this.ownerId = +ownerId;
    });
  }

  getOwner() {
    console.log("in getOwner()");
    this.ownerService.getOwner().subscribe(allOwner => {
      console.log("Alle owners, succes!");
      console.log(allOwner);
      this.allOwner = allOwner;
    });
  }

  getOwnerById(id: number) {
    console.log("in getOwnerById()");
    this.ownerService.getOwnerById(id).subscribe(owner => {
      this.owner = owner;
    });
  }

}
