import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ZBar, ZBarOptions } from "@ionic-native/zbar";
import { Vibration } from '@ionic-native/vibration';
import { Toast, ToastOptions } from '@ionic-native/toast';
declare var navigator: any;



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
        let option:ToastOptions = {
          message:"dljsljdfjla",
          duration:1000,
          position:"center",
          styling:{
          backgroundColor: '#FF0000', // make sure you use #RRGGBB. Default #333333
          textColor: '#FFFF00' // Ditto. Default #FFFFFF
         }
        };
        this.toast.showWithOptions(option).subscribe();
        this.navCtrl.push("TestPage");
        // this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
        // );
        // setTimeout(() => {
        //   this.test();
        // }, 2000);
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

  detail(){
    this.navCtrl.push("TestPage");
  }
  ss(event){
    this.vibration.vibrate(1000);
    alert(event);
  }

  error(event){
    alert(2);
  }
}
