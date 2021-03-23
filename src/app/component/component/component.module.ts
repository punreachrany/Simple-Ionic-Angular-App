import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProfileImgComponent } from '../profile-img/profile-img.component';
import { UserDetailComponent } from './../user-detail/user-detail.component';

@NgModule({
  declarations: [ProfileImgComponent,UserDetailComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports:[
    ProfileImgComponent, UserDetailComponent
  ]
})
export class ComponentModule { }
