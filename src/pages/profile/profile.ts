import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PetPage } from '../pet/pet'
import { SettingsPage } from '../settings/settings'
import { SignUpPage } from '../sign-up/sign-up'
import * as firebase from 'firebase'
import '@firebase/firestore'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  client = {
    pic : 'https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8',
    name : 'Fullname',
    email : 'Your email',
  }

  pic = 'https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8'
  pets:any;
  walks = 0
 
  constructor(public navCtrl: NavController,
  	public modalCtrl : ModalController) {

  }

  ionViewDidEnter() {
    this.client = JSON.parse(localStorage.getItem('client'))

		if (this.client) {
      if (this.client.pic != null) {
        //this.client.pic = 'https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8'
        this.pic = this.client.pic;
        this.numberOfPets();
      }
		}
		else {
			this.navCtrl.push(SignUpPage, { startPage : 'profile' });
    }
	  
  }

  numberOfPets() {
    let pets = JSON.parse(localStorage.getItem('pets'))
    this.pets = pets.length;
  }

  addPet(){
    let petModal = this.modalCtrl.create(PetPage)
    petModal.present()
  }

  settings() {

  	this.navCtrl.push(SettingsPage)
  	//settingsModal.present()

  }
  
  picChosen(event) {
    let _id = (Date.now()).toString()
    let imageRef = firebase.storage().ref().child(_id)
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.onload = (event : Event) => {
      this.pic = reader.result
	  

      imageRef.putString(this.pic, 'data_url')
        .then((snap) => {

           //this.pic = snap.downloadURL
		   
           this.client.pic = snap.downloadURL
		   localStorage.setItem('client', JSON.stringify(this.client))
        })
        .catch((err) => console.log(err))
     
    }

    reader.readAsDataURL(file)

  }
}
