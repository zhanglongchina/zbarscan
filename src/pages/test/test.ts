import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZBar, ZBarOptions } from '@ionic-native/zbar';
declare var navigator: any;
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private zbar: ZBar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  ionViewDidEnter(){
  }

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

        navigator.Backbutton.goBack(function() {
          console.log('success')
        }, function() {
          console.log('fail')
        });
        // this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
        // );
        // setTimeout(() => {
        //   this.test();
        // }, 2000);
      })
      .catch(error => {

      });
  }

}
