import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  // input from parent
  @Input('itemDetail') itemDetail: any;
  // output send to parent
  @Output() itemNameH = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.itemDetail)
  }

  cardClick(itemName) {
    console.log("card CLicked ::=> inside component")
    this.itemNameH.emit(itemName);
  }

}
