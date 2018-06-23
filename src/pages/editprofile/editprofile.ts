import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase'
import '@firebase/firestore'

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
	
	
	client : any 
	email : string 
	phone : any
	address : string 
	zip : number
	state : string 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }
  
  ionViewDidEnter() {
  	this.client = JSON.parse(localStorage.getItem('client'))
  }
  
  save() {
  	
	  if (this.client)  {
	  	
		firebase.firestore().collection('users').doc(`${this.client.client_id}`)
		  .update({
			  'client.email' : this.email,
			  'client.phone' : this.phone,
			  'client.address' : this.address,
			  'client.zip' : this.zip,
			  'client.state' : this.state,
		  	
		  })
		  .then(() => {
			  console.log('document updated')
		  	  this.navCtrl.pop()
		  })
		  .catch((err) => console.log(err))
		
	  }
	  
  }

}
