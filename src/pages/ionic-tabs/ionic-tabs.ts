import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IonicAssetsPage } from "../ionic-assets/ionic-assets";
import { IonicFundsPage } from "../ionic-funds/ionic-funds";
import { IonicPersonPage } from "../ionic-person/ionic-person";
import { IonicHomePage } from "../ionic-home/ionic-home";

/**
 * Generated class for the IonicTabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ionic-tabs',
  templateUrl: 'ionic-tabs.html',
})
export class IonicTabsPage {

  homePage = IonicHomePage;
  fundsPage = IonicFundsPage;
  assetsPage = IonicAssetsPage;
  personPage = IonicPersonPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IonicTabsPage');
  }

}
