import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicFundsPage } from './ionic-funds';

@NgModule({
  declarations: [
    IonicFundsPage,
  ],
  imports: [
    IonicPageModule.forChild(IonicFundsPage),
  ],
})
export class IonicFundsPageModule {}
