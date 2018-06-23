import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the NotificationAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications-alert',
  templateUrl: 'notifications-alert.html',
})
export class NotificationAlertPage {

  walkerData:any;
  reqData:any;
  pets: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationAlertPage');
    //document.body.classList.add('notification-popup');
  }

  ionViewDidEnter() {
    document.body.classList.add('notification-popup');
    this.reqData = this.navParams.get('reqData');
    console.log('reqData',this.reqData);
    if (this.reqData.status == 'walkStart') {
      this.pets = this.reqData.pets;
      console.log('this.pets',this.pets);
      this.walkerData = this.navParams.get('walkerData');
    }else if (this.reqData.status == 'walkStop') {
      this.pets = this.reqData.pets;
    }else if (this.reqData.status == 'walkEnd'){
      this.pets = this.reqData.pets;
      console.log('this.pets',this.pets);
      this.walkerData = this.navParams.get('walkerData');
    }else{
      this.walkerData = this.navParams.get('walkerData');
    }
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
    document.body.classList.remove('notification-popup');
  }

  dismiss() {
    //document.body.classList.remove('notification-popup');
  	this.viewController.dismiss();
  }

}

