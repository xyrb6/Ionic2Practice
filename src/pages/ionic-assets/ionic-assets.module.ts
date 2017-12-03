import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicAssetsPage } from './ionic-assets';

@NgModule({
  declarations: [
    IonicAssetsPage,
  ],
  imports: [
    IonicPageModule.forChild(IonicAssetsPage),
  ],
})
export class IonicAssetsPageModule {}
