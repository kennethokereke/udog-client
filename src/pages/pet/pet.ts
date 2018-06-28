import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'
import * as firebase from 'firebase'
import '@firebase/firestore'
import { Storage } from '@ionic/storage'
import { BookWalkPage } from '../book-walk/book-walk'
import { CardPage } from '../card/card'
import { TabsPage } from '../tabs/tabs';



/**
 * Generated class for the PetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pet',
  templateUrl: 'pet.html',
})
export class PetPage {

  breeds = ['BULLDOG','BEAGLE','POODLE','LABRADOR RETRIEVER','GERMAN SHEPHERD','ENGLISH MASTIFF','SIBERIAN HUSKY',
  'GOLDEN RETRIEVER','BOXER','BULLDOG','BEAGLE','POODLE',
  'LABRADOR RETRIEVER', 'GERMAN SHEPHERD', 'ENGLISH MASTIFF','SIBERIAN HUSKY','GOLDEN RETRIEVER','BOXER', 'AUSTRALIAN SHEPHERD','YORKSHIRE TERRIER',
  'OLD ENGLISH SHEEPDOG', 'BULL TERRIER', 'ROTTWEILER','GREAT DANE', 'POINTER', 'CHIHUAHUA', 'DACHSHUND', 
  'GREYHOUND', 'AUSTRALIAN CATTLE DOG', 'SHIH TZU', 'PUG', 'CAVALIER KING', 'AKITA', 'BOSTON TERRIER',
  'BICHON FRISE', 'ALASKAN MALAMUTE', 'BASSET HOUND', 'DEBERMAN', 'FRENCH BULLDOG', 'POMERANIAN',
  'BODER COLLIE', 'MALTESE','JACK RUSSELL','BASENJI','SHETLAND','SCHNAUZER','HAVANESE', 'BULL TERRIER','CHOW CHOW',
  'ST. BERNARD','AFGHAN HOUND','LHASA APSO','ENGLISH SPRINGER SPANIEL','PAPILLON' ,'WEST WHITE TERRIER','AIRDALE TERRIER',
  'GERMAN SHORTHAIRED','PEMBROKE WELSH','A MIX OF TWO BREEDSYORKSHIRE TERRIER', 'OTHER']
  
    breed : any
    pic : string = 'https://images.unsplash.com/photo-1421098518790-5a14be02b243?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ff70edd02988d22f0e70a4683bd4f133&auto=format&fit=crop&w=1778&q=80'
    name : string = ''
    age : string = ''
    color : string = ''
    vaccination : string = ''
    size : string = ''
    aggressive : string = ''
    social : string = ''
    petInfo : string = ''
    client
  
    constructor(public navCtrl: NavController, public navParams: NavParams,
      private camera : Camera,
      private platform : Platform,
      private storage : Storage,
      public alertCtrl : AlertController,
      public viewCtrl: ViewController ) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad PetPage');
    }
  
    ionViewDidEnter() {
      this.client = JSON.parse(localStorage.getItem('client'))
    }
  
    vaccinationChange(vaccination){
      if (vaccination == 'NO') {
        let alert = this.alertCtrl.create({
          subTitle: 'We apologize, please come back when all vaccinations are up to date',
          buttons: [
            {
              text: 'ok',
              handler: () => {
                 this.navCtrl.setRoot(TabsPage);
              }
            }
          ]
        });
        alert.present();
      }
    }
  
  
    save() {
  
      let pet = {
        name : this.name, 
        pic : this.pic, 
        age : this.age,
        breed : this.breed,
        color : this.color,
        vaccination : this.vaccination,
        size : this.size,
        aggressive : this.aggressive,
        social : this.social,
        petInfo : this.petInfo,
        _id :  Date.now(),
        timestamp : new Date(),
        isSelect : true
      }
  
        if (this.client) {
          firebase.firestore().collection('users').doc(`${this.client.client_id}`).collection('pets').add(pet)
            .then(() => {
  
              this.additionalPetPrompt()
              
            }).catch((err) => console.log(err));
        }
    }

    public close(){
     this.viewCtrl.dismiss();
    }
  
    picChosen(event) {
      let _id = (Date.now()).toString()
      let imageRef = firebase.storage().ref().child(_id)
      let file = event.target.files[0]
      let reader = new FileReader()
      reader.onload = (event : Event) => {
        let pic = reader.result
  
        imageRef.putString(pic, 'data_url')
          .then((snap) => {
             //this.pic = snap.downloadURL
             this.pic = reader.result
             console.log('picChosen',this.pic);
          })
          .catch((err) => console.log(err))
       
      }
  
      reader.readAsDataURL(file)
  
    }
  
    additionalPetPrompt() {
      let prompt = this.alertCtrl.create({
        message : 'Do you have an additional pet that needs to be walked',
        buttons : [
          {
            text : 'NO',
            handler : data => {
              firebase.firestore().collection('users').doc(`${this.client.client_id}`).collection('pets')
                .get()
                .then((snap) => {
                  let pets = []
                  snap.forEach((doc) => {
                    pets.push(doc.data());
                    localStorage.setItem('pets', JSON.stringify(pets))
                  });
                  console.log('pets',pets);
                  this.navCtrl.push(CardPage);
                })
                .catch((err) => console.log(err));
            }
          },
          {
            text : 'YES',
            handler : data => { 
        
              this.breed = ''
              this.name = ''
              this.age = ''
              this.color = ''
              this.vaccination = ''
              this.size = ''
              this.aggressive = ''
              this.social = ''
              this.petInfo = ''
            
            }
          }
        ]
      });
      prompt.present()
    }
  
    choosePic() {
  
      const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
  
     }
     
  
     this.platform.ready().then(() => {
  
     this.camera.getPicture(options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
     // Handle error
       console.log(err)
       alert(err)
      })
  
     })
     .catch((err) => alert(err))
      
  
      /*
       this.camera.getPicture({
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  
    }).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.error(err);
    });
  
    */
  
    }
  

}
