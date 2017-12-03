import { Injectable } from "@angular/core";
import { InterfaceMmfInfo } from "../../model/interface.user.data";
import { InterfaceNews } from "../../model/interface.user.data";

@Injectable()
export class AccessDataService {

  /** -----首页----- */
  /** 现金宝 */
  getMMFInfo(): Promise<InterfaceMmfInfo> {

    let mmfInfo: InterfaceMmfInfo;
    mmfInfo = {rate: 7.9909, rateDate: '09-22'}
    return Promise.resolve(mmfInfo);
  }

  /** 热点产品 */
  getHotProducts(): Promise<any> {
    return Promise.resolve("");
  }
  /** 最新资讯 */
  getNews(): Promise<InterfaceNews[]> {

    let news: InterfaceNews[];
    news = [
      {newsTitle:'习近平走过的扶贫路'},
      {newsTitle:'现场：伦敦地铁发生爆炸 火球飞下传出巨响和热浪'},
      {newsTitle:'美要求中俄对朝直接行动 华春莹的回击亮了'},
    ];
    return Promise.resolve(news);
  }

  /** -----精选基金----- */
  getRecommendFunds(): Promise<any> {
    return Promise.resolve("");
  }

  /** -----我的资产----- */
  getAssets(): Promise<any> {
    return Promise.resolve("");
  }
}
