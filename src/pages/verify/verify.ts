import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import axios from 'axios'
import { SignInPage } from '../sign-in/sign-in'
import { RegisterPage } from '../register/register'
import { PetPage } from '../pet/pet'
import { Storage } from '@ionic/storage'
import { CardPage } from '../card/card'

import { ProfilePage } from '../profile/profile';
import { WalksPage } from '../walks/walks'

import * as Constants from '../../providers/config'

import * as firebase from 'firebase'

const API_URL = Constants.API_URL;

/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-verify',
	templateUrl: 'verify.html',
})
export class VerifyPage {

	code: any
	startPage: string;

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController,
		public storage: Storage) {
		this.startPage = navParams.get('startPage');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad VerifyPage');
	}

	verify() {

		axios.post(API_URL + 'client_verify', {
			token: this.code
		})
			.then((res) => {

				//this.walker.walker = res.data
				//console.log(res);
				
				if (res.data.message) {
					let registerModal = this.modalCtrl.create(RegisterPage, { startPage: this.startPage })
					registerModal.present()
				}
				else {
					//this.storage.set('client', res.data)
					localStorage.setItem('client', JSON.stringify(res.data))
					firebase.firestore().collection('users').doc(`${res.data.client_id}`).collection('pets').get()
					
						.then( querySnapshot => {
							//console.log(querySnapshot.docs);
							querySnapshot.forEach( doc => {
								console.log(doc.data());
							})
							if (this.startPage != "walker") {
								if (this.startPage == "profile") {
									this.navCtrl.push(ProfilePage)
								}
								if (this.startPage == "walks") {
									this.navCtrl.push(WalksPage)
								}
							} else {
								let pet = JSON.parse(localStorage.getItem('pets'))
								if (pet) {
									this.navCtrl.push(CardPage)
								}
								else {
									this.navCtrl.push(PetPage)
								}
								
							}
						})
						.catch( err => {
							console.log(err);
							
						});
					


 				/*this.storage.get('pet').then((pet) => {
 					if (pet) {
 						this.navCtrl.push(CardPage)
 					}
 					else {
 						this.navCtrl.push(PetPage)
 					}
 				})*/
				}
				console.log(res.data)
				//this.storage.set('walker', res.data)
				//this.navCtrl.setRoot(TabsPage)
			})
			.catch((err) => {
				console.log(err)
			})

	}

}
