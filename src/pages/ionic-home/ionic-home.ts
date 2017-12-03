import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccessDataService } from "../../services/access-data/access.data.service";
import { OnInit } from "@angular/core";
import { InterfaceMmfInfo } from "../../model/interface.user.data";
import { InterfaceNews } from "../../model/interface.user.data";

/**
 * Generated class for the IonicHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ionic-home',
  templateUrl: 'ionic-home.html',
})
export class IonicHomePage implements OnInit {

  mmfInfo: InterfaceMmfInfo = {rate:0, rateDate:''};
  newses:InterfaceNews[];

  // tPage = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private accessDataService: AccessDataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IonicHomePage');
  }

  ngOnInit(): void {
    this.accessDataService.getMMFInfo().then(mmfInfoRtn => {
      // console.log(mmfInfoRtn.rate);
      // console.log(mmfInfoRtn.rateDate);
      this.mmfInfo = mmfInfoRtn;
    });

    this.accessDataService.getNews().then(newsRtn => {
      console.log(newsRtn.length);
      this.newses = newsRtn;
    })
  }
}
