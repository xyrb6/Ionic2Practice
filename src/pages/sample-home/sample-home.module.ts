import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleHomePage } from './sample-home';

@NgModule({
  declarations: [
    SampleHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SampleHomePage),
  ],
})
export class SampleHomePageModule {}
