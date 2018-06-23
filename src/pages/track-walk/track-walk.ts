import { Component, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController, AlertController , Events, 
	ModalController } from 'ionic-angular';
	import { Geolocation } from '@ionic-native/geolocation'
	import { TabsPage } from '../tabs/tabs'
	import { SettingsPage } from '../settings/settings'
	import { Storage } from '@ionic/storage'
	import { WalkFeedPage } from '../walk-feed/walk-feed'
	import { NotificationsPopOverPage } from '../notifications-pop-over/notifications-pop-over'
	import { SocialSharing } from '@ionic-native/social-sharing'
	import * as firebase from 'firebase'
	import { ReportPage } from '../report/report'
	import mapboxgl from 'mapbox-gl';
	import { DomSanitizer } from '@angular/platform-browser'
	import { RateWalkPage } from '../rate-walk/rate-walk'
	import { FireProvider } from '../../providers/fire/fire';


	declare var google

	@IonicPage()
	@Component({
		selector: 'page-track-walk',
		templateUrl: 'track-walk.html',
	})
	export class TrackWalkPage {

		@ViewChild('map') mapElement : ElementRef
		map : any;
		marker : any
		lat : any 
		lng : any 
		request : any 
		date 
		path : any = []
		request_id : any 
		speedfactor = 25
		messages = []
		geojson = {
			'type' : 'FeatureCollection',
			'features' : [{
				'type' : 'Feature',
				'geometry' : {
					'type' : 'LineString',
					'coordinates' : []
				}

			}]
		}
		treckPosition:any;
		walkerPosition:any;
		walkerData:any;
		walkersMarkers: Array<any> = [];

		currentMapTrack = null;
		trackedRoute:any = [];

		constructor(public navCtrl: NavController, public navParams: NavParams,
			private geolocation : Geolocation,
			public viewCtrl : ViewController,
			private storage : Storage,
			private fire : FireProvider,
			public popCtrl : PopoverController,
			public alertCtrl : AlertController,
			public events : Events,
			private socialsharing : SocialSharing,
			public modalCtrl : ModalController,
			public zone : NgZone,
			public sanitizer : DomSanitizer ) {


			}

			public getSanitizeUrl(url : string) {
				return this.sanitizer.bypassSecurityTrustUrl(url)
			}

			ionViewDidLoad() {
				console.log('ionViewDidLoad TrackWalkPage');
				//this.loadMap()
				//this.walkEnd()

				this.events.subscribe('message:received',() => {

					this.popOver()
					console.log('received from track walk')

				});
			}

			ionViewDidEnter() {

				this.request = JSON.parse(localStorage.getItem('request'));

				console.log('treck Req',this.request)

				this.date = this.request.duration.time;

				this.loadMap()
				this.timeChanges()
				this.newPics()
				this.stopChanges()

			}

			ionViewWillLeave(){
				clearInterval(this.treckPosition);
			}

			setLineOnMap(walker){
				console.log('setLineOnMap',walker);
				this.trackedRoute.push({ lat: walker.lat, lng: walker.lng });
          		this.redrawPath(this.trackedRoute);
			}

			redrawPath(path) {
				if (this.currentMapTrack) {
					this.currentMapTrack.setMap(null);
				}

				console.log('path',path);

				if (path.length > 1) {
					this.currentMapTrack = new google.maps.Polyline({
						path: path,
						geodesic: true,
						strokeColor: '#ff00ff',
						strokeOpacity: 1.0,
						strokeWeight: 3
					});
					this.currentMapTrack.setMap(this.map);
				}
			}

			loadMap() {

				this.geolocation.getCurrentPosition()
				.then((position) => {

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

					this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
					//this.addMarker()
					this.loadMarkerData();
					//this.initialMarker()
					//this.loadMapBox(this.lat, this.lng)
          

				})
				.catch((err) => {
					alert('We could not get your current location')
					console.log(err)
				})

				//this.addMarker()

			}

			loadMarkerData(){
				this.fire.getWalkerPosition(this.request.walker_id).then(response => {
					this.walkerPosition = response;
					console.log('walkerPosition',this.walkerPosition);
					if (this.walkerPosition.isActive) {
						this.addMapboxMarker(this.walkerPosition);
					}
					
				});

				this.treckPosition = setInterval(() => {
					this.fire.getWalkerPosition(this.request.walker_id)
					.then(res => {
						this.walkerPosition = res;
						if (this.walkerPosition.isActive) {
							console.log('walkerPosition',this.walkerPosition);
							this.clearWalker();
							this.addMapboxMarker(this.walkerPosition);
							if (this.walkerPosition.isTrecking) {
								console.log('isTrecking');
								this.setLineOnMap(this.walkerPosition);
							}
						}
					});
				}, 10000);
			}

			addMarker(lat, lng) {

				this.marker = new google.maps.Marker({
					position : {
						lat : lat, //37.774505,
						lng : lng // -122.420453,
					},
					//icon : walker.pic,
					map : this.map,
				})

				return this.marker
      
			}

			addPolyline() {

				let walkPath = new google.maps.Polyline({
					path : this.path,
					geodesic: true,
					strokeColor: '#FF0000',
					strokeOpacity: 1.0,
					strokeWeight: 2
				})

				walkPath.setMap(this.map)
			}

			loadData() {
  
				/*this.storage.get('request')
				.then((val)=> {
				this.request = val
				console.log(this.request)
				this.initialMarker()
				})
				.catch((err) => console.log(err))*/
    
			}

			initialMarker() {
				firebase.database().ref(`/requests/${this.request._id}`).once('value')
				.then((snap) => {
					this.lat = snap.val().lat 
					this.lng = snap.val().lng 
					//this.marker.setPosition(lat, lng)
					//let latLng = new google.maps.LatLng(lat, lng)
					//this.marker.setPosition(latLng)
					this.addMarker(this.lat, this.lng)
				})
				.catch((err) => {
					console.log(err)
				})
			}

			listenForChanges() {

				firebase.database().ref(`/requests/${this.request._id}`).on('value', 
				(snap) => {
					console.log(snap.val())
					let lat = snap.val().lat
					let lng = snap.val().lng 
					this.date = snap.val().date
					this.lat = lat 
					this.lng = lng 
					this.path.push({ lat: this.lat, lng : this.lng})
					this.addPolyline()
					//this.marker.setPosition(lat, lng)
					let latLng = new google.maps.LatLng(lat, lng)
					this.marker.setPosition(latLng)
					//this.addMarker(lat, lng)
			
			
				})

        
			}

			message() {

				this.navCtrl.push(WalkFeedPage)
			}

			close() {

				this.viewCtrl.dismiss()
				this.navCtrl.setRoot(TabsPage)

			}

			popOver() {

				let alertPopOver = this.popCtrl.create(NotificationsPopOverPage, {cssClass : 'inset-modal'})
				alertPopOver.present()

			}

			cancel() {

				let prompt = this.alertCtrl.create({
					message : /*`<div class="container">
  
					<div class="pop-over">
					<div class="picture-wrapper">

					<div class="main-pic">
					<img src="assets/imgs/snowball.png"  class="pet-pic"/>  
					</div>

					<div class="green-check">    
					<img src="assets/imgs/greencheck.svg"/>
					</div>
					</div>

					<div class="pop-over-message">
					<p> Are you sure, you want to cancel the walk? </p>
					</div>

					</div>

					</div>`,*/'Are you sure, you want to cancel the walk',
					buttons : [
						{
							text : 'NO',
							handler : data => { }
						},
						{
							text : 'YES, cancel',
							handler : data => { }
						}
					],
					cssClass : 'ion-modal.inset-modal',
				})
				prompt.present()

			}


			share(image) {

				this.socialsharing.share("Pic's from my dog's walk by UDog", "UDog Walk", image,).then(() => {
					console.log("shareSheetShare: Success");
				}).catch(() => {
					console.error("shareSheetShare: failed");
				});

			}

			settings() {

				let settingsModal = this.navCtrl.push(SettingsPage)
    

			}

			walkEnd() {

				firebase.firestore().collection("walks").where('walkended', '==', true).where('_id', '==', this.request._id)
				.onSnapshot(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
						this.navCtrl.push(ReportPage)
					});
        
				});

			}

			mapboxPath() {

				this.map.addSource('trace',{
					'type' : 'geojson',
					'data' : this.geojson
				})
				this.map.addLayer({
					'id' : 'trace',
					'type' : 'line',
					'source' : 'trace',
					'layout' : {
						'line-cap' : 'round',
						'line-join' : 'round',
					},
					'paint' : {
						'line-color' : '#4A90E2',
						'line-width' : 4,
						'line-opacity' : 0.6
					} 

				})

				//this.map.jumpTo({ 'center' : [this.geojson.features[0].geometry.coordinates[0]], 'zoom' : 14})

			}

			pathChanges() {

				let walkRef = firebase.database().ref(`walks/path/${this.request.id}`)

				walkRef.on('child_added', (data) => {
					//console.log('pathChanges',data.val());
					this.path.push({lng : data.val().lng, lat : data.val().lat });
					this.lat = data.val().lat;
					this.lng = data.val().lng;
					this.geojson.features[0].geometry.coordinates.push([data.val().lng, data.val().lat ]);
					this.map.getSource('trace').setData(this.geojson);
					this.map.panTo([this.lng, this.lat]);
				});

			}

			timeChanges() {
				let timeRef = firebase.database().ref(`walks/time/${this.request.id}`)

				timeRef.on('value', (data) => {
					console.log('timeChanges',data.val());

					if (data.val() !== null) {
						this.date = data.val().date
					}
				})
			}
  
			stopChanges() {
  	
				let timeRef = firebase.database().ref(`walks/stop/${this.request.id}`)
	  
				timeRef.on('value', (data) => {
					console.log('stopChanges',data.val());

					if (data.val() !== null) {
						//this.date = data.val().date
			
						if (data.val().stop == true ) {
							this.navCtrl.push(RateWalkPage);
				
							firebase
							.database()
							.ref(`/walks/stop/${this.request.id}`)
							.off()
						}
					}
				})
			}

			loadMapBox(lat, lng) {
      
				mapboxgl.accessToken = 'pk.eyJ1IjoidWRvZyIsImEiOiJjamZlZnNzOHgwN2ZjMzNsOXpsamFzNXZ3In0.OtgpQ6_vMLQGyifAdgcCDQ';
				let mapCanvas  = document.getElementsByClassName('mapboxgl-canvas').item(0) as HTMLDivElement

				this.map = new mapboxgl.Map({
					container: this.mapElement.nativeElement,
					style: 'mapbox://styles/mapbox/streets-v9',
					zoom : 14,
					center: [lng, lat]
				});
				//mapCanvas.style.height = '100%'
				//mapCanvas.style.width = '25%'

				//this.initialMapboxMarker(lat,lng)

				this.map.on('load', () => {

					//this.mapboxPath()
					//this.pathChanges()
				})

			}


			newPics() {

				let messagesRef = firebase.database().ref(`messages/${this.request.id}`)

				messagesRef.on('child_added', (data) => {

					if (data.val().message.type === 'image' && data.val().message.from === 'walker') {
						this.messages.push(data.val().message)
					}
       

				})


			}


	clearWalker() {
		this.walkersMarkers.forEach((walkers) => {
		  walkers.setMap(null);
		});
	}

   addMapboxMarker(walkerData) {

   	//console.log('addMapboxMarker',walkerData);

   	this.zone.run(() => {

   		// let el = document.createElement('div')
	    //   el.className = 'marker'
	    //   el.style.backgroundImage = `url(${walkerData.walker.pic})`
	    //   el.style.backgroundRepeat = 'no-repeat'
	    //   el.style.backgroundSize = '50px 50px'
	    //   el.style.width = '50px'
	    //   el.style.height = '50px'

	    let image = new google.maps.MarkerImage(walkerData.walker.pic, null, null, null, new google.maps.Size(40,52));

	      let marker = new google.maps.Marker({
		      	position : {
					lat : walkerData.lat, //37.774505,
					lng : walkerData.lng // -122.420453,
				},
				icon : image,
				map : this.map
	      });

	      this.walkersMarkers.push(marker);

	      return marker

   	});

   }





		}
