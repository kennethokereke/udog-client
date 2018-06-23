import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser'
import { TabsPage } from '../tabs/tabs'
import { Storage } from '@ionic/storage'
import * as firebase from 'firebase'
import '@firebase/firestore'
import { RateWalkPage } from '../rate-walk/rate-walk'

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

   @ViewChild('map') mapElement : ElementRef
   map : any;
   rate : any = 5
   walk : any 
   rated : true

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public sanitizer : DomSanitizer,
    public viewCtrl : ViewController,
    private storage : Storage,
    public modalCtrl : ModalController ) {
  }

  public getSanitizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
    //this.loadData()
  }
  
  ionViewDidEnter(){
  	this.loadData()
  }

  loadData() {
	  
	  this.walk = JSON.parse(localStorage.getItem('walk'))
	  this.rate = this.walk.rate 
	  
	  console.log(this.rate)
  }

  submit() {
    console.log(this.rate)

    let walkRef = firebase.firestore().collection('walks').doc(`${this.walk.id}`)
        .update({ 
          rating : this.rate
        })
        .then(() => {
          console.log('update success')
          
        })
        .catch((err) => console.log(err))

  	this.viewCtrl.dismiss()
  	this.navCtrl.setRoot(TabsPage)
  }

  continue() {
    //let rateModal = this.modalCtrl.create(RateWalkPage)
    //rateModal.present()

    this.viewCtrl.dismiss()
	this.navCtrl.setRoot(TabsPage)
	 
  }

}
