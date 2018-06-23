import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import * as firebase from 'firebase'
import '@firebase/firestore'

/**
 * Generated class for the RateWalkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rate-walk',
  templateUrl: 'rate-walk.html',
})
export class RateWalkPage {
	
	
	rate : any 
	request : any 
	comments : any 

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public viewCtrl : ViewController) {
  }
  
  ionViewDidEnter() {
  	
	this.request = JSON.parse(localStorage.getItem('request'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateWalkPage');
  }

  send() {
	  
firebase
      .firestore()
      .collection('walks')
      .doc(`${this.request.id}`)
      .update({
		  rate : this.rate,
		  comments : this.comments,
		  rated : true,
		  
      })
      .then(() => {
		  console.log('update success')
  	this.viewCtrl.dismiss()
  	this.navCtrl.setRoot(TabsPage)
	  })
      .catch(err => console.log(err))
	  
	
  	//this.viewCtrl.dismiss()
	  //this.navCtrl.goToRoot()
	//localStorage.removeItem('request')
  	
  }

}
