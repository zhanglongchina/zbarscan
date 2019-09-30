import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ZBar, ZBarOptions } from '@ionic-native/zbar';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, private zbar: ZBar) {}

  test() {
    let options: ZBarOptions = {
      flash: "off",
      drawSight: true,
      text_instructions:"将二维码中间对准红线处"
    };

    this.zbar
      .scan(options)
      .then(result => {
        alert("识别成功");
      })
      .catch(error => {
        alert("识别失败");
      });
  }
}
