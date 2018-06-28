import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookWalkPage } from '../book-walk/book-walk'
import { LoginPage } from '../login/login'
import { Storage } from '@ionic/storage'
import { WalkFeedPage } from '../walk-feed/walk-feed'
import { SignUpPage } from '../sign-up/sign-up'
import { DomSanitizer } from '@angular/platform-browser'
import { PetPage } from '../pet/pet'
import { CardPage } from '../card/card'
import { SocialSharing } from '@ionic-native/social-sharing'
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


/**
 * Generated class for the WalkerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-walker',
  templateUrl: 'walker.html',
})
export class WalkerPage {

	walker = {
		name : '',
		about : '',
		video : '',
		trust : '',
		pic : ''
	}

	itemsCollection: AngularFirestoreCollection<Items>; //Firestore collection
	items: Observable<Items[]>; // read collection

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	private storage : Storage,
  	public sanitizer : DomSanitizer,
    private socialsharing : SocialSharing,
    public afDatabase:AngularFireDatabase,
    private afs: AngularFirestore ) {

		interface Items {
			description: string;
			itemid: number;
		}
		
  }

  ngOnInit() {
      /*this.storage.get('selectedWalker')
      	.then((val) => {
      		this.walker = val
      	})*/


	  this.walker = JSON.parse(localStorage.getItem('selectedWalker'))
	  console.log(this.walker);
	  
   }

   public getSanitizeUrl(url : string) {
     return this.sanitizer.bypassSecurityTrustUrl(url)
   }

   ionViewWillEnter() {
	this.itemsCollection = this.afs.collection('walkers', ref => ref.where('email', '==', 'dzonga@udogapp.com'));
	this.items = this.itemsCollection.valueChanges()
	this.items.subscribe(item => {
		this.walker.name = item[0].first_name;
	})
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkerPage');

    //this.requestWalker()

    /*this.storage.get('selectedWalker')
      	.then((val) => {
      		this.walker = val
      	})*/


  }

	requestWalker() {

		//pseudo-logic
		let login = false

		//this.navCtrl.push(BookWalkPage)

		/*this.storage.get('client')
			.then((client) => {

				if (client) {
					this.navCtrl.push(BookWalkPage)
				}
				else {
					this.navCtrl.push(SignUpPage)
				}
			})
			.catch( (err) => {
				alert('Error')
				console.log(err)
			})*/
		
		//this.navCtrl.push(LoginPage)

		let client = JSON.parse(localStorage.getItem('client'))
		let pets = JSON.parse(localStorage.getItem('pets'))
		let token = JSON.parse(localStorage.getItem('token'))
		if (client) {
				if (pets) {
					if (token) {
						this.navCtrl.push(BookWalkPage)
					}else {
						this.navCtrl.push(CardPage)
					}
					
				}else {
					this.navCtrl.push(PetPage)
				}
		}
		else {
			this.navCtrl.push(SignUpPage, { startPage : 'walker' })
		}

		
	}
	
	contact() {

		this.socialsharing.canShareViaEmail().then(() => {
			this.socialsharing.shareViaEmail('Body', 'Subject', ['info@udogapp.com'])
			.then(() => {
				
			})
			.catch((err) => {
				console.log(err)
			})
			
		})
		.catch((err) => {
			console.log(err)
		})

	}

}
