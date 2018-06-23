import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pets',
  templateUrl: 'pets.html',
})
export class PetsPage {
	
  pets : any = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PetsPage');
  }
  
  ionViewDidEnter() {
  	this.getPets()
  }
  
  getPets() {
  	this.pets = JSON.parse(localStorage.getItem('pets'))
  }

}