import { Component } from '@angular/core';
import { Platform, AlertController, Events, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase'
import { firebaseConfig } from '../providers/config'

import { TabsPage } from '../pages/tabs/tabs';
import { Geolocation } from '@ionic-native/geolocation'
import { NotificationAlertPage } from '../pages/notifications-alert/notifications-alert'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(public alertCtrl : AlertController,public modalCtrl: ModalController,
      public events : Events, platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private geolocation : Geolocation ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.rootPage = TabsPage
      statusBar.styleDefault();
      splashScreen.hide();
      let geoOptions = {
        timeout : 10000,
      }

      this.events.subscribe('requestToWalker',(walkerData,reqData) => {
         let profileModal = this.modalCtrl.create(NotificationAlertPage, { walkerData: walkerData, reqData: reqData });
         profileModal.present();
      });

      // this.events.subscribe('displayNotification',(client_id,walker_id) => {
      //     let ref = firebase.database().ref('/requestToWalker').child(client_id).child(walker_id);
      //     ref.on('value',(snep) => {
      //       console.log('requestNotification',snep.val());
      //       let allData = snep.val();
      //       let metchReq:any;
      //       for(let tmpkey in allData){
      //         //console.log('tmpkey',tmpkey);
      //         if(allData[tmpkey]._id == JSON.parse(localStorage.getItem('setRequestID'))){
      //           metchReq = allData[tmpkey];
      //         }
      //       }
      //       console.log('metchReq',metchReq);
      //       //console.log('walkerID',metchReq.walker_id);

      //       let firestore = firebase.firestore();

      //       firestore.collection('walkers').where('walker_id', '==', `${metchReq.walker_id}`).get()
      //       .then((snapshot) => {
      //           snapshot.forEach((doc) => {
      //             this.events.publish('requestToWalker',doc.data(),metchReq);
      //           });
      //       }).catch((err) => console.log(err));
      //     });
      // });

      /*this.geolocation.getCurrentPosition(geoOptions)
        .then((pos) => {
          console.log(pos.coords)
        })
        .catch((err) => {
          console.log(err)
          alert('we could not get your current location')
        })*/
    });


    firebase.initializeApp(firebaseConfig)
  }


  getLocation() {

      this.geolocation.getCurrentPosition()
       .then((position) => {

         
            console.log(position)
           /*let mapOptions = {

              center : {
                lat : position.coords.latitude,
                lng : position.coords.longitude,
            },
            zoom : 17,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
          }

          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
          //this.addMarker()
          //
          //this.initialMarker()*/
          

       })
       .catch((err) => {
         alert('We could not get your current location')
         console.log(err)
       })

    }
}


