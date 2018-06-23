import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, ModalController, Platform, Events, AlertController } from 'ionic-angular';
import { WalkerPage } from '../walker/walker'
import { Observable } from 'rxjs/Observable'
import { FireProvider } from '../../providers/fire/fire';
import { Storage } from '@ionic/storage'
import { TrackWalkPage } from '../track-walk/track-walk'
import { Geolocation } from '@ionic-native/geolocation'
import mapboxgl from 'mapbox-gl';
import * as firebase from 'firebase'
import firestore from 'firebase/firestore'

declare var google

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('map') mapElement : ElementRef
  @ViewChild('map') mapboxMap : HTMLElement
	map : any;
  lat : any 
  lng : any 
  address : string 
  task: any = [];
  minDistance:any;

  walkersData:any = [];

  walkersMarkers: Array<any> = [];

  constructor(
    public navCtrl: NavController, 
    public fire: FireProvider,
    public alertCtrl : AlertController,
    public storage : Storage,
    public ngZone: NgZone,
    private modalCtrl : ModalController,
    private geolocation : Geolocation,
    private platform : Platform,
    public events : Events ) { }

    ionViewDidEnter() {
      this.loadMap()
    }

    ionViewWillLeave(){
      clearInterval(this.task);
    }

  	ionViewDidLoad() {
  		//this.loadMap()
  	}

  	loadMap() {

      this.geolocation.getCurrentPosition().then((position) => {

            this.lat = position.coords.latitude
            this.lng = position.coords.longitude

            let mapOptions = {
                center : {
                  lat : position.coords.latitude,
                  lng : position.coords.longitude,
                },
                zoom : 17,
                mapTypeId : google.maps.MapTypeId.ROADMAP,
            }

          let letLng = {
              lat : this.lat,
              lng : this.lng
          }

          localStorage.setItem('clientLatLng',JSON.stringify(letLng));

          console.log('this.lat',this.lat);
          console.log('this.lng',this.lng);
          
          
          this.loadMapBox(this.lat, this.lng);

          this.nearbyWalkers(this.lat, this.lng);
          clearInterval(this.task);

          this.task = setInterval(() => {
            this.nearbyWalkers(this.lat, this.lng)
          }, 10000);

          this.geocodeLocation(this.lat, this.lng)
          

       }).catch((err) => {
         alert('Sorry, something went wrong ')
         console.log(err)
       });

  	}


    geocodeLocation(lat, lng) {

       let geocoder = new google.maps.Geocoder()
       let latLng = { lat : lat, lng : lng}

       geocoder.geocode({'location' : latLng}, (results, status) => {
         if (status === 'OK') {
           if (results[0]) {
             this.address = results[0].formatted_address
             localStorage.setItem('address', this.address)
             console.log('address',this.address)
           }else {
             console.log('no results found')
           }
         }else {
           console.log('geocoder failed due to' + status)
         }
       })
     
     }

    nearbyWalkers(lat, lng) {

      // console.log('lat nearby',lat)
      // console.log('lng nearby',lng)

      let clientLatLng = JSON.parse(localStorage.getItem('clientLatLng'));

      this.fire.getAllWalkersPosition().then((response) => {
        this.walkersData = [];
        for(let tmpkey in response){
          if (response[tmpkey].isActive) {
            let dis:any = this.calcCrow(clientLatLng.lat,clientLatLng.lng,response[tmpkey].lat,response[tmpkey].lng);
            console.log('dis',dis);
            if (dis <= 10) {
              this.walkersData.push({
                lat: response[tmpkey].lat,
                lng: response[tmpkey].lng,
                distance: dis,
                address: response[tmpkey].walker.address,
                bank_account_token: response[tmpkey].walker.bank_account_token,
                dob: response[tmpkey].walker.dob,
                email: response[tmpkey].walker.email,
                first_name: response[tmpkey].walker.first_name,
                last_name: response[tmpkey].walker.last_name,
                phone: response[tmpkey].walker.phone,
                pic: response[tmpkey].walker.pic,
                stripe_account: response[tmpkey].walker.stripe_account,
                video: response[tmpkey].walker.video,
                walker_id: response[tmpkey].walker.walker_id
              });
            }
            
          }
          
        }

        this.minDistance = Math.min.apply(null, this.walkersData.map(item => item.distance));

        //console.log('minValueOfY',this.minDistance);

        for (var i = 0; i < this.walkersData.length; i++) {
          if (this.walkersData[i].distance == this.minDistance) {
            this.walkersData[i].isClass = 'markerShadow';
          }else{
            this.walkersData[i].isClass = ''
          }
        }


        console.log('walkersData',this.walkersData);

        this.clearWalker();

        this.walkersData.map(walker => this.addMapboxMarker(walker));
      })
      .catch((err) => {
        console.log('nearbyWalkers err',err);
        alert('we could not get walkers near you')
      })

    }

    calcCrow(lat1, lon1, lat2, lon2){
      var R = 6371; // km
      var dLat = this.toRad(lat2-lat1);
      var dLon = this.toRad(lon2-lon1);
      var Lat1 = this.toRad(lat1);
      var Lat2 = this.toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(Lat1) * Math.cos(Lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    toRad(Value){
        return Value * Math.PI / 180;
    }

    loadMapBox(lat, lng) {
      
      mapboxgl.accessToken = 'pk.eyJ1IjoidWRvZyIsImEiOiJjamZlZnNzOHgwN2ZjMzNsOXpsamFzNXZ3In0.OtgpQ6_vMLQGyifAdgcCDQ';
      let mapCanvas  = document.getElementsByClassName('mapboxgl-canvas').item(0) as HTMLDivElement

      this.map = new mapboxgl.Map({
          container: this.mapElement.nativeElement,
          style: 'mapbox://styles/mapbox/streets-v9',
          zoom : 13.5,
          center: [lng, lat]
      });

      this.initialMapboxMarker(lat,lng);

    }

    initialMapboxMarker(lat, lng) {
      let el = document.createElement('div')
      //el.className = 'marker'
      el.style.backgroundImage = "url('assets/imgs/here.svg')"
      el.style.width = '20px'
      el.style.height = '40px'
      el.style.backgroundSize = '20px 40px'

      let marker = new mapboxgl.Marker(el)
      .setLngLat([lng,lat])
      .addTo(this.map)

      return marker
    }

    // clear expired drivers on the map
    clearWalker() {
      this.walkersMarkers.forEach((walkers) => {
        walkers.remove();
      });
    }

   addMapboxMarker(walker) {

     this.ngZone.run(() => {

       let el = document.createElement('div')
        el.className = 'marker '+walker.isClass
        el.style.backgroundImage = `url(${walker.pic})`
        el.style.backgroundRepeat = 'no-repeat'
        el.style.backgroundSize = '50px 50px'
        el.style.width = '50px'
        el.style.height = '50px'

        
       let marker = new mapboxgl.Marker(el)
      .setLngLat([walker.lng,walker.lat])
      .addTo(this.map) 

      
      this.walkersMarkers.push(marker);
        

        el.addEventListener('click', () => {

          let clientLatLng = JSON.parse(localStorage.getItem('clientLatLng'));

          //console.log('selectedWalker',walker);

          //console.log('clientLatLng',clientLatLng);

          let distance:any = this.calcCrow(clientLatLng.lat,clientLatLng.lng,walker.lat,walker.lng);

          console.log('distance',Number.parseFloat(distance).toFixed(2));

          if (parseFloat(Number.parseFloat(distance).toFixed(2)) > 2.50) {
            //alert('oh uuh...');
            //Your walker is too far, please select a closer walker near you
            let alert = this.alertCtrl.create({
              subTitle: 'Your walker is too far, please select a closer walker near you',
              buttons: ['ok']
            });
            alert.present();
          }else{
            //alert('Suceess...');
            localStorage.setItem('selectedWalker', JSON.stringify(walker));
            this.events.publish('walker:selected', marker);
            this.navCtrl.push(WalkerPage);
          }

        });

       return marker

    });

   }

}
