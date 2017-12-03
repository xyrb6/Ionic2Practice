import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicPersonPage } from './ionic-person';

@NgModule({
  declarations: [
    IonicPersonPage,
  ],
  imports: [
    IonicPageModule.forChild(IonicPersonPage),
  ],
})
export class IonicPersonPageModule {}
