import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile'
import { PetsPage } from '../pets/pets'

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  
  edit() {
  	this.navCtrl.push(EditprofilePage)
  }
  
  pets() {
  	this.navCtrl.push(PetsPage)
  }
  
  logout() {//Clears localStorage and directs to login
   localStorage.clear();
   this.navCtrl.push(EditprofilePage);
  }

}
