import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ZBar, ZBarOptions } from "@ionic-native/zbar";
import { Vibration } from '@ionic-native/vibration';
import { Toast } from '@ionic-native/toast';


@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private zbar: ZBar,private vibration: Vibration,private toast: Toast
  ) {}

  test() {
    let options: ZBarOptions = {
      flash: "off",
      drawSight: true,
      text_instructions: "将二维码中间对准红线处"
    };

    this.zbar
      .scan(options)
      .then(result => {
        console.log(result);
        this.toast.show(`I'm a toast`, '5000', 'center').subscribe(

        );
        setTimeout(() => {
          this.test();
        }, 500);
      })
      .catch(error => {

      });
  }
  vi(){
    this.vibration.vibrate(1000);
  }
  toas(){
    this.toast.show(`I'm a toast`, '5000', 'center').subscribe(

      );
  }

  ionViewCanLeave(){
    this.toast.hide();
  }
}
