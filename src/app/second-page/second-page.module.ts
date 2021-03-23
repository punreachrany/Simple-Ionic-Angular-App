import { CommonModule } from '@angular/common';
import { ComponentModule } from './../component/component/component.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SecondPagePage } from './second-page.page';
import { SecondPagePageRoutingModule } from './second-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondPagePageRoutingModule,
    ComponentModule
  ],
  declarations: [SecondPagePage]
})
export class SecondPagePageModule {}
