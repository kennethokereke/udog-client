import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, SegmentButton, ModalController, Events, AlertController } from 'ionic-angular';
//import { Socket } from 'ng-socket-io'
import { Observable } from 'rxjs/Observable'
import { FireProvider } from '../../providers/fire/fire';
import { Storage } from '@ionic/storage'
import { CardPage } from '../card/card'
import { TrackWalkPage } from '../track-walk/track-walk'
import { AddressPage } from '../address/address'
import { WalksPage } from '../walks/walks'
import { TabsPage } from '../tabs/tabs'
import { SelectMorePetsPage } from '../select-more-pets/select-more-pets'
import axios from 'axios'
import * as firebase from 'firebase'
import '@firebase/firestore'


import * as Constants from '../../providers/config'

const API_URL = Constants.API_URL;


 @IonicPage()
 @Component({
   selector: 'page-book-walk',
   templateUrl: 'book-walk.html',
 })
 export class BookWalkPage {

   time = 'thirty';

   walker : any
   client : any = {}
   pet:any = [];
   duration : any
   info = ''
   pickUp = ''
   dropOff = ''
   receiverName = ''
   receiverPhone = ''
   pickUpTime = ''
   token : any
   phone : any 

   allPets:any;
   isButtonHide:boolean = false;
   isPetsChecked:any = [];
   card = {}

   numberofDogs:any = [
         {
           id : 1,
           time: 30,
           cost: 20
         },
         {
           id : 2,
           time : 60,
           cost : 28
         },
         {
           id : 3,
           time : 30,
           cost : 25
         }
     ];

   constructor(public navCtrl: NavController, public navParams: NavParams, 
               public alertCtrl : AlertController,
               private fire : FireProvider,
               public ngZone: NgZone,
               private storage : Storage,
               public modalCtrl : ModalController,
               public events : Events ) {

     this.events.subscribe('address:current', (address) => {
       console.log(address)
       this.pickUp = address

     });


   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad BookWalkPage');
     console.log(this.client);

     this.events.subscribe('walker:selected', (walker) => {

       this.walker = walker
       console.log(walker);

     })

   }

   ionViewDidEnter() {
     this.fetchPets();
     this.fetchCard();
   }

   fetchCard() {
     this.token = JSON.parse(localStorage.getItem('token'))  
   }

   fetchPets () {

     this.ngZone.run(() => {

       this.allPets = JSON.parse(localStorage.getItem('pets'));
       console.log('this.allPets1',this.allPets);

       this.allPets.sort(function(a, b) {
          var dateA = new Date(a.timestamp); 
          var dateB = new Date(b.timestamp);
          if (dateA < dateB) {
            return 1;
          }
          if (dateA > dateB) {
            return -1;
          }
          return 0;
        });

         console.log('this.allPets2',this.allPets);

         if (this.allPets.length >= 2) {
           for (var i = 0; i < 2; i++) {
             this.pet.push(this.allPets[i]);
             this.isPetsChecked.push(this.allPets[i]);
           }

           for (var i = 0; i < this.numberofDogs.length; i++) {
             if (this.numberofDogs[i].id == 3) {
               this.numberofDogs[i].isEnable = true;
               this.numberofDogs[i].isDisabled = false;
             }else{
               this.numberofDogs[i].isEnable = false;
               this.numberofDogs[i].isDisabled = true;
             }
           }

           console.log('if this.numberofDogs',this.numberofDogs);

         }else{
           this.pet.push(this.allPets[0]);
           this.isPetsChecked.push(this.allPets[0]);

           for (var i = 0; i < this.numberofDogs.length; i++) {
             if (this.numberofDogs[i].id == 1 || this.numberofDogs[i].id == 2) {
               if(this.numberofDogs[i].id == 1){
                 this.numberofDogs[i].isEnable = true;
               }else{
                 this.numberofDogs[i].isEnable = false;
               }
               this.numberofDogs[i].isDisabled = false;
             }else{
               this.numberofDogs[i].isEnable = false;
               this.numberofDogs[i].isDisabled = true;
             }
           }

           console.log('else this.numberofDogs',this.numberofDogs);
         }

         console.log('this.pet',this.pet);

         localStorage.setItem('selectedPets',JSON.stringify(this.pet));

         console.log('isPetsChecked',this.isPetsChecked);
      });

    }

    selectPets(item){
      this.ngZone.run(() => {
        console.log('selectPets',item);
        if (item.isSelect) {
          item.isSelect = true;
          this.isPetsChecked.push(item);
        } else {
          item.isSelect = false;
          var index = this.isPetsChecked.findIndex(x => x._id == item._id);
          if(index !== -1) {
              this.isPetsChecked.splice(index, 1);  
          }    
        }
        if (this.isPetsChecked.length == 2) {
          console.log('selectPets2',this.isPetsChecked);
          for (var i = 0; i < this.numberofDogs.length; i++) {
             if (this.numberofDogs[i].id == 3) {
               this.numberofDogs[i].isEnable = true;
               this.numberofDogs[i].isDisabled = false;
             }else{
               this.numberofDogs[i].isEnable = false;
               this.numberofDogs[i].isDisabled = true;
             }
           }
        }else if (this.isPetsChecked.length == 1) {
          console.log('selectPets1',this.isPetsChecked);
          for (var i = 0; i < this.numberofDogs.length; i++) {
             if (this.numberofDogs[i].id == 1 || this.numberofDogs[i].id == 2) {
               if(this.numberofDogs[i].id == 1){
                 this.numberofDogs[i].isEnable = true;
               }else{
                 this.numberofDogs[i].isEnable = false;
               }
               this.numberofDogs[i].isDisabled = false;
             }else{
               this.numberofDogs[i].isEnable = false;
               this.numberofDogs[i].isDisabled = true;
             }
           }
        }else{
          console.log('selectPets0',this.isPetsChecked);
          let alert = this.alertCtrl.create({
            subTitle: 'Please select at least one pet.',
            buttons: [
              {
                text: 'ok',
                handler: () => {
                  this.pet = JSON.parse(localStorage.getItem('selectedPets'));
                  this.isPetsChecked = JSON.parse(localStorage.getItem('selectedPets'));
                  for (var i = 0; i < this.numberofDogs.length; i++) {
                   if (this.numberofDogs[i].id == 3) {
                     this.numberofDogs[i].isEnable = true;
                     this.numberofDogs[i].isDisabled = false;
                   }else{
                     this.numberofDogs[i].isEnable = false;
                     this.numberofDogs[i].isDisabled = true;
                   }
                 }
                }
              }
            ]
          });
          alert.present();
        }
  
      });
    }

   // addMorePets(){
   //    let profileModal = this.modalCtrl.create(SelectMorePetsPage, { selectedPets: this.pet, numberOfDogs: this.numberofDogs });
   //    profileModal.onDidDismiss(data => {
   //     console.log('this.pets',data);
   //     if (data != undefined) {
   //        this.pet = data;
   //        localStorage.setItem('selectedPets',JSON.stringify(this.pet));
   //     } else {
   //       this.pet = JSON.parse(localStorage.getItem('selectedPets'));
   //     }
   //    });
   //    profileModal.present();
   // }

   ngOnInit() {

      this.client = JSON.parse(localStorage.getItem('client'));
      this.walker = JSON.parse(localStorage.getItem('selectedWalker'));
      this.pickUp = localStorage.getItem('address');
   }

   async book() {

     let requestData = {
       pet : this.pet,
       duraton : this.duration,
       info : this.info,
       dropOff : this.dropOff,
       pickUp : this.pickUp, 
       accepted : false,
     }

     let uid = this.client.client_id
     let walker_id = this.walker.walker_id

      this.storage.get('client')
      .then((client) => {

        this.storage.get('phone')
        .then((phone) => {

          this.phone = phone 
          console.log(this.phone)

          if (phone) {
            if (client) {
              console.log(client.client_id);
              this.saveToFirestore();
            }
          }

        })


      })
      .catch( (err) => {
        alert('Error')
        console.log(err)
      });     

    }

    saveToFirestore() {

      console.log('saveToFirestore isPetsChecked',this.isPetsChecked);

      console.log('saveToFirestore this.numberofDogs',this.numberofDogs);

      for (var i = 0; i < this.numberofDogs.length; i++) {
        if (this.numberofDogs[i].isEnable == true) {
          this.duration = this.numberofDogs[i];
        }
      }

      console.log('saveToFirestore duration',this.duration);


      let _id = Date.now()

      let firestore = firebase.firestore()

      let walk = {
        id : `${_id}`,
        client_id : this.client.client_id,
        walker_id : this.walker.walker_id,
        phone : this.client.phone,
        pet : this.isPetsChecked,
        info : this.info,
        dropOff : this.dropOff,
        pickUp : this.pickUp, 
        duration : this.duration,
        accepted : false,
        pending : true,
        time : this.pickUpTime,
        walker : this.walker,
		    receiver : this.receiverName,
        token : this.token
      }

      firestore.collection('walks').doc(`${_id}`).set({
        id : `${_id}`,
        client_id : this.client.client_id,
        walker_id : this.walker.walker_id,
        phone : this.client.phone,
        pet : this.isPetsChecked,
        info : this.info,
        dropOff : this.dropOff,
        pickUp : this.pickUp, 
        duration : this.duration,
        accepted : false,
        pending : true,
        time : this.pickUpTime,
        walker : this.walker,
		    receiver : this.receiverName,
        token : this.token
      })
      .then((docRef) => {
        console.log(`doc written with`)
        firebase.firestore().collection('walks').doc(`${_id}`)
        .get()
        .then((doc) => {
          if (doc.exists) {
            //this.storage.set('request', doc.data())
            console.log('_id',_id);
            this.fire.requestToWalker(_id, this.client.client_id, this.walker.walker_id, this.isPetsChecked);
            localStorage.setItem('request', JSON.stringify(walk));
            this.navCtrl.setRoot(TrackWalkPage);
            localStorage.removeItem('token');
          } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

    })
      .catch((err) => console.log(err))

        this.events.publish('walk:booking')
      })
      .catch((err) => console.log(err))
    }

    payment() {
    //if (this.card === null) {
      let cardModal = this.modalCtrl.create(CardPage)
      cardModal.present()
    //}
  }

  durationSelect(val) {
	  
	  console.log('durationSelect',val);

    for (var i = 0; i < this.numberofDogs.length; i++) {
      if (this.numberofDogs[i].id == val.id) {
       this.numberofDogs[i].isEnable = true;
      }else{
       this.numberofDogs[i].isEnable = false;
      }
    }
  }
  
  locationSelect(val) {
  	
	  if (val === 'same') {
	  	this.dropOff = this.pickUp
	  }else {
	  	this.dropOff = this.dropOff
	  }
  }

  changeAddress() {
    this.navCtrl.push(AddressPage)
    
  }

  // segmentChanged(segmentButton : SegmentButton) {

  //   if ( this.time == 'sixty') {
  //     this.duration = {
  //       time : 60,
  //       cost : 25,
  //     }
  //   }else {
  //     this.duration = {
  //       time : 30,
  //       cost : 15,
  //     }
  //   }
  // }

}
