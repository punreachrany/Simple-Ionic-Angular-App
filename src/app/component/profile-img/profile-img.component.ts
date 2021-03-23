import { Component, OnInit } from '@angular/core';

import { userList } from './../../dummyJSON/dummyJSON';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.scss'],
})
export class ProfileImgComponent implements OnInit {

   dummyUserList: Object;
  
  constructor() { 

  }

  

  ngOnInit() {
    this.dummyUserList = userList;
    console.log(this.dummyUserList);
  }

}
