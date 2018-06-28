webpackJsonp([23],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pet_pet__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_firestore__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.client = {
            pic: 'https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8',
            name: 'Fullname',
            email: 'Your email',
        };
        this.pic = 'https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8';
        this.walks = 0;
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        this.client = JSON.parse(localStorage.getItem('client'));
        if (this.client) {
            if (this.client.pic != null) {
                //this.client.pic = 'https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8'
                this.pic = this.client.pic;
                this.numberOfPets();
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__["a" /* SignUpPage */], { startPage: 'profile' });
        }
    };
    ProfilePage.prototype.numberOfPets = function () {
        var pets = JSON.parse(localStorage.getItem('pets'));
        this.pets = pets.length;
    };
    ProfilePage.prototype.addPet = function () {
        var petModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pet_pet__["a" /* PetPage */]);
        petModal.present();
    };
    ProfilePage.prototype.settings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */]);
        //settingsModal.present()
    };
    ProfilePage.prototype.picChosen = function (event) {
        var _this = this;
        var _id = (Date.now()).toString();
        var imageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().child(_id);
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.pic = reader.result;
            imageRef.putString(_this.pic, 'data_url')
                .then(function (snap) {
                //this.pic = snap.downloadURL
                _this.client.pic = snap.downloadURL;
                localStorage.setItem('client', JSON.stringify(_this.client));
            })
                .catch(function (err) { return console.log(err); });
        };
        reader.readAsDataURL(file);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      My Profile\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="settings()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="profile-container" padding>\n  <ion-list>\n    <!--<img [src]="client?.pic" class="profile-image" />-->\n	<div>\n		<label for="image_upload"> \n			<img [src]="pic"  class="profile-image"/>\n		</label>\n		<input name="image_upload" type="file" id="image_upload" style="display: none;" (change)="picChosen($event)">\n		<!--<img [src]="pic" width="90px" class="pet-pic" (click)="choosePic()"/>-->\n	</div>\n    <p text-center>\n      <span class="name">{{client?.name}}</span>\n      <br/>\n      <span class="email">{{client?.email}}</span>\n    </p>\n  </ion-list>\n  </div>\n\n<!--\n  <ion-row [ngStyle]="{\'background-color\': \'#F2F2F2\'}" padding>\n      <ion-col text-center no-padding col-3>\n        <img src="assets/imgs/walker-icon.png" width="35px" />\n      </ion-col>\n      <ion-col text-left no-padding col-7>\n        <p>Become a Walker</p>\n      </ion-col>\n      <ion-col text-right no-padding col-2>\n        <img src="assets/imgs/plus-icon.png" width="35px" />\n      </ion-col>\n  </ion-row>\n-->\n\n    <ion-row [ngStyle]="{\'background-color\': \'#FFFFFF\'}" padding>\n\n      <ion-col text-center padding col-4>\n        <ion-row>\n          <ion-col col-12>\n              <span class="text-bold stats-num">{{pets}}</span>\n          </ion-col>\n          <ion-col col-12>\n            <span class="brown stats-label">My Pets</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col text-left padding col-8 [ngStyle]="{\'border-left\': \'1px solid #EDEDED\'}">\n        <ion-row>\n          <ion-col col-12>\n            <span class="text-bold stats-num">{{walks}}</span>\n          </ion-col>\n          <ion-col col-12>\n            <span class="gray stats-label">Appointments</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row [ngStyle]="{\'background-color\': \'#F2F2F2\'}" padding>\n      <ion-col text-center no-padding col-3>\n        <img src="assets/imgs/pet-icon.png" height="40px" />\n      </ion-col>\n      <ion-col text-left no-padding col-7>\n        <p>Add a pet</p>\n      </ion-col>\n      <ion-col text-right no-padding col-2>\n        <div tappable (click)="addPet()">\n          <img src="assets/imgs/plus-icon.png" width="35px"/>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row [ngStyle]="{\'background-color\': \'#ffffff\', \'text-align\' : \'center\'}" padding *ngIf="pets == 0" >\n      <ion-col>\n        No pets in the list!\n      </ion-col>\n    </ion-row>\n\n    <ion-row [ngStyle]="{\'background-color\': \'#ffffff\'}" padding >\n      <ion-col text-center no-padding col-3>\n        <img src="assets/imgs/snowball.png" width="90px" class="pet-pic"/>\n      </ion-col>\n      <ion-col text-left no-padding col-6>\n        <p>Snowball<br>\n        <span class="last-walk">Last walk Dec 3, 2016</span>\n      </p>\n      </ion-col>\n      <ion-col text-right no-padding col-3>\n        <p>5 Walks</p>\n      </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackWalkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__walk_feed_walk_feed__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notifications_pop_over_notifications_pop_over__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__report_report__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mapbox_gl__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rate_walk_rate_walk__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_fire_fire__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var TrackWalkPage = /** @class */ (function () {
    function TrackWalkPage(navCtrl, navParams, geolocation, viewCtrl, storage, fire, popCtrl, alertCtrl, events, socialsharing, modalCtrl, zone, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.fire = fire;
        this.popCtrl = popCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.socialsharing = socialsharing;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.sanitizer = sanitizer;
        this.path = [];
        this.speedfactor = 25;
        this.messages = [];
        this.geojson = {
            'type': 'FeatureCollection',
            'features': [{
                    'type': 'Feature',
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': []
                    }
                }]
        };
        this.walkersMarkers = [];
        this.currentMapTrack = null;
        this.trackedRoute = [];
    }
    TrackWalkPage.prototype.getSanitizeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    TrackWalkPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TrackWalkPage');
        //this.loadMap()
        //this.walkEnd()
        this.events.subscribe('message:received', function () {
            _this.popOver();
            console.log('received from track walk');
        });
    };
    TrackWalkPage.prototype.ionViewDidEnter = function () {
        this.request = JSON.parse(localStorage.getItem('request'));
        console.log('treck Req', this.request);
        this.date = this.request.duration.time;
        this.loadMap();
        this.timeChanges();
        this.newPics();
        this.stopChanges();
    };
    TrackWalkPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.treckPosition);
    };
    TrackWalkPage.prototype.setLineOnMap = function (walker) {
        console.log('setLineOnMap', walker);
        this.trackedRoute.push({ lat: walker.lat, lng: walker.lng });
        this.redrawPath(this.trackedRoute);
    };
    TrackWalkPage.prototype.redrawPath = function (path) {
        if (this.currentMapTrack) {
            this.currentMapTrack.setMap(null);
        }
        console.log('path', path);
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
    };
    TrackWalkPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            var mapOptions = {
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                },
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            //this.addMarker()
            _this.loadMarkerData();
            //this.initialMarker()
            //this.loadMapBox(this.lat, this.lng)
        })
            .catch(function (err) {
            alert('We could not get your current location');
            console.log(err);
        });
        //this.addMarker()
    };
    TrackWalkPage.prototype.loadMarkerData = function () {
        var _this = this;
        this.fire.getWalkerPosition(this.request.walker_id).then(function (response) {
            _this.walkerPosition = response;
            console.log('walkerPosition', _this.walkerPosition);
            if (_this.walkerPosition.isActive) {
                _this.addMapboxMarker(_this.walkerPosition);
            }
        });
        this.treckPosition = setInterval(function () {
            _this.fire.getWalkerPosition(_this.request.walker_id)
                .then(function (res) {
                _this.walkerPosition = res;
                if (_this.walkerPosition.isActive) {
                    console.log('walkerPosition', _this.walkerPosition);
                    _this.clearWalker();
                    _this.addMapboxMarker(_this.walkerPosition);
                    if (_this.walkerPosition.isTrecking) {
                        console.log('isTrecking');
                        _this.setLineOnMap(_this.walkerPosition);
                    }
                }
            });
        }, 10000);
    };
    TrackWalkPage.prototype.addMarker = function (lat, lng) {
        this.marker = new google.maps.Marker({
            position: {
                lat: lat,
                lng: lng // -122.420453,
            },
            //icon : walker.pic,
            map: this.map,
        });
        return this.marker;
    };
    TrackWalkPage.prototype.addPolyline = function () {
        var walkPath = new google.maps.Polyline({
            path: this.path,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        walkPath.setMap(this.map);
    };
    TrackWalkPage.prototype.loadData = function () {
        /*this.storage.get('request')
        .then((val)=> {
        this.request = val
        console.log(this.request)
        this.initialMarker()
        })
        .catch((err) => console.log(err))*/
    };
    TrackWalkPage.prototype.initialMarker = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref("/requests/" + this.request._id).once('value')
            .then(function (snap) {
            _this.lat = snap.val().lat;
            _this.lng = snap.val().lng;
            //this.marker.setPosition(lat, lng)
            //let latLng = new google.maps.LatLng(lat, lng)
            //this.marker.setPosition(latLng)
            _this.addMarker(_this.lat, _this.lng);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TrackWalkPage.prototype.listenForChanges = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref("/requests/" + this.request._id).on('value', function (snap) {
            console.log(snap.val());
            var lat = snap.val().lat;
            var lng = snap.val().lng;
            _this.date = snap.val().date;
            _this.lat = lat;
            _this.lng = lng;
            _this.path.push({ lat: _this.lat, lng: _this.lng });
            _this.addPolyline();
            //this.marker.setPosition(lat, lng)
            var latLng = new google.maps.LatLng(lat, lng);
            _this.marker.setPosition(latLng);
            //this.addMarker(lat, lng)
        });
    };
    TrackWalkPage.prototype.message = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__walk_feed_walk_feed__["a" /* WalkFeedPage */]);
    };
    TrackWalkPage.prototype.close = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    TrackWalkPage.prototype.popOver = function () {
        var alertPopOver = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_7__notifications_pop_over_notifications_pop_over__["a" /* NotificationsPopOverPage */], { cssClass: 'inset-modal' });
        alertPopOver.present();
    };
    TrackWalkPage.prototype.cancel = function () {
        var prompt = this.alertCtrl.create({
            message: /*`<div class="container">

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

            </div>`,*/ 'Are you sure, you want to cancel the walk',
            buttons: [
                {
                    text: 'NO',
                    handler: function (data) { }
                },
                {
                    text: 'YES, cancel',
                    handler: function (data) { }
                }
            ],
            cssClass: 'ion-modal.inset-modal',
        });
        prompt.present();
    };
    TrackWalkPage.prototype.share = function (image) {
        this.socialsharing.share("Pic's from my dog's walk by UDog", "UDog Walk", image).then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    TrackWalkPage.prototype.settings = function () {
        var settingsModal = this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    TrackWalkPage.prototype.walkEnd = function () {
        __WEBPACK_IMPORTED_MODULE_9_firebase__["firestore"]().collection("walks").where('walkended', '==', true).where('_id', '==', this.request._id)
            .onSnapshot(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__report_report__["a" /* ReportPage */]);
            });
        });
    };
    TrackWalkPage.prototype.mapboxPath = function () {
        this.map.addSource('trace', {
            'type': 'geojson',
            'data': this.geojson
        });
        this.map.addLayer({
            'id': 'trace',
            'type': 'line',
            'source': 'trace',
            'layout': {
                'line-cap': 'round',
                'line-join': 'round',
            },
            'paint': {
                'line-color': '#4A90E2',
                'line-width': 4,
                'line-opacity': 0.6
            }
        });
        //this.map.jumpTo({ 'center' : [this.geojson.features[0].geometry.coordinates[0]], 'zoom' : 14})
    };
    TrackWalkPage.prototype.pathChanges = function () {
        var _this = this;
        var walkRef = __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref("walks/path/" + this.request.id);
        walkRef.on('child_added', function (data) {
            //console.log('pathChanges',data.val());
            _this.path.push({ lng: data.val().lng, lat: data.val().lat });
            _this.lat = data.val().lat;
            _this.lng = data.val().lng;
            _this.geojson.features[0].geometry.coordinates.push([data.val().lng, data.val().lat]);
            _this.map.getSource('trace').setData(_this.geojson);
            _this.map.panTo([_this.lng, _this.lat]);
        });
    };
    TrackWalkPage.prototype.timeChanges = function () {
        var _this = this;
        var timeRef = __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref("walks/time/" + this.request.id);
        timeRef.on('value', function (data) {
            console.log('timeChanges', data.val());
            if (data.val() !== null) {
                _this.date = data.val().date;
            }
        });
    };
    TrackWalkPage.prototype.stopChanges = function () {
        var _this = this;
        var timeRef = __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref("walks/stop/" + this.request.id);
        timeRef.on('value', function (data) {
            console.log('stopChanges', data.val());
            if (data.val() !== null) {
                //this.date = data.val().date
                if (data.val().stop == true) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__rate_walk_rate_walk__["a" /* RateWalkPage */]);
                    __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]()
                        .ref("/walks/stop/" + _this.request.id)
                        .off();
                }
            }
        });
    };
    TrackWalkPage.prototype.loadMapBox = function (lat, lng) {
        __WEBPACK_IMPORTED_MODULE_11_mapbox_gl___default.a.accessToken = 'pk.eyJ1IjoidWRvZyIsImEiOiJjamZlZnNzOHgwN2ZjMzNsOXpsamFzNXZ3In0.OtgpQ6_vMLQGyifAdgcCDQ';
        var mapCanvas = document.getElementsByClassName('mapboxgl-canvas').item(0);
        this.map = new __WEBPACK_IMPORTED_MODULE_11_mapbox_gl___default.a.Map({
            container: this.mapElement.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 14,
            center: [lng, lat]
        });
        //mapCanvas.style.height = '100%'
        //mapCanvas.style.width = '25%'
        //this.initialMapboxMarker(lat,lng)
        this.map.on('load', function () {
            //this.mapboxPath()
            //this.pathChanges()
        });
    };
    TrackWalkPage.prototype.newPics = function () {
        var _this = this;
        var messagesRef = __WEBPACK_IMPORTED_MODULE_9_firebase__["database"]().ref("messages/" + this.request.id);
        messagesRef.on('child_added', function (data) {
            if (data.val().message.type === 'image' && data.val().message.from === 'walker') {
                _this.messages.push(data.val().message);
            }
        });
    };
    TrackWalkPage.prototype.clearWalker = function () {
        this.walkersMarkers.forEach(function (walkers) {
            walkers.setMap(null);
        });
    };
    TrackWalkPage.prototype.addMapboxMarker = function (walkerData) {
        //console.log('addMapboxMarker',walkerData);
        var _this = this;
        this.zone.run(function () {
            // let el = document.createElement('div')
            //   el.className = 'marker'
            //   el.style.backgroundImage = `url(${walkerData.walker.pic})`
            //   el.style.backgroundRepeat = 'no-repeat'
            //   el.style.backgroundSize = '50px 50px'
            //   el.style.width = '50px'
            //   el.style.height = '50px'
            var image = new google.maps.MarkerImage(walkerData.walker.pic, null, null, null, new google.maps.Size(40, 52));
            var marker = new google.maps.Marker({
                position: {
                    lat: walkerData.lat,
                    lng: walkerData.lng // -122.420453,
                },
                icon: image,
                map: _this.map
            });
            _this.walkersMarkers.push(marker);
            return marker;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TrackWalkPage.prototype, "mapElement", void 0);
    TrackWalkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-track-walk',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/track-walk/track-walk.html"*/'<!--\n  Generated template for the TrackWalkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TrackWalk</ion-title>\n\n    <!--<ion-buttons end>\n\n      <button ion-button (click)="close()"> CLOSE</button>\n\n    </ion-buttons>-->\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="settings()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<div #map id = "map"></div>\n	<ion-item-divider [ngStyle]="{\'background-color\': \'#D0021B\'}">{{ date }} min remaining</ion-item-divider>\n\n	<!--<ion-item-divider color="yellow">35 min walk\n		<p> 1 mile</p>\n	</ion-item-divider>-->\n\n<!--  --><!--   <ion-row >\n\n   <ion-col col-6>\n      <button icon-end class="trackwalk-button contact-walker" type="button">\n        <div class="button-text">\n          Contact Walker \n        </div>\n        <div class="button-icon">\n        <ion-icon name="ios-call-outline"></ion-icon>\n      </div>\n      </button>\n</ion-col>\n\n   <ion-col col-6>\n      <button icon-end class="trackwalk-button" type="button" (click)="popOver()">\n        <div class="button-text">\n          Request Pictures\n          </div>\n          <div class="button-icon"> \n        <ion-icon name="ios-camera-outline"></ion-icon>\n          </div>\n      </button>\n  </ion-col>\n\n</ion-row>\n\n<ion-row>\n\n    <ion-col col-6>\n      <button icon-end class="trackwalk-button message-walker" type="button" (click)="message()">\n        <div class="button-text">\n          Message Walker\n          </div>\n          <div class="button-icon"> \n        <ion-icon name="ios-mail-outline"></ion-icon>\n      </div>\n      </button>\n  </ion-col>\n\n    <ion-col col-6>\n      <button icon-end class="trackwalk-button" type="button" (click)="cancel()">\n        <div class="button-text">\n          Cancel Walk \n        </div>\n        <div class="button-icon">\n          <ion-icon name="ios-close-circle-outline"></ion-icon>\n        </div>\n          <!-<img src="assets/imgs/cancel.svg" height="15" width="15"/> -->\n<!--       </button>\n  </ion-col>\n</ion-row> --> \n\n\n<div class="button-container">\n<div class="top">\n  <div class="contact-walker">\n      <button icon-end class="trackwalk-button contact-walker" type="button">\n        <div class="button-text">\n          Contact Walker \n        </div>\n        <div class="button-icon">\n        <ion-icon name="ios-call-outline"></ion-icon>\n        </div>\n      </button>\n  </div>\n\n  <div class="request-pic">\n      <button icon-end class="trackwalk-button" type="button" (click)="popOver()">\n        <div class="button-text">\n          Request Pictures\n          </div>\n          <div class="button-icon"> \n        <ion-icon name="ios-camera-outline"></ion-icon>\n          </div>\n      </button>\n  </div>\n</div>\n\n<div class="bottom">\n  <div class="message-walker">\n      <button icon-end class="trackwalk-button message-walker" type="button" (click)="message()">\n        <div class="button-text">\n          Message Walker\n          </div>\n          <div class="button-icon"> \n        <ion-icon name="ios-mail-outline"></ion-icon>\n      </div>\n      </button>\n  </div>\n\n  <div class="cancel-walk">\n       <button icon-end class="trackwalk-button" type="button" (click)="cancel()">\n        <div class="button-text">\n          Cancel Walk \n        </div>\n        <div class="button-icon">\n          <ion-icon name="ios-close-circle-outline"></ion-icon>\n        </div>\n          <!-- <img src="assets/imgs/cancel.svg" height="15" width="15"/> -->\n        </button>\n  </div>\n</div>\n</div>\n\n    <ion-item-divider>IMAGES\n   \n  </ion-item-divider>\n\n    <ion-scroll scrollX=true style="width: 100%; height: 20%;">\n\n          <!--<img src="https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8" width="100" height="100" (click)="share()"/>\n\n          <img src="https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8" width="100" height="100" />\n\n          <img src="https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8" width="100" height="100" />\n\n          <img src="https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8" width="100" height="100" />\n\n          <img src="https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8" width="100" height="100" />\n\n          <img src="https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8" width="100" height="100" />-->\n\n          <ion-list no-lines>\n      <ion-item *ngFor="let message of messages" [ngSwitch]="message.type">\n        <p *ngSwitchCase=" \'text\' ">{{ message.txt}}</p>\n        <img *ngSwitchCase=" \'image\' " [src]="sanitizer.bypassSecurityTrustUrl(message.url)" width="100" height="100" (click)="share(message.url)"/> \n      </ion-item>\n    </ion-list>\n\n  </ion-scroll>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/track-walk/track-walk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_14__providers_fire_fire__["a" /* FireProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["c" /* DomSanitizer */]])
    ], TrackWalkPage);
    return TrackWalkPage;
}());

//# sourceMappingURL=track-walk.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile_editprofile__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pets_pets__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    SettingsPage.prototype.pets = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pets_pets__["a" /* PetsPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item-group>\n    		<ion-item-divider color="yellow">My Account</ion-item-divider>\n    		<button ion-item (click)="edit()">Edit Profile</button>\n    		<button ion-item>Payment Method</button>\n    		<button ion-item>Bill Information</button>\n  		</ion-item-group>\n\n\n		<ion-item-group>\n    		<ion-item-divider color="yellow">Pets</ion-item-divider>\n    		<button ion-item (click)="pets()">Your Pets</button>\n    	</ion-item-group>\n\n		<ion-item-group>\n    		<ion-item-divider color="yellow">Information</ion-item-divider>\n    		<ion-item>Contact Us: +1 800 556 7898</ion-item>\n    		<ion-item><a href="udogapp.com">Buy seasonal costumes for your furry friend</a></ion-item>\n  		</ion-item-group>\n\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase_firestore__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPage = /** @class */ (function () {
    function ReportPage(navCtrl, navParams, sanitizer, viewCtrl, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.rate = 5;
    }
    ReportPage.prototype.getSanitizeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    ReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportPage');
        //this.loadData()
    };
    ReportPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    ReportPage.prototype.loadData = function () {
        this.walk = JSON.parse(localStorage.getItem('walk'));
        this.rate = this.walk.rate;
        console.log(this.rate);
    };
    ReportPage.prototype.submit = function () {
        console.log(this.rate);
        var walkRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["firestore"]().collection('walks').doc("" + this.walk.id)
            .update({
            rating: this.rate
        })
            .then(function () {
            console.log('update success');
        })
            .catch(function (err) { return console.log(err); });
        this.viewCtrl.dismiss();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    ReportPage.prototype.continue = function () {
        //let rateModal = this.modalCtrl.create(RateWalkPage)
        //rateModal.present()
        this.viewCtrl.dismiss();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ReportPage.prototype, "mapElement", void 0);
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/report/report.html"*/'<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>report</ion-title>\n\n    <!--<ion-buttons end>\n\n      <button ion-button (click)="submit()"> SAVE </button>\n\n    </ion-buttons>-->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<!--<div #map id = "map"></div>-->\n\n	<!--<img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap\n&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318\n&markers=color:red%7Clabel:C%7C40.718217,-73.998284\n&key=AIzaSyBgI_KhX2VYMgTTsJAJdlnLWdeD0Ce4DaQ"/> -->\n\n	<ion-item-divider color="yellow"> \n\n		<p text-center> Finished the walk! </p>\n\n	</ion-item-divider>\n\n	<ion-row>\n\n			<div class="activity"> \n				<p> Your Dog :</p> \n				<ion-row class="pee-row">\n					<div class="pee-pic">\n					<img src="assets/imgs/pee.svg" />\n					</div>\n					<div class="pee-info">\n					<p> Pee {{walk?.walknotes.pee }} times </p>\n					</div>\n					<div class="pee-type">\n						<p>(Good)</p>\n					</div>\n				</ion-row>\n				<ion-row class="poo-row">\n					<div class="poo-pic">\n					<img src="assets/imgs/poo.svg" />\n					</div>\n					<div class="poo-info">\n					<p> Poo {{walk?.walknotes.poo }} times </p>\n					</div>\n					<div class="poo-type">\n						<p>(Good)</p>\n					</div>\n				</ion-row>\n			</div>\n\n	</ion-row>\n\n	<ion-row>\n\n		<div>\n\n				<p text-center> Observations: </p>\n\n				<p align="center" class="observations">  {{walk?.walknotes.comments }}  </p>\n\n		</div>\n\n\n	</ion-row>\n\n	<ion-row padding>\n\n	\n				<img [src]="walk?.walker.pic"  class="profile-image"/>\n\n				<p text-center>  You rated {{walk?.walker.name }} </p>\n\n				<rating [(ngModel)]="rate" \n			        readOnly="true" \n			        max="5" \n			        emptyStarIconName="star-outline" \n			        halfStarIconName="star-half" \n			        starIconName="star" \n			        nullable="false">        	\n			     </rating>\n\n	</ion-row> \n\n	<ion-row padding> <a> Tell a friend about us and get $25 Off </a> </ion-row>\n\n	<ion-row padding> <a> Would you like to help feed homeless dogs </a> </ion-row>\n\n	<ion-row padding>\n\n		<ion-col col-6 offset-3>\n				<button ion-button color="orange" (click)="continue()" round> Done </button>\n		</ion-col>\n\n	</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/report/report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateWalkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__firebase_firestore__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RateWalkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RateWalkPage = /** @class */ (function () {
    function RateWalkPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    RateWalkPage.prototype.ionViewDidEnter = function () {
        this.request = JSON.parse(localStorage.getItem('request'));
    };
    RateWalkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RateWalkPage');
    };
    RateWalkPage.prototype.send = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]()
            .collection('walks')
            .doc("" + this.request.id)
            .update({
            rate: this.rate,
            comments: this.comments,
            rated: true,
        })
            .then(function () {
            console.log('update success');
            _this.viewCtrl.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (err) { return console.log(err); });
        //this.viewCtrl.dismiss()
        //this.navCtrl.goToRoot()
        //localStorage.removeItem('request')
    };
    RateWalkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rate-walk',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/rate-walk/rate-walk.html"*/'<!--\n  Generated template for the RateWalkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>RateWalk</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n	<ion-item-divider color="yellow"> \n\n		<p text-center> REVIEW THE WALKER </p>\n\n	</ion-item-divider>\n\n	<br>\n	<br>\n\n\n	<ion-row>\n\n		<img [src]="request?.walker.pic" class="profile-image"  />\n\n\n	</ion-row>\n\n	<ion-row>\n\n		<ion-label text-center> {{ request?.walker.name }} </ion-label>\n\n	</ion-row>\n\n	<br>\n	<br>\n\n	<ion-row>\n\n\n		<ion-label text-center> Review the Walker </ion-label>\n\n	</ion-row>\n\n	<ion-row>\n\n		<rating [(ngModel)]="rate" \n	        readOnly="false" \n	        max="5" \n	        emptyStarIconName="star-outline" \n	        halfStarIconName="star-half" \n	        starIconName="star" \n	        nullable="false">        	\n		</rating>\n\n	</ion-row>\n\n		<div class="text-container">\n	<ion-row class="text">\n\n		\n			<textarea rows="3" type="text" [(ngModel)]="comments" placeholder="Write a comment" [ngStyle]="{\'width\':\'90%\' }"></textarea> \n		\n\n	</ion-row>\n</div>\n\n\n		<div class="button-container">\n	<ion-row padding>\n\n		<ion-col >\n				<button ion-button color="orange" (click)="send()" round>SEND</button>\n		</ion-col>\n\n	</ion-row>\n</div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/rate-walk/rate-walk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], RateWalkPage);
    return RateWalkPage;
}());

//# sourceMappingURL=rate-walk.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClientProvider = /** @class */ (function () {
    function ClientProvider() {
        console.log('Hello ClientProvider Provider');
    }
    ClientProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ClientProvider);
    return ClientProvider;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressPage = /** @class */ (function () {
    function AddressPage(navCtrl, navParams, storage, events, viewCtrl) {
        /*this.storage.get('address')
         .then(address => {
           this.address = address
         })
         .catch((err) => console.log(err))*/
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.address = '';
        this.unit = '';
        this.address = localStorage.getItem('address');
    }
    AddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddressPage');
    };
    AddressPage.prototype.continue = function () {
        this.address = this.unit + ' ' + this.address;
        this.events.publish('address:current', this.address);
        this.viewCtrl.dismiss();
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-address',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/address/address.html"*/'<!--\n  Generated template for the AddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>address</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n		<ion-row>\n\n			<ion-item>\n				<ion-input type="text" [(ngModel)]="address"></ion-input><ion-icon name="navigate" item-right>\n				</ion-icon>\n			</ion-item>\n		</ion-row>\n\n		<ion-row>\n\n			<ion-item>\n				\n				<ion-input type="text" [(ngModel)]="unit" placeholder="add unit number" ></ion-input>\n			</ion-item>\n		</ion-row>\n\n		<ion-row>\n			<ion-col col-3><ion-label> State </ion-label></ion-col>\n			<ion-col col-6><ion-select>\n\n				<ion-option value="bulldog"> NY </ion-option>\n				<ion-option value="terrier"> FL </ion-option>\n\n			</ion-select></ion-col>\n			<ion-col col-3>\n				<ion-input type="text" [(ngModel)]="zipCode" value="" placeholder="zip" ></ion-input>\n			</ion-col>\n		</ion-row>\n\n		<ion-row>	\n			<button ion-button color="orange" block (click)="continue()"> Continue </button>\n		</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/address/address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_firestore__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage.prototype.ionViewDidEnter = function () {
        this.client = JSON.parse(localStorage.getItem('client'));
    };
    EditprofilePage.prototype.save = function () {
        var _this = this;
        if (this.client) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('users').doc("" + this.client.client_id)
                .update({
                'client.email': this.email,
                'client.phone': this.phone,
                'client.address': this.address,
                'client.zip': this.zip,
                'client.state': this.state,
            })
                .then(function () {
                console.log('document updated');
                _this.navCtrl.pop();
            })
                .catch(function (err) { return console.log(err); });
        }
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/editprofile/editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>editprofile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n	<ion-item>\n\n		<ion-label floating>Phone <ion-icon name="call"></ion-icon></ion-label>\n		<ion-input type="text" [(ngModel)]="phone"></ion-input>\n\n	</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Email <ion-icon name="mail"></ion-icon></ion-label>\n    		<ion-input type="text" [(ngModel)]="email"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Address <ion-icon name="home"></ion-icon></ion-label>\n    		<ion-input type="text" [(ngModel)]="address"></ion-input>\n\n		</ion-item>\n\n		<ion-row padding>\n			<ion-col col-3><ion-label> State </ion-label></ion-col>\n			<ion-col col-6><ion-select [(ngModel)]="state">\n\n				<ion-option value="NY"> NY </ion-option>\n				<ion-option value="FL"> FL </ion-option>\n\n			</ion-select></ion-col>\n			<ion-col col-3>\n				<ion-input type="text" [(ngModel)]="zip" value="" placeholder="zip" ></ion-input>\n			</ion-col>\n		</ion-row>\n\n				<br/>\n		<br/>\n	<ion-row>\n		<button ion-button color="orange" block round (click)="save()"> Save </button>\n	</ion-row>\n	<br/><br/>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/editprofile/editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PetsPage = /** @class */ (function () {
    function PetsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pets = [];
    }
    PetsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PetsPage');
    };
    PetsPage.prototype.ionViewDidEnter = function () {
        this.getPets();
    };
    PetsPage.prototype.getPets = function () {
        this.pets = JSON.parse(localStorage.getItem('pets'));
    };
    PetsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pets',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/pets/pets.html"*/'<!--\n  Generated template for the PetsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n		<ion-navbar>\n			<ion-title>pets</ion-title>\n		</ion-navbar>\n	\n	</ion-header>\n	\n	\n	<ion-content padding>\n	\n		<ion-list>\n	\n			<ion-item-group>\n					<ion-item *ngFor="let pet of pets">\n						 <ion-avatar item-start>\n									<img [src]="pet?.pic">\n							</ion-avatar>\n						<p>{{ pet?.name }}</p>\n						<!--<button item-content ion-button round color="danger" item-end (click)="track($event, walk)"> TRACK </button>-->\n					</ion-item>\n					<ion-item-options side="right">\n	\n						</ion-item-options>\n				</ion-item-group>\n			\n		</ion-list>\n	\n	</ion-content>'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/pets/pets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PetsPage);
    return PetsPage;
}());

//# sourceMappingURL=pets.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pet_pet__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_card__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__walks_walks__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_config__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var API_URL = __WEBPACK_IMPORTED_MODULE_9__providers_config__["a" /* API_URL */];
/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyPage = /** @class */ (function () {
    function VerifyPage(navCtrl, navParams, modalCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.startPage = navParams.get('startPage');
    }
    VerifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyPage');
    };
    VerifyPage.prototype.verify = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(API_URL + 'client_verify', {
            token: this.code
        })
            .then(function (res) {
            //this.walker.walker = res.data
            //console.log(res);
            if (res.data.message) {
                var registerModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], { startPage: _this.startPage });
                registerModal.present();
            }
            else {
                //this.storage.set('client', res.data)
                localStorage.setItem('client', JSON.stringify(res.data));
                __WEBPACK_IMPORTED_MODULE_10_firebase__["firestore"]().collection('users').doc("" + res.data.client_id).collection('pets').get()
                    .then(function (querySnapshot) {
                    //console.log(querySnapshot.docs);
                    querySnapshot.forEach(function (doc) {
                        console.log(doc.data());
                    });
                    if (_this.startPage != "walker") {
                        if (_this.startPage == "profile") {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */]);
                        }
                        if (_this.startPage == "walks") {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__walks_walks__["a" /* WalksPage */]);
                        }
                    }
                    else {
                        var pet = JSON.parse(localStorage.getItem('pets'));
                        if (pet) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__card_card__["a" /* CardPage */]);
                        }
                        else {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pet_pet__["a" /* PetPage */]);
                        }
                    }
                })
                    .catch(function (err) {
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
            console.log(res.data);
            //this.storage.set('walker', res.data)
            //this.navCtrl.setRoot(TabsPage)
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    VerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-verify',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/verify/verify.html"*/'<!--\n  Generated template for the VerifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<ion-title>verify</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-row>\n		<img src="assets/imgs/icon.png" height="250" [ngStyle]="{\'margin\': \'auto\'}"/>\n	</ion-row>\n\n	<ion-row padding>\n\n		<ion-item>\n\n			<ion-label floating>CODE </ion-label>\n			<ion-input type="text" [(ngModel)]="code"></ion-input>\n\n		</ion-item>\n\n	</ion-row>\n\n	<ion-row padding>\n\n		<button ion-button color="orange" block round (click)="verify()"> VERIFY </button>\n\n	</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/verify/verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], VerifyPage);
    return VerifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pet_pet__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__walks_walks__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_firestore__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, storage, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.platform = platform;
        this.startPage = navParams.get('startPage');
        this.platform.ready().then(function () {
            _this.storage.get('phone')
                .then(function (phone) { return _this.phone = phone; })
                .catch(function (err) { return console.log(err); });
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var _id = (Date.now()).toString();
        var firestore = __WEBPACK_IMPORTED_MODULE_6_firebase__["firestore"]();
        var client = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            client_id: _id,
            address: this.address,
            zip: this.zip,
        };
        firestore.collection('users').doc(_id).set({
            name: this.name,
            email: this.email,
            phone: this.phone,
            client_id: _id,
            address: this.address,
            zip: this.zip,
        })
            .then(function () {
            //this.storage.set('client', client)
            localStorage.setItem('client', JSON.stringify(client));
            if (_this.startPage != "walker") {
                if (_this.startPage == "profile") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                }
                if (_this.startPage == "walks") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__walks_walks__["a" /* WalksPage */]);
                }
            }
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pet_pet__["a" /* PetPage */]);
        })
            .catch(function (err) { return console.log(err); });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n		<ion-row>\n			<img src="assets/imgs/icon.png" height="250" [ngStyle]="{\'margin\': \'auto\'}"/>\n		</ion-row>\n\n\n		<ion-item>\n\n			<ion-label floating>Full Name <ion-icon name="person"></ion-icon></ion-label>\n    		<ion-input type="text" [(ngModel)]="name"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Email <ion-icon name="mail"></ion-icon></ion-label>\n    		<ion-input type="text" [(ngModel)]="email"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label floating>Address <ion-icon name="home"></ion-icon></ion-label>\n    		<ion-input type="text" [(ngModel)]="address"></ion-input>\n\n		</ion-item>\n\n		<ion-row padding>\n			<ion-col col-3><ion-label> State </ion-label></ion-col>\n			<ion-col col-6><ion-select [(ngModel)]="state">\n\n				<ion-option value="NY"> NY </ion-option>\n				<ion-option value="FL"> FL </ion-option>\n\n			</ion-select></ion-col>\n			<ion-col col-3>\n				<ion-input type="text" [(ngModel)]="zip" value="" placeholder="zip" ></ion-input>\n			</ion-col>\n		</ion-row>\n\n				<br/>\n		<br/>\n	<ion-row>\n		<button ion-button color="orange" block round (click)="register()"> Continue </button>\n	</ion-row>\n	<br/><br/>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_walk_book_walk__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pet_pet__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_card__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the WalkerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalkerPage = /** @class */ (function () {
    function WalkerPage(navCtrl, navParams, storage, sanitizer, socialsharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.socialsharing = socialsharing;
        this.walker = {
            name: '',
            about: '',
            video: '',
            trust: '',
            pic: ''
        };
    }
    WalkerPage.prototype.ngOnInit = function () {
        /*this.storage.get('selectedWalker')
          .then((val) => {
              this.walker = val
          })*/
        this.walker = JSON.parse(localStorage.getItem('selectedWalker'));
        console.log(this.walker);
    };
    WalkerPage.prototype.getSanitizeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    WalkerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalkerPage');
        //this.requestWalker()
        /*this.storage.get('selectedWalker')
            .then((val) => {
                this.walker = val
            })*/
    };
    WalkerPage.prototype.requestWalker = function () {
        //pseudo-logic
        var login = false;
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
        var client = JSON.parse(localStorage.getItem('client'));
        var pets = JSON.parse(localStorage.getItem('pets'));
        var token = JSON.parse(localStorage.getItem('token'));
        if (client) {
            if (pets) {
                if (token) {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__book_walk_book_walk__["a" /* BookWalkPage */]);
                }
                else {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__card_card__["a" /* CardPage */]);
                }
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pet_pet__["a" /* PetPage */]);
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__["a" /* SignUpPage */], { startPage: 'walker' });
        }
    };
    WalkerPage.prototype.contact = function () {
        var _this = this;
        this.socialsharing.canShareViaEmail().then(function () {
            _this.socialsharing.shareViaEmail('Body', 'Subject', ['info@udogapp.com'])
                .then(function () {
            })
                .catch(function (err) {
                console.log(err);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    WalkerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-walker',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/walker/walker.html"*/'<!--\n\nGenerated template for the WalkerPage page.\n\n\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\n\nIonic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n	<ion-navbar style="font-weight: normal;">\n	\n	<ion-title>{{walker.name}}</ion-title>\n	\n	</ion-navbar>\n	\n	\n	\n	</ion-header>\n	\n	\n	\n	\n	\n	<ion-content no-padding style="overflow-y: hidden;">\n	\n	\n	\n		<ion-row>\n	\n			<ion-col col-12>\n	\n	\n	\n				<div class="walkerVideo">\n	\n					<video controls="controls" poster="https://images.unsplash.com/photo-1490596541415-5afadbfbbf02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6648b450dbe757608f0c4ed85eef6256&auto=format&fit=crop&w=1618&q=80" preload="metadata" width="400" webkit-playsinline="webkit-playsinline" class="videoPlayer">\n	\n	\n	\n						<source [src]="walker.video" type="video/webm"/>\n	\n					 </video>\n	\n					 \n	\n					 <!-- <iframe src="https://www.youtube.com/embed/5p_jMOLBhYo?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->\n	\n				\n	\n	\n	\n				<!--<iframe [src]="sanitizer.bypassSecurityTrustUrl(walker.video)" width="400"></iframe>-->\n	\n	\n	\n				<!--<iframe src="https://www.youtube.com/embed/5p_jMOLBhYo?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>-->\n	\n	\n	\n				</div>\n	\n	\n	\n			</ion-col>\n	\n		</ion-row>\n	\n	\n	\n		<ion-row padding class="credentials"\n	\n		>\n	\n		<ion-col text-center col-3>\n	\n			<ion-label style="color: #488aff;" text-wrap>Certificates</ion-label>\n	\n		</ion-col>\n	\n	\n	\n			<!-- <ion-col text-center col-4 [ngStyle]="{\'border-right\': \'2px solid #EDEDED\'}">\n	\n	\n	\n				<ion-label> Certificates \n	\n	\n	\n				</ion-label> -->\n	\n	\n	\n			\n	\n	\n	\n			<ion-col text-center col-3 [ngStyle]="{\'border-right\': \'2px solid #EDEDED\', \'border-left\': \'2px solid #EDEDED\'}">\n	\n	\n	\n				<ion-label text-wrap> Background Checked \n	\n					<div>\n	\n						<img src="assets/imgs/badge.svg" height="30px" />\n	\n					</div>\n	\n				</ion-label>\n	\n	\n	\n			</ion-col>\n	\n	\n	\n			<ion-col text-center col-3 [ngStyle]="{\'border-right\': \'2px solid #EDEDED\'}">\n	\n	\n	\n				<ion-label text-wrap> Health Insurance \n	\n					<div>\n	\n						<img src="assets/imgs/health.svg" height="30px" />\n	\n					</div>\n	\n	\n	\n				</ion-label>\n	\n	\n	\n			</ion-col>\n	\n	\n	\n			<ion-col text-center col-3>\n	\n				<ion-label style="color:#488aff;" text-wrap> See Ratings \n	\n					<div>\n	\n						<ion-icon [name]="index < rate ? \'star\' : \'star-outline\'"></ion-icon>\n	\n						<ion-icon [name]="index < rate ? \'star\' : \'star-outline\'"></ion-icon>\n	\n						<ion-icon [name]="index < rate ? \'star\' : \'star-outline\'"></ion-icon>\n	\n						<ion-icon [name]="index < rate ? \'star\' : \'star-outline\'"></ion-icon>\n	\n						<ion-icon [name]="index < rate ? \'star\' : \'star-outline\'"></ion-icon>\n	\n					</div>\n	\n	\n	\n				</ion-label>\n	\n			</ion-col>\n	\n	\n	\n		</ion-row>\n	\n	\n	\n	\n	\n	\n	\n		<ion-scroll scrollY=true style="width: 100%; height: 20%;" >\n	\n	\n	\n			<ion-row class="info">\n	\n				\n	\n				<ion-col col-12 class="info">\n	\n					<ion-list class="info">\n	\n				\n	\n						<ion-item class="info">\n	\n	\n	\n							<ion-label class="info"> NAME </ion-label>\n	\n							<ion-label *ngFor="let item of items | async" class="info">{{item.first_name + \'\' + item.last_name | uppercase}}</ion-label>\n	\n	\n	\n						</ion-item>\n	\n	\n	\n	\n	\n						<ion-item class="info">\n	\n	\n	\n							<ion-label class="info"> ABOUT ME </ion-label>\n	\n							<ion-label class="info" text-wrap> {{ walker.about }} </ion-label>\n	\n	\n	\n						</ion-item>\n	\n	\n	\n	\n	\n						<ion-item class="info">\n	\n	\n	\n							<ion-label class="info"> TRUST </ion-label>\n	\n							<ion-label class="info"> {{ walker.trust }} </ion-label>\n	\n	\n	\n						</ion-item>\n	\n	\n	\n	\n	\n					</ion-list> \n	\n				</ion-col>\n	\n	\n	\n			</ion-row>\n	\n	\n	\n		</ion-scroll>\n	\n	\n	\n		<!--\n	\n		<ion-row padding>\n	\n	\n	\n			<button ion-button color="secondary" block round (click)="contact()"> Contact Walker </button>\n	\n	\n	\n		</ion-row>\n	\n	-->\n	\n	\n	\n		<!--\n	\n		 <ion-row>\n	\n	\n	\n			<ion-col col-6>\n	\n			 <button ion-button icon-right outline text-wrap>\n	\n			 Contact Walker \n	\n			 <ion-icon name="call"></ion-icon>\n	\n			 </button>\n	\n			</ion-col>\n	\n	\n	\n			<ion-col col-6>\n	\n		 <button ion-button outline text-wrap (click)="message()">\n	\n		 Message Walker \n	\n		 <ion-icon name="mail"></ion-icon>\n	\n		 </button>\n	\n		   </ion-col>\n	\n	\n	\n	  </ion-row>\n	\n	-->\n	\n	\n	\n		<ion-row padding>\n	\n	\n	\n				<button large ion-button color="orange" (click)="contact()" block round> Ask A question \n	\n					<ion-icon name="mail"></ion-icon>\n	\n				</button>\n	\n	\n	\n		</ion-row>\n	\n	\n	\n	\n		<ion-row padding>\n	\n	\n	\n				<button large ion-button color="orange" (click)="requestWalker()" block round> Request this Walker </button>\n	\n	\n	\n		</ion-row>\n	\n	\n	\n	</ion-content>​\n	\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/walker/walker.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _e || Object])
    ], WalkerPage);
    return WalkerPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=walker.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkFeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_firestore__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the WalkFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalkFeedPage = /** @class */ (function () {
    function WalkFeedPage(navCtrl, navParams, camera, sanitizer, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.storage = storage;
        this.events = events;
        this.messages = [];
    }
    WalkFeedPage.prototype.getSanitizeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    WalkFeedPage.prototype.ngOnInit = function () {
        /*this.loadData()
   
        this.storage.get('request._id')
         .then(request_id => {
           this.request_id = request_id
         })
         .catch((err) => console.log(err))*/
        this.request = JSON.parse(localStorage.getItem('request'));
    };
    WalkFeedPage.prototype.ionViewDidEnter = function () {
        this.newMessages();
    };
    WalkFeedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalkFeedPage');
        //this.newMessages()
    };
    WalkFeedPage.prototype.chooseImage = function () {
        var _this = this;
        var message = { type: 'image', img: null };
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            message.img = base64Image;
            _this.messages.push(message);
        }, function (err) {
            // Handle error
            console.log(err);
            alert(err);
        });
    };
    WalkFeedPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('request')
            .then(function (val) {
            _this.request = val;
            console.log(_this.request);
            _this.newMessages();
        })
            .catch(function (err) { return console.log(err); });
    };
    WalkFeedPage.prototype.newMessages = function () {
        var _this = this;
        var messagesRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("messages/" + this.request.id);
        /*firebase.firestore().collection('walks').doc(`${this.request._id}`).collection('messages')
        .onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
            snapshot.docChanges.forEach((change) => {
              if (change.type === 'added') {
                this.messages.push(change.doc.data().message)
              }
            })
          })
    
        })*/
        messagesRef.on('child_added', function (data) {
            console.log(data.val());
            _this.messages.push(data.val().message);
            /*if (data.val().message.from === 'walker') {
                this.events.publish('message:received', data.val())
            }*/
        });
    };
    WalkFeedPage.prototype.picChosen = function (event) {
        var _this = this;
        var _id = (Date.now()).toString();
        var imageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref().child(_id);
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            var pic = reader.result;
            imageRef.putString(pic, 'data_url')
                .then(function (snap) {
                //this.pic = snap.downloadURL
                var message = { url: snap.downloadURL, type: 'image', from: 'walker' };
                var messagesRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("messages/" + _this.request._id).push()
                    .set({
                    message: message
                })
                    .then(function () { return console.log('success'); })
                    .catch(function (err) { return console.log(err); });
            })
                .catch(function (err) { return console.log(err); });
        };
        reader.readAsDataURL(file);
    };
    WalkFeedPage.prototype.send = function () {
        var message = { txt: this.newMessage, type: 'text', from: 'client' };
        // if (message.from === 'client') {
        // } else {
        // }
        /*firebase.firestore().collection('walks').doc(`${this.request._id}`).collection('messages')
          .add({
            message : message
          })
          .then(() => console.log('success'))
          .catch((err) => console.log(err))*/
        var messagesRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref("messages/" + this.request.id).push()
            .set({
            message: message
        })
            .then(function () { return console.log('success'); })
            .catch(function (err) { return console.log(err); });
        this.newMessage = '';
    };
    WalkFeedPage.prototype.getStyle = function (message) {
        if (message.from === 'walker') {
            return 'incoming-message';
        }
        else {
            return 'outgoing-message';
        }
    };
    WalkFeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-walk-feed',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/walk-feed/walk-feed.html"*/'<!--\n  Generated template for the WalkFeedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>WalkFeed</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list no-lines>\n      <ion-item *ngFor="let message of messages" [ngSwitch]="message.type">\n        <p [ngClass]="getStyle(message)" *ngSwitchCase=" \'text\' ">{{ message.txt}}</p>\n		<!--<p [ngClass]="{\'incoming-message\' : message.from == \'walker\' }" *ngSwitchCase=" \'text\' ">{{ message.txt}}</p>-->\n         <img *ngSwitchCase=" \'image\' " [src]="sanitizer.bypassSecurityTrustUrl(message.url)"/> \n      </ion-item>\n    </ion-list>\n\n</ion-content>\n\n<ion-footer padding>\n	<ion-row>\n        <ion-col col-7><input  type="text" [(ngModel)]="newMessage" placeholder="Message..." [ngStyle]="{\'width\':\'90%\' }"/></ion-col>\n        <ion-col col-2>\n        <div>\n          <label for="image_upload">\n                <ion-icon name="camera"></ion-icon>\n          </label>\n            \n          <input name="image_upload" type="file" id="image_upload" style="display: none;" (change)="picChosen($event)">\n        </div>\n      </ion-col>\n        <ion-col col-3><button  ion-button (click)="send()">Send</button></ion-col> \n  </ion-row>\n\n</ion-footer>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/walk-feed/walk-feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], WalkFeedPage);
    return WalkFeedPage;
}());

//# sourceMappingURL=walk-feed.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPopOverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationsPopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPopOverPage = /** @class */ (function () {
    function NotificationsPopOverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationsPopOverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPopOverPage');
    };
    NotificationsPopOverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notifications-pop-over',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/notifications-pop-over/notifications-pop-over.html"*/'<!--\n  Generated template for the NotificationsPopOverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- <ion-content style="height:400px;width:200px;">\n\n	<!-<ion-card>-->\n\n		<!-- <ion-row padding>\n\n			<ion-label text-center> Notification text </ion-label>\n\n		</ion-row>\n\n		<ion-row>\n					<div class="main-pic">\n				<ion-col col-6 offset-3>\n					<img src="assets/imgs/snowball.png" width="90px" class="pet-pic"/>\n				</ion-col>\n					</div>\n\n					<div class="green-check">\n				<ion-col col-3 offset-9>\n\n					<img src="assets/imgs/greencheck.svg"/>\n\n				</ion-col>\n					</div>\n			</ion-row>\n\n		<ion-item no-padding>\n		</ion-item>\n\n		<ion-row padding>\n\n			<p> Check your messages and wait for approval </p>\n\n		</ion-row>\n	<!--</ion-card>-->\n\n<!-- </ion-content>\n --> \n <div class="container">\n	\n		<div class="pop-over">\n			<div class="picture-wrapper">\n		\n				<div class="main-pic">\n					<img src="assets/imgs/snowball.png"  class="pet-pic"/>	\n				</div>\n		\n				<div class="green-check">		\n					<img src="assets/imgs/greencheck.svg"/>\n				</div>\n			</div>\n		\n		<div class="pop-over-message">\n			<p> Check your messages and wait for approval </p>\n		</div>\n		\n		\n		</div>\n		\n		</div>\n		'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/notifications-pop-over/notifications-pop-over.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NotificationsPopOverPage);
    return NotificationsPopOverPage;
}());

//# sourceMappingURL=notifications-pop-over.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_walk_book_walk__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fire_fire__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_client_client__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var API_URL = __WEBPACK_IMPORTED_MODULE_7__providers_config__["a" /* API_URL */];
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, storage, fire, client_provider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.fire = fire;
        this.client_provider = client_provider;
        this.events = events;
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.emailLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var email, password;
            return __generator(this, function (_a) {
                email = this.email;
                password = this.password;
                this.fire.signIn(email, password)
                    .then(function (val) {
                    console.log(val);
                    /*let client = {
                      client_id : firebase.auth().currentUser.uid,
                      email : firebase.auth().currentUser.email
                    }*/
                    __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(API_URL + 'auth', {
                        email: email
                    })
                        .then(function (res) {
                        console.log(res.data);
                        _this.storage.set('client', res.data);
                        _this.storage.set('phone', res.data.phone);
                        _this.client_provider.client = res.data;
                        _this.events.publish('client:in');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__book_walk_book_walk__["a" /* BookWalkPage */]); //push(BookWalkPage)
                    })
                        .catch(function (err) {
                        console.log(err);
                    });
                })
                    .catch(function (err) {
                    alert('Sorry! we could not sign you in');
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/sign-in/sign-in.html"*/'<!--\n  Generated template for the SignInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign-In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-row>\n		<img src="assets/imgs/icon.png" height="250" [ngStyle]="{\'margin\': \'auto\'}"/>\n	</ion-row>\n\n	<ion-row padding>\n\n		<ion-item>\n\n			<ion-label floating>Email <ion-icon name="mail"></ion-icon></ion-label>\n    		<ion-input type="text" [(ngModel)]="email"></ion-input>\n\n		</ion-item>\n\n	</ion-row>\n\n	<ion-row padding>\n\n		<ion-item>\n\n			<ion-label floating>Password <ion-icon name="key"></ion-icon></ion-label>\n    		<ion-input type="password" [(ngModel)]="password"></ion-input>\n\n		</ion-item>\n\n	</ion-row>\n\n	<ion-row padding>\n\n		<button ion-button color="orange" block round (click)="emailLogin()"> Sign In </button>\n\n	</ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/sign-in/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_fire_fire__["a" /* FireProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_client_client__["a" /* ClientProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationAlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationAlertPage = /** @class */ (function () {
    function NotificationAlertPage(navCtrl, navParams, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
    }
    NotificationAlertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationAlertPage');
        //document.body.classList.add('notification-popup');
    };
    NotificationAlertPage.prototype.ionViewDidEnter = function () {
        document.body.classList.add('notification-popup');
        this.reqData = this.navParams.get('reqData');
        console.log('reqData', this.reqData);
        if (this.reqData.status == 'walkStart') {
            this.pets = this.reqData.pets;
            console.log('this.pets', this.pets);
            this.walkerData = this.navParams.get('walkerData');
        }
        else if (this.reqData.status == 'walkStop') {
            this.pets = this.reqData.pets;
        }
        else if (this.reqData.status == 'walkEnd') {
            this.pets = this.reqData.pets;
            console.log('this.pets', this.pets);
            this.walkerData = this.navParams.get('walkerData');
        }
        else {
            this.walkerData = this.navParams.get('walkerData');
        }
    };
    NotificationAlertPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave');
        document.body.classList.remove('notification-popup');
    };
    NotificationAlertPage.prototype.dismiss = function () {
        //document.body.classList.remove('notification-popup');
        this.viewController.dismiss();
    };
    NotificationAlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notifications-alert',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/notifications-alert/notifications-alert.html"*/'<!--\n  Generated template for the NotificationAlertPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="notification-popup" *ngIf="reqData">\n    <h2 *ngIf="reqData.msgTitle">{{reqData.msgTitle}}</h2>\n  \n    <img *ngIf="walkerData" src="{{walkerData.pic}}">\n  \n    <div class="bookwalk-pet-pic" *ngIf="pets">\n      <ng-container *ngFor="let item of pets">\n        <img [src]="item?.pic" class="pet-image" [ngStyle]="{\'align-self\': \'center\'}"/>\n      </ng-container>\n    </div>\n  \n    <div class="poup-btn-wrap" (click)="dismiss()">\n      <img class="tick-img" src="assets/imgs/greencheck.svg">\n    </div>\n  \n    <!-- <ion-buttons start>\n      <button ion-button (click)="dismiss()"></button>\n    </ion-buttons> -->\n    <div class="popup-content" *ngIf="reqData.msgText">\n      <p>{{reqData.msgText}}</p>	\n    </div>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/notifications-alert/notifications-alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], NotificationAlertPage);
    return NotificationAlertPage;
}());

//# sourceMappingURL=notifications-alert.js.map

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/address/address.module": [
		588,
		22
	],
	"../pages/book-walk/book-walk.module": [
		591,
		21
	],
	"../pages/card/card.module": [
		589,
		20
	],
	"../pages/editprofile/editprofile.module": [
		590,
		19
	],
	"../pages/login/login.module": [
		592,
		18
	],
	"../pages/notifications-alert/notifications-alert.module": [
		593,
		17
	],
	"../pages/notifications-pop-over/notifications-pop-over.module": [
		594,
		16
	],
	"../pages/pet/pet.module": [
		596,
		15
	],
	"../pages/pets/pets.module": [
		595,
		14
	],
	"../pages/rate-walk/rate-walk.module": [
		597,
		13
	],
	"../pages/register/register.module": [
		598,
		12
	],
	"../pages/report/report.module": [
		600,
		11
	],
	"../pages/select-more-pets/select-more-pets.module": [
		599,
		10
	],
	"../pages/settings/settings.module": [
		601,
		9
	],
	"../pages/sign-in/sign-in.module": [
		602,
		8
	],
	"../pages/sign-up/sign-up.module": [
		603,
		7
	],
	"../pages/track-walk/track-walk.module": [
		604,
		6
	],
	"../pages/verify/verify.module": [
		605,
		5
	],
	"../pages/videocall/videocall.module": [
		607,
		1
	],
	"../pages/walk-feed/walk-feed.module": [
		606,
		4
	],
	"../pages/walker/walker.module": [
		608,
		3
	],
	"../pages/walkerquestions/walkerquestions.module": [
		609,
		0
	],
	"../pages/walks/walks.module": [
		610,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 262;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walker_walker__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fire_fire__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mapbox_gl__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mapbox_gl__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, fire, alertCtrl, storage, ngZone, modalCtrl, geolocation, platform, events) {
        this.navCtrl = navCtrl;
        this.fire = fire;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.ngZone = ngZone;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.platform = platform;
        this.events = events;
        this.task = [];
        this.walkersData = [];
        this.walkersMarkers = [];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.loadMap();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        clearInterval(this.task);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        //this.loadMap()
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.lat = position.coords.latitude;
            _this.lng = position.coords.longitude;
            var mapOptions = {
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                },
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            var letLng = {
                lat: _this.lat,
                lng: _this.lng
            };
            localStorage.setItem('clientLatLng', JSON.stringify(letLng));
            console.log('this.lat', _this.lat);
            console.log('this.lng', _this.lng);
            _this.loadMapBox(_this.lat, _this.lng);
            _this.nearbyWalkers(_this.lat, _this.lng);
            clearInterval(_this.task);
            _this.task = setInterval(function () {
                _this.nearbyWalkers(_this.lat, _this.lng);
            }, 10000);
            _this.geocodeLocation(_this.lat, _this.lng);
        }).catch(function (err) {
            alert('Sorry, something went wrong ');
            console.log(err);
        });
    };
    HomePage.prototype.geocodeLocation = function (lat, lng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        var latLng = { lat: lat, lng: lng };
        geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.address = results[0].formatted_address;
                    localStorage.setItem('address', _this.address);
                    console.log('address', _this.address);
                }
                else {
                    console.log('no results found');
                }
            }
            else {
                console.log('geocoder failed due to' + status);
            }
        });
    };
    HomePage.prototype.nearbyWalkers = function (lat, lng) {
        // console.log('lat nearby',lat)
        // console.log('lng nearby',lng)
        var _this = this;
        var clientLatLng = JSON.parse(localStorage.getItem('clientLatLng'));
        this.fire.getAllWalkersPosition().then(function (response) {
            _this.walkersData = [];
            for (var tmpkey in response) {
                if (response[tmpkey].isActive) {
                    var dis = _this.calcCrow(clientLatLng.lat, clientLatLng.lng, response[tmpkey].lat, response[tmpkey].lng);
                    console.log('dis', dis);
                    if (dis <= 10) {
                        _this.walkersData.push({
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
            _this.minDistance = Math.min.apply(null, _this.walkersData.map(function (item) { return item.distance; }));
            //console.log('minValueOfY',this.minDistance);
            for (var i = 0; i < _this.walkersData.length; i++) {
                if (_this.walkersData[i].distance == _this.minDistance) {
                    _this.walkersData[i].isClass = 'markerShadow';
                }
                else {
                    _this.walkersData[i].isClass = '';
                }
            }
            console.log('walkersData', _this.walkersData);
            _this.clearWalker();
            _this.walkersData.map(function (walker) { return _this.addMapboxMarker(walker); });
        })
            .catch(function (err) {
            console.log('nearbyWalkers err', err);
            alert('we could not get walkers near you');
        });
    };
    HomePage.prototype.calcCrow = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = this.toRad(lat2 - lat1);
        var dLon = this.toRad(lon2 - lon1);
        var Lat1 = this.toRad(lat1);
        var Lat2 = this.toRad(lat2);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(Lat1) * Math.cos(Lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    HomePage.prototype.toRad = function (Value) {
        return Value * Math.PI / 180;
    };
    HomePage.prototype.loadMapBox = function (lat, lng) {
        __WEBPACK_IMPORTED_MODULE_6_mapbox_gl___default.a.accessToken = 'pk.eyJ1IjoidWRvZyIsImEiOiJjamZlZnNzOHgwN2ZjMzNsOXpsamFzNXZ3In0.OtgpQ6_vMLQGyifAdgcCDQ';
        var mapCanvas = document.getElementsByClassName('mapboxgl-canvas').item(0);
        this.map = new __WEBPACK_IMPORTED_MODULE_6_mapbox_gl___default.a.Map({
            container: this.mapElement.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 13.5,
            center: [lng, lat]
        });
        this.initialMapboxMarker(lat, lng);
    };
    HomePage.prototype.initialMapboxMarker = function (lat, lng) {
        var el = document.createElement('div');
        //el.className = 'marker'
        el.style.backgroundImage = "url('assets/imgs/here.svg')";
        el.style.width = '20px';
        el.style.height = '40px';
        el.style.backgroundSize = '20px 40px';
        var marker = new __WEBPACK_IMPORTED_MODULE_6_mapbox_gl___default.a.Marker(el)
            .setLngLat([lng, lat])
            .addTo(this.map);
        return marker;
    };
    // clear expired drivers on the map
    HomePage.prototype.clearWalker = function () {
        this.walkersMarkers.forEach(function (walkers) {
            walkers.remove();
        });
    };
    HomePage.prototype.addMapboxMarker = function (walker) {
        var _this = this;
        this.ngZone.run(function () {
            var el = document.createElement('div');
            el.className = 'marker ' + walker.isClass;
            el.style.backgroundImage = "url(" + walker.pic + ")";
            el.style.backgroundRepeat = 'no-repeat';
            el.style.backgroundSize = '50px 50px';
            el.style.width = '50px';
            el.style.height = '50px';
            var marker = new __WEBPACK_IMPORTED_MODULE_6_mapbox_gl___default.a.Marker(el)
                .setLngLat([walker.lng, walker.lat])
                .addTo(_this.map);
            _this.walkersMarkers.push(marker);
            el.addEventListener('click', function () {
                var clientLatLng = JSON.parse(localStorage.getItem('clientLatLng'));
                //console.log('selectedWalker',walker);
                //console.log('clientLatLng',clientLatLng);
                var distance = _this.calcCrow(clientLatLng.lat, clientLatLng.lng, walker.lat, walker.lng);
                console.log('distance', Number.parseFloat(distance).toFixed(2));
                if (parseFloat(Number.parseFloat(distance).toFixed(2)) > 2.50) {
                    //alert('oh uuh...');
                    //Your walker is too far, please select a closer walker near you
                    var alert_1 = _this.alertCtrl.create({
                        subTitle: 'Your walker is too far, please select a closer walker near you',
                        buttons: ['ok']
                    });
                    alert_1.present();
                }
                else {
                    //alert('Suceess...');
                    localStorage.setItem('selectedWalker', JSON.stringify(walker));
                    _this.events.publish('walker:selected', marker);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__walker_walker__["a" /* WalkerPage */]);
                }
            });
            return marker;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", HTMLElement)
    ], HomePage.prototype, "mapboxMap", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="yellow">\n  	<div id="logo">\n  		<img id="udog-logo" src="assets/imgs/logo.svg"/>\n  	</div>\n  </ion-navbar>\n     <link href=\'https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css\' rel=\'stylesheet\' />\n</ion-header>\n\n<ion-content no-padding>\n	<div class="subHeader">\n		<p>Please select a dog walker in your area</p>\n	</div>\n		<div #map id=\'map\' class="map"></div>\n	\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_fire_fire__["a" /* FireProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_walk_book_walk__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    /*private oauth: OauthCordova = new OauthCordova();
    private facebookProvider: Facebook = new Facebook({
      clientId: "548230068871334",
      
    })*/
    function LoginPage(navCtrl, navParams, platform, googlePlus, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.googlePlus = googlePlus;
        this.fb = fb;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__book_walk_book_walk__["a" /* BookWalkPage */]);
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage.prototype.facebookLogin = function () {
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            console.log(res);
            alert('Logged In');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__["a" /* SignInPage */]);
    };
    LoginPage.prototype.forgot = function () {
        alert("not implemented");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-row>\n		<img src="assets/imgs/icon.png" height="250" [ngStyle]="{\'margin\': \'auto\'}"/>\n	</ion-row>\n\n\n	<!--<ion-row padding>\n		<ion-col col-6 text-right>\n				<button ion-button color="facebook" (click)="facebookLogin()" round>Facebook</button>\n		</ion-col>\n		<ion-col col-6 text-left>\n				<button ion-button color="primary" (click)="googleLogin()" round>Google</button>\n		</ion-col>\n\n	</ion-row>-->\n\n	<!--<ion-row padding> \n		<button large ion-button color="orange" (click)="register()" block round> Register With Email </button>\n\n	</ion-row>-->\n\n	<ion-row padding> \n		<button large ion-button color="orange" (click)="register()" block round> Register</button>\n\n	</ion-row>\n\n	<!--\n	<ion-row padding>\n		<button large ion-button color="facebook" block round (click)="facebookLogin()"> Continue with Facebook </button>\n	</ion-row>\n	\n	<ion-row padding>\n		<button large ion-button color="primary" (click)="googleLogin()" block round> Continue with Google </button>\n	</ion-row>\n-->\n\n	<p text-center>\n		<span class="gray">Already Have an Account?</span> \n		<span (click)="login()"> Log In</span>\n	</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectMorePetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectMorePetsPage = /** @class */ (function () {
    function SelectMorePetsPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkedCount = 0;
        this.isCheckedPets = [];
    }
    SelectMorePetsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectMorePetsPage');
    };
    SelectMorePetsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.selectedPets = this.navParams.get('selectedPets');
        console.log('selectedPets', this.selectedPets);
        var getAllpertData = JSON.parse(localStorage.getItem('pets'));
        for (var i = 0; i < getAllpertData.length; i++) {
            getAllpertData[i]._id = 'pets' + i;
            getAllpertData[i].checked = false;
            getAllpertData[i].petName = getAllpertData[i].name;
        }
        console.log('getAllpertData==>', getAllpertData);
        if (this.selectedPets.length > 0) {
            var metchArray = getAllpertData.filter(function (item) {
                _this.selectedPets.some(function (data) {
                    if (item._id === data._id) {
                        item.checked = true;
                    }
                });
                return item;
            });
            console.log('metchArray', metchArray);
            this.checkedCount = this.selectedPets.length;
            console.log('checkedCount', this.checkedCount);
            this.isCheckedPets = this.selectedPets;
            console.log('isCheckedPets', this.isCheckedPets);
        }
        this.allPets = getAllpertData;
        console.log('allpets', this.allPets);
        this.numberOfDogs = this.navParams.get('numberOfDogs');
        console.log('numberOfDogs', this.numberOfDogs);
    };
    SelectMorePetsPage.prototype.selectPets = function (item) {
        console.log('item', item);
        if (item.checked) {
            console.log('++' + item.name);
            this.checkedCount++;
            item.checked = true;
            this.isCheckedPets.push(item);
        }
        else {
            this.checkedCount--;
            console.log('--');
            item.checked = false;
            var index = this.isCheckedPets.findIndex(function (x) { return x._id == item._id; });
            if (index !== -1) {
                this.isCheckedPets.splice(index, 1);
            }
        }
        ;
        console.log('this.isCheckedPets', this.isCheckedPets);
    };
    SelectMorePetsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SelectMorePetsPage.prototype.selectdDogs = function () {
        this.viewCtrl.dismiss(this.isCheckedPets);
    };
    SelectMorePetsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-select-more-pets',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/select-more-pets/select-more-pets.html"*/'<!--\n  Generated template for the SelectMorePetsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons start>\n      <button [disabled]="isCheckedPets.length != numberOfDogs" ion-button icon-only (click)="selectdDogs()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Select more pets</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n		<ion-item *ngFor="let items of allPets">\n      <ion-avatar item-start>\n      		<img [src]="items.pic">\n      </ion-avatar>\n      <ion-label>{{items.petName}}</ion-label>\n      <ion-checkbox item-end [disabled]="checkedCount == numberOfDogs && !items.checked" [(ngModel)]="items.checked" (ionChange)="selectPets(items)"></ion-checkbox>\n\n		</ion-item>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/select-more-pets/select-more-pets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SelectMorePetsPage);
    return SelectMorePetsPage;
}());

//# sourceMappingURL=select-more-pets.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_walker_walker__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_sign_in__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_book_walk_book_walk__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_card_card__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pet_pet__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_walk_feed_walk_feed__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_track_walk_track_walk__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_walks_walks__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_report_report__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_address_address__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_notifications_pop_over_notifications_pop_over__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_verify_verify__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_register_register__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_rate_walk_rate_walk__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_editprofile_editprofile__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_pets_pets__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_notifications_alert_notifications_alert__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_social_sharing__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_google_maps__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_google_plus__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_video_player__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_streaming_media__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_camera__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_geolocation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_facebook__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_select_more_pets_select_more_pets__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ionic2_rating__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_stripe__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_api_service_api_service__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_config__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_fire_fire__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_client_client__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































//import { CardIO } from '@ionic-native/card-io'


var API_URL = __WEBPACK_IMPORTED_MODULE_44__providers_config__["a" /* API_URL */];
//import { SocketIoModule, SocketIoConfig } from 'ng-socket-io'


var socketConfig = { url: API_URL, options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_walker_walker__["a" /* WalkerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_book_walk_book_walk__["a" /* BookWalkPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pet_pet__["a" /* PetPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_walk_feed_walk_feed__["a" /* WalkFeedPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_track_walk_track_walk__["a" /* TrackWalkPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_walks_walks__["a" /* WalksPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_notifications_pop_over_notifications_pop_over__["a" /* NotificationsPopOverPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_rate_walk_rate_walk__["a" /* RateWalkPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_pets_pets__["a" /* PetsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_notifications_alert_notifications_alert__["a" /* NotificationAlertPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_select_more_pets_select_more_pets__["a" /* SelectMorePetsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_39__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/card/card.module#CardPageModule', name: 'CardPage', segment: 'card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/book-walk/book-walk.module#BookWalkPageModule', name: 'BookWalkPage', segment: 'book-walk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications-alert/notifications-alert.module#NotificationsAlertPageModule', name: 'NotificationAlertPage', segment: 'notifications-alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications-pop-over/notifications-pop-over.module#NotificationsPopOverPageModule', name: 'NotificationsPopOverPage', segment: 'notifications-pop-over', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pets/pets.module#PetsPageModule', name: 'PetsPage', segment: 'pets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pet/pet.module#PetPageModule', name: 'PetPage', segment: 'pet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rate-walk/rate-walk.module#RateWalkPageModule', name: 'RateWalkPage', segment: 'rate-walk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-more-pets/select-more-pets.module#SelectMorePetsPageModule', name: 'SelectMorePetsPage', segment: 'select-more-pets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/track-walk/track-walk.module#TrackWalkPageModule', name: 'TrackWalkPage', segment: 'track-walk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walk-feed/walk-feed.module#WalkFeedPageModule', name: 'WalkFeedPage', segment: 'walk-feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/videocall/videocall.module#VideocallPageModule', name: 'VideocallPage', segment: 'videocall', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walker/walker.module#WalkerPageModule', name: 'WalkerPage', segment: 'walker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walkerquestions/walkerquestions.module#WalkerquestionsPageModule', name: 'WalkerquestionsPage', segment: 'walkerquestions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walks/walks.module#WalksPageModule', name: 'WalksPage', segment: 'walks', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_40__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_41_ionic2_rating__["a" /* Ionic2RatingModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_walker_walker__["a" /* WalkerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_book_walk_book_walk__["a" /* BookWalkPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pet_pet__["a" /* PetPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_walk_feed_walk_feed__["a" /* WalkFeedPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_track_walk_track_walk__["a" /* TrackWalkPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_walks_walks__["a" /* WalksPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_notifications_pop_over_notifications_pop_over__["a" /* NotificationsPopOverPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_rate_walk_rate_walk__["a" /* RateWalkPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_editprofile_editprofile__["a" /* EditprofilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_pets_pets__["a" /* PetsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_notifications_alert_notifications_alert__["a" /* NotificationAlertPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_select_more_pets_select_more_pets__["a" /* SelectMorePetsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_video_player__["a" /* VideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_stripe__["a" /* Stripe */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_43__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_fire_fire__["a" /* FireProvider */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_46__providers_client_client__["a" /* ClientProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_social_sharing__["a" /* SocialSharing */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseConfig; });
/**
 * Development
 */
var API_URL = 'https://udogapp.tk/';
var firebaseConfig = {
    apiKey: "AIzaSyBgI_KhX2VYMgTTsJAJdlnLWdeD0Ce4DaQ",
    authDomain: "udog-eabc9.firebaseapp.com",
    databaseURL: "https://udog-eabc9.firebaseio.com",
    projectId: "udog-eabc9",
    storageBucket: "udog-eabc9.appspot.com",
    messagingSenderId: "556174911218"
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notifications_alert_notifications_alert__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(alertCtrl, modalCtrl, events, platform, statusBar, splashScreen, geolocation) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.geolocation = geolocation;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
            statusBar.styleDefault();
            splashScreen.hide();
            var geoOptions = {
                timeout: 10000,
            };
            _this.events.subscribe('requestToWalker', function (walkerData, reqData) {
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__pages_notifications_alert_notifications_alert__["a" /* NotificationAlertPage */], { walkerData: walkerData, reqData: reqData });
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
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_5__providers_config__["b" /* firebaseConfig */]);
    }
    MyApp.prototype.getLocation = function () {
        this.geolocation.getCurrentPosition()
            .then(function (position) {
            console.log(position);
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
            .catch(function (err) {
            alert('We could not get your current location');
            console.log(err);
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Notifications\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var API_URL = __WEBPACK_IMPORTED_MODULE_7__providers_config__["a" /* API_URL */];
var ApiServiceProvider = /** @class */ (function () {
    function ApiServiceProvider(http, plt) {
        this.http = http;
        this.plt = plt;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
    }
    ApiServiceProvider.prototype.getWalkers = function () {
        return this.get(this.getPath('active'));
    };
    ApiServiceProvider.prototype.setAuthorizationHeader = function () {
        var token = localStorage.getItem('token');
        if (this.headers.has('Authorization')) {
            this.headers.set('Authorization', 'Bearer ' + token);
        }
        else {
            this.headers.append('Authorization', 'Bearer ' + token);
        }
        return this.headers;
    };
    ApiServiceProvider.prototype.get = function (uri, collection) {
        // this.headers = this.setAuthorizationHeader();
        var _this = this;
        if (collection === void 0) { collection = true; }
        return this.http
            .get(uri, { headers: this.headers })
            .map(function (response) {
            return _this.getResponse(response, collection);
        })
            .catch(this.handleError);
    };
    ApiServiceProvider.prototype.post = function (uri, data, collection) {
        // this.headers = this.setAuthorizationHeader();
        var _this = this;
        if (collection === void 0) { collection = false; }
        return this.http.post(uri, data, { headers: this.headers })
            .map(function (response) {
            // return response.json()['data'];
            return _this.getResponse(response, collection);
        })
            .catch(this.handleError);
    };
    ApiServiceProvider.prototype.getResponse = function (response, collection) {
        var resp = response.json();
        if (!collection) {
            return resp;
        }
        return resp.map(function (resp) { return resp; });
    };
    ApiServiceProvider.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
    };
    ApiServiceProvider.prototype.getPath = function (uri) {
        return __WEBPACK_IMPORTED_MODULE_7__providers_config__["a" /* API_URL */] + uri;
    };
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the FireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FireProvider = /** @class */ (function () {
    function FireProvider(http, events) {
        this.http = http;
        this.events = events;
        console.log('Hello FireProvider Provider');
    }
    FireProvider.prototype.request = function (data, walker_id, uid) {
        return __awaiter(this, void 0, void 0, function () {
            var requestKey, request;
            return __generator(this, function (_a) {
                requestKey = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref().push().key;
                request = {};
                request['/requests/' + '101010' + '/' + requestKey] = data;
                request['/walk-requests/' + uid + '/' + requestKey] = data;
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref().update(request)];
            });
        });
    };
    FireProvider.prototype.createUser = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
                    .then(function (val) {
                    return val;
                })
                    .catch(function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    FireProvider.prototype.signIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailAndPassword(email, password)
                    .then(function (val) {
                    console.log(val);
                })
                    .catch(function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    FireProvider.prototype.requestToWalker = function (_id, client_id, walker_id, petsData) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                localStorage.setItem('setRequestID', JSON.stringify(_id));
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/requestToWalker')
                    .child(client_id).child(walker_id).push({
                    _id: _id,
                    client_id: client_id,
                    walker_id: walker_id,
                    pets: petsData,
                    msgText: 'Your dog walk request was received.',
                    msgTitle: 'Congratulations!',
                    status: 'pending'
                }).then(function (res) {
                    _this.requestNotification(client_id, walker_id);
                    //this.events.publish('displayNotification',client_id,walker_id);
                });
                return [2 /*return*/];
            });
        });
    };
    FireProvider.prototype.requestNotification = function (client_id, walker_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var ref;
            return __generator(this, function (_a) {
                ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/requestToWalker').child(client_id).child(walker_id);
                ref.on('value', function (snep) {
                    console.log('requestNotification', snep.val());
                    var allData = snep.val();
                    var metchReq;
                    for (var tmpkey in allData) {
                        //console.log('tmpkey',tmpkey);
                        if (allData[tmpkey]._id == JSON.parse(localStorage.getItem('setRequestID'))) {
                            metchReq = allData[tmpkey];
                        }
                    }
                    console.log('metchReq', metchReq);
                    //console.log('walkerID',metchReq.walker_id);
                    var firestore = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
                    firestore.collection('walkers').where('walker_id', '==', "" + metchReq.walker_id).get()
                        .then(function (snapshot) {
                        snapshot.forEach(function (doc) {
                            _this.events.publish('requestToWalker', doc.data(), metchReq);
                        });
                    }).catch(function (err) { return console.log(err); });
                });
                return [2 /*return*/];
            });
        });
    };
    FireProvider.prototype.getWalkerPosition = function (walker_id) {
        return new Promise(function (resolve) {
            var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/walkerCurrentPosition').child(walker_id);
            ref.once('value', function (snep) {
                //console.log('getWalkerPosition',snep.val());
                resolve(snep.val());
            });
        });
    };
    FireProvider.prototype.getAllWalkersPosition = function () {
        return new Promise(function (resolve) {
            var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/walkerCurrentPosition');
            ref.once('value', function (snep) {
                //console.log('getWalkerPosition',snep.val());
                resolve(snep.val());
            });
        });
    };
    FireProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], FireProvider);
    return FireProvider;
}());

//# sourceMappingURL=fire.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__walks_walks__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rate_walk_rate_walk__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__walks_walks__["a" /* WalksPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__profile_profile__["a" /* ProfilePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__rate_walk_rate_walk__["a" /* RateWalkPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/tabs/tabs.html"*/'<ion-tabs color="black" selectedIndex="1">\n	<ion-tab [root]="tab2Root" tabTitle="" tabIcon="ios-notifications-outline"></ion-tab>\n	<ion-tab [root]="tab1Root" tabTitle="" tabIcon="ios-home-outline"></ion-tab> \n	<ion-tab [root]="tab3Root" tabTitle="" tabIcon="ios-person-outline"></ion-tab>\n  \n  \n  <!--><ion-tab [root]="tab4Root" tabTitle="TrackWalk" tabIcon=""></ion-tab>-->\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_walk_book_walk__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CardPage = /** @class */ (function () {
    function CardPage(navCtrl, navParams, viewCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.stripeHandler = function (token) {
            console.log(token);
            var form = document.getElementById('payment-form');
            //this.viewCtrl.dismiss()
            //this.storage.set('token', token.id)
            //form.submit()
            localStorage.setItem('token', JSON.stringify(token.id));
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__book_walk_book_walk__["a" /* BookWalkPage */]);
        };
    }
    CardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardPage');
        this.stripeForm();
    };
    CardPage.prototype.stripeForm = function () {
        var _this = this;
        var stripe = Stripe('pk_test_4HfhcQqgPDUrWi93vINXEEhh');
        // Create an instance of Elements
        var elements = stripe.elements();
        // Custom styling can be passed to options when creating an Element.
        // (Note that this demo uses a wider set of styles than the guide below.)
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '18px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        // Create an instance of the card Element
        var card = elements.create('card', { style: style });
        // Add an instance of the card Element into the `card-element` <div>
        card.mount('#card-element');
        // Handle real-time validation errors from the card Element.
        card.addEventListener('change', function (event) {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
        var form = document.getElementById('payment-form');
        form.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
            var _a, token, error, errorElement;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        event.preventDefault();
                        return [4 /*yield*/, stripe.createToken(card)];
                    case 1:
                        _a = _b.sent(), token = _a.token, error = _a.error;
                        if (error) {
                            errorElement = document.getElementById('card-errors');
                            errorElement.textContent = error.message;
                        }
                        else {
                            // Send the token to your server
                            this.stripeHandler(token);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    CardPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/card/card.html"*/'<!--\n  Generated template for the CardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>card</ion-title>\n\n     <!--<ion-buttons end>\n\n    	<button ion-button (click)="close()"> SAVE</button>\n\n    </ion-buttons>-->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<form action= "" method="post" id="payment-form">\n		 <div class="form-row">\n		    <label for="card-element">\n		      Credit or debit card\n		    </label>\n		    <div id="card-element">\n		      <!-- a Stripe Element will be inserted here. -->\n		    </div>\n\n		    <!-- Used to display form errors -->\n		    <div id="card-errors" role="alert"></div>\n		</div>\n		<button ion-button color="primary" block round>Submit Payment</button>\n	</form>\n\n  \n\n  <p> Note you\'ll only be charged after the service is completed </p>\n\n	<script src="https://unpkg.com/card@2.3.0/dist/card.js"></script>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/card/card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookWalkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fire_fire__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__track_walk_track_walk__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__address_address__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firebase_firestore__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_config__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var API_URL = __WEBPACK_IMPORTED_MODULE_9__providers_config__["a" /* API_URL */];
var BookWalkPage = /** @class */ (function () {
    function BookWalkPage(navCtrl, navParams, alertCtrl, fire, ngZone, storage, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.ngZone = ngZone;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.time = 'thirty';
        this.client = {};
        this.pet = [];
        this.info = '';
        this.pickUp = '';
        this.dropOff = '';
        this.receiverName = '';
        this.receiverPhone = '';
        this.pickUpTime = '';
        this.isButtonHide = false;
        this.isPetsChecked = [];
        this.card = {};
        this.numberofDogs = [
            {
                id: 1,
                time: 30,
                cost: 20
            },
            {
                id: 2,
                time: 60,
                cost: 28
            },
            {
                id: 3,
                time: 30,
                cost: 25
            }
        ];
        this.events.subscribe('address:current', function (address) {
            console.log(address);
            _this.pickUp = address;
        });
    }
    BookWalkPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BookWalkPage');
        console.log(this.client);
        this.events.subscribe('walker:selected', function (walker) {
            _this.walker = walker;
            console.log(walker);
        });
    };
    BookWalkPage.prototype.ionViewDidEnter = function () {
        this.fetchPets();
        this.fetchCard();
    };
    BookWalkPage.prototype.fetchCard = function () {
        this.token = JSON.parse(localStorage.getItem('token'));
    };
    BookWalkPage.prototype.fetchPets = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.allPets = JSON.parse(localStorage.getItem('pets'));
            console.log('this.allPets1', _this.allPets);
            _this.allPets.sort(function (a, b) {
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
            console.log('this.allPets2', _this.allPets);
            if (_this.allPets.length >= 2) {
                for (var i = 0; i < 2; i++) {
                    _this.pet.push(_this.allPets[i]);
                    _this.isPetsChecked.push(_this.allPets[i]);
                }
                for (var i = 0; i < _this.numberofDogs.length; i++) {
                    if (_this.numberofDogs[i].id == 3) {
                        _this.numberofDogs[i].isEnable = true;
                        _this.numberofDogs[i].isDisabled = false;
                    }
                    else {
                        _this.numberofDogs[i].isEnable = false;
                        _this.numberofDogs[i].isDisabled = true;
                    }
                }
                console.log('if this.numberofDogs', _this.numberofDogs);
            }
            else {
                _this.pet.push(_this.allPets[0]);
                _this.isPetsChecked.push(_this.allPets[0]);
                for (var i = 0; i < _this.numberofDogs.length; i++) {
                    if (_this.numberofDogs[i].id == 1 || _this.numberofDogs[i].id == 2) {
                        if (_this.numberofDogs[i].id == 1) {
                            _this.numberofDogs[i].isEnable = true;
                        }
                        else {
                            _this.numberofDogs[i].isEnable = false;
                        }
                        _this.numberofDogs[i].isDisabled = false;
                    }
                    else {
                        _this.numberofDogs[i].isEnable = false;
                        _this.numberofDogs[i].isDisabled = true;
                    }
                }
                console.log('else this.numberofDogs', _this.numberofDogs);
            }
            console.log('this.pet', _this.pet);
            localStorage.setItem('selectedPets', JSON.stringify(_this.pet));
            console.log('isPetsChecked', _this.isPetsChecked);
        });
    };
    BookWalkPage.prototype.selectPets = function (item) {
        var _this = this;
        this.ngZone.run(function () {
            console.log('selectPets', item);
            if (item.isSelect) {
                item.isSelect = true;
                _this.isPetsChecked.push(item);
            }
            else {
                item.isSelect = false;
                var index = _this.isPetsChecked.findIndex(function (x) { return x._id == item._id; });
                if (index !== -1) {
                    _this.isPetsChecked.splice(index, 1);
                }
            }
            if (_this.isPetsChecked.length == 2) {
                console.log('selectPets2', _this.isPetsChecked);
                for (var i = 0; i < _this.numberofDogs.length; i++) {
                    if (_this.numberofDogs[i].id == 3) {
                        _this.numberofDogs[i].isEnable = true;
                        _this.numberofDogs[i].isDisabled = false;
                    }
                    else {
                        _this.numberofDogs[i].isEnable = false;
                        _this.numberofDogs[i].isDisabled = true;
                    }
                }
            }
            else if (_this.isPetsChecked.length == 1) {
                console.log('selectPets1', _this.isPetsChecked);
                for (var i = 0; i < _this.numberofDogs.length; i++) {
                    if (_this.numberofDogs[i].id == 1 || _this.numberofDogs[i].id == 2) {
                        if (_this.numberofDogs[i].id == 1) {
                            _this.numberofDogs[i].isEnable = true;
                        }
                        else {
                            _this.numberofDogs[i].isEnable = false;
                        }
                        _this.numberofDogs[i].isDisabled = false;
                    }
                    else {
                        _this.numberofDogs[i].isEnable = false;
                        _this.numberofDogs[i].isDisabled = true;
                    }
                }
            }
            else {
                console.log('selectPets0', _this.isPetsChecked);
                var alert_1 = _this.alertCtrl.create({
                    subTitle: 'Please select at least one pet.',
                    buttons: [
                        {
                            text: 'ok',
                            handler: function () {
                                _this.pet = JSON.parse(localStorage.getItem('selectedPets'));
                                _this.isPetsChecked = JSON.parse(localStorage.getItem('selectedPets'));
                                for (var i = 0; i < _this.numberofDogs.length; i++) {
                                    if (_this.numberofDogs[i].id == 3) {
                                        _this.numberofDogs[i].isEnable = true;
                                        _this.numberofDogs[i].isDisabled = false;
                                    }
                                    else {
                                        _this.numberofDogs[i].isEnable = false;
                                        _this.numberofDogs[i].isDisabled = true;
                                    }
                                }
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
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
    BookWalkPage.prototype.ngOnInit = function () {
        this.client = JSON.parse(localStorage.getItem('client'));
        this.walker = JSON.parse(localStorage.getItem('selectedWalker'));
        this.pickUp = localStorage.getItem('address');
    };
    BookWalkPage.prototype.book = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var requestData, uid, walker_id;
            return __generator(this, function (_a) {
                requestData = {
                    pet: this.pet,
                    duraton: this.duration,
                    info: this.info,
                    dropOff: this.dropOff,
                    pickUp: this.pickUp,
                    accepted: false,
                };
                uid = this.client.client_id;
                walker_id = this.walker.walker_id;
                this.storage.get('client')
                    .then(function (client) {
                    _this.storage.get('phone')
                        .then(function (phone) {
                        _this.phone = phone;
                        console.log(_this.phone);
                        if (phone) {
                            if (client) {
                                console.log(client.client_id);
                                _this.saveToFirestore();
                            }
                        }
                    });
                })
                    .catch(function (err) {
                    alert('Error');
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    BookWalkPage.prototype.saveToFirestore = function () {
        var _this = this;
        console.log('saveToFirestore isPetsChecked', this.isPetsChecked);
        console.log('saveToFirestore this.numberofDogs', this.numberofDogs);
        for (var i = 0; i < this.numberofDogs.length; i++) {
            if (this.numberofDogs[i].isEnable == true) {
                this.duration = this.numberofDogs[i];
            }
        }
        console.log('saveToFirestore duration', this.duration);
        var _id = Date.now();
        var firestore = __WEBPACK_IMPORTED_MODULE_7_firebase__["firestore"]();
        var walk = {
            id: "" + _id,
            client_id: this.client.client_id,
            walker_id: this.walker.walker_id,
            phone: this.client.phone,
            pet: this.isPetsChecked,
            info: this.info,
            dropOff: this.dropOff,
            pickUp: this.pickUp,
            duration: this.duration,
            accepted: false,
            pending: true,
            time: this.pickUpTime,
            walker: this.walker,
            receiver: this.receiverName,
            token: this.token
        };
        firestore.collection('walks').doc("" + _id).set({
            id: "" + _id,
            client_id: this.client.client_id,
            walker_id: this.walker.walker_id,
            phone: this.client.phone,
            pet: this.isPetsChecked,
            info: this.info,
            dropOff: this.dropOff,
            pickUp: this.pickUp,
            duration: this.duration,
            accepted: false,
            pending: true,
            time: this.pickUpTime,
            walker: this.walker,
            receiver: this.receiverName,
            token: this.token
        })
            .then(function (docRef) {
            console.log("doc written with");
            __WEBPACK_IMPORTED_MODULE_7_firebase__["firestore"]().collection('walks').doc("" + _id)
                .get()
                .then(function (doc) {
                if (doc.exists) {
                    //this.storage.set('request', doc.data())
                    console.log('_id', _id);
                    _this.fire.requestToWalker(_id, _this.client.client_id, _this.walker.walker_id, _this.isPetsChecked);
                    localStorage.setItem('request', JSON.stringify(walk));
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__track_walk_track_walk__["a" /* TrackWalkPage */]);
                    localStorage.removeItem('token');
                }
                else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
                .catch(function (err) { return console.log(err); });
            _this.events.publish('walk:booking');
        })
            .catch(function (err) { return console.log(err); });
    };
    BookWalkPage.prototype.payment = function () {
        //if (this.card === null) {
        var cardModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__card_card__["a" /* CardPage */]);
        cardModal.present();
        //}
    };
    BookWalkPage.prototype.durationSelect = function (val) {
        console.log('durationSelect', val);
        for (var i = 0; i < this.numberofDogs.length; i++) {
            if (this.numberofDogs[i].id == val.id) {
                this.numberofDogs[i].isEnable = true;
            }
            else {
                this.numberofDogs[i].isEnable = false;
            }
        }
    };
    BookWalkPage.prototype.locationSelect = function (val) {
        if (val === 'same') {
            this.dropOff = this.pickUp;
        }
        else {
            this.dropOff = this.dropOff;
        }
    };
    BookWalkPage.prototype.changeAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__address_address__["a" /* AddressPage */]);
    };
    BookWalkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-book-walk',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/book-walk/book-walk.html"*/'<!--\n  Generated template for the BookWalkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BookWalk</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n	<ion-item-divider color="yellow">\n		<p text-center> SET LOCATION</p>\n	</ion-item-divider>\n\n		\n	\n	<div class="picture-container">\n			<ion-row padding>\n	<div class="bookwalk-profile-pic">\n		<!--<img src="https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8" class="profile1-image" />-->\n		<img [src]="walker?.pic" class="profile1-image" />\n	</div>\n\n    <div class="bookwalk-pet-pic">\n		<!--<img src="assets/imgs/snowball.png" class="pet-image" [ngStyle]="{\'align-self\': \'center\'}"/>-->\n		<ion-row>\n			<ion-col *ngFor="let item of pet">\n				<img [src]="item?.pic" class="pet-image" [ngStyle]="{\'align-self\': \'center\'}"/>\n				<p>{{item.name}}</p>\n				<ion-checkbox [(ngModel)]="item.isSelect" (ionChange)="selectPets(item)"></ion-checkbox>\n			</ion-col>\n		</ion-row> \n		<!-- <button *ngIf="isButtonHide" ion-button icon-only (click)="addMorePets()"><ion-icon name="add"></ion-icon></button> -->\n	</div>\n\n</ion-row>\n\n</div> \n\n	<!--\n\n	<ion-row [ngSwitch]="time">\n\n		<div *ngSwitchCase="\'thirty\'">\n			<p text-center>\n				<ion-label> {{ walker?.name }} will walk </ion-label>\n				<ion-label> {{ pet?.name }} </ion-label>\n				<br/>\n				<ion-label> for 30 mins at $15 Right Now! </ion-label>\n			</p>\n		</div>\n		<div *ngSwitchCase="\'sixty\'" text-center>\n			<p text-center>\n				<ion-label> {{ walker?.name }} will walk </ion-label>\n				<ion-label> {{ pet?.name }} </ion-label>\n				<br/>\n				<ion-label> for 60 mins at $25 Right now </ion-label>\n			</p>\n		</div>\n\n	</ion-row>\n\n	<ion-row> \n\n		<ion-item>\n			<ion-label> Time </ion-label>\n			<ion-datetime displayFormat="HH:mm" [(ngModel)]="pickUpTime">\n			</ion-datetime>\n		</ion-item>\n\n	</ion-row>\n\n	<div padding>\n		 <ion-segment [(ngModel)]="time">\n    		<ion-segment-button value="thirty">30 mins</ion-segment-button>\n    		<ion-segment-button value="sixty">60 mins</ion-segment-button>\n  		</ion-segment>\n	</div>\n-->\n\n	<ion-item-divider color="yellow">\n		<p text-center> ADD TIME</p>\n	</ion-item-divider>\n\n	<ion-row radio-group [(ngModel)]="time" >\n\n		\n			<ion-item *ngFor="let item of numberofDogs">\n					<ion-label color="dark"><ng-container *ngIf="item.id == \'3\'">2 Dogs </ng-container>{{item.time}} Minutes ${{item.cost}} {{item.isEnable}}</ion-label>\n					<ion-radio [value]="item.isEnable" name="redioButtons" [checked]="item.isEnable" [disabled]="item.isDisabled" (ionSelect)="durationSelect(item)"></ion-radio>\n				</ion-item>\n\n	</ion-row>\n\n	<ion-row>\n\n		<ion-row padding>\n			<ion-label style="font-weight: bold;"> Pick-Up Location </ion-label>\n		</ion-row>\n		<ion-item>\n			<ion-input type="text" [(ngModel)]="pickUp"></ion-input><ion-icon name="navigate" item-right></ion-icon>\n		</ion-item>\n		<ion-row>\n			<ion-col col-3 offset-4>\n			<button ion-button color="primary" clear style="align-self: center;" (click)="changeAddress()"> Add Unit Number<p style="color: red">*</p></button>\n		</ion-col>\n		</ion-row>\n\n	</ion-row>\n\n\n		<ion-row padding>\n\n			<ion-label style="font-weight: bold;"> Drop-Off Location</ion-label>\n\n		</ion-row>\n\n		<ion-row radio-group [(ngModel)]="same">\n	 		<ion-col col-6>\n	 			<ion-item no-lines>\n	 				<ion-radio value="same" (ionSelect)="locationSelect(\'same\')"></ion-radio><ion-label> Same</ion-label>\n	 			</ion-item>\n	 		</ion-col>\n	 		<ion-col col-6>\n	 			<ion-item no-lines>\n	 				<ion-radio value="other" (ionSelect)="locationSelect(\'other\')"></ion-radio><ion-label> Other </ion-label>\n	 			</ion-item>\n	 		</ion-col>\n		</ion-row>\n\n		<ion-row>\n\n			<ion-item *ngIf="same == \'other\'">\n				<!--<ion-label floating> Drop-Off Location </ion-label>-->\n				<ion-input type="text" [(ngModel)]="dropOff" value="" ></ion-input><ion-icon name="navigate" item-right>\n				</ion-icon>\n			</ion-item>\n		</ion-row>\n\n		<ion-row>\n				<ion-col col-3 offset-3>\n				<button ion-button color="primary" clear style="align-self: center;" (click)="changeAddress()"> Add Unit Number<p style="color: red">*</p></button>\n			</ion-col>\n		</ion-row>\n\n\n\n	<ion-row>\n		<ion-row padding>\n			<ion-label style="font-weight: bold;"> Instructions of Walk </ion-label>\n		</ion-row>\n\n		<ion-item>\n			<ion-input [(ngModel)]="info" type="text" placeholder="(passcode, keycode, leash, doorman)"> </ion-input>\n\n		</ion-item>\n\n	</ion-row>\n\n\n	<ion-row>\n		<ion-row padding>\n			<ion-label style="font-weight: bold;"> Reciever\'s Name </ion-label>\n		</ion-row>\n		<ion-item>\n			<ion-input [(ngModel)]="receiverName" type="text" placeholder="(please add name if address drop-off change)"></ion-input>\n		</ion-item>\n	</ion-row>\n\n\n	<!--\n	<ion-row>\n\n		<ion-item>\n\n			<ion-label floating> Receiver\'s phone number </ion-label>\n			<ion-input [(ngModel)]="receiverPhone" type="text"></ion-input>\n\n		</ion-item>\n\n	</ion-row>\n-->\n\n	<ion-row>	\n			<button ion-button color="orange" block (click)="saveToFirestore()"> Continue </button>\n	</ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/book-walk/book-walk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_fire_fire__["a" /* FireProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], BookWalkPage);
    return BookWalkPage;
}());

//# sourceMappingURL=book-walk.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__firebase_firestore__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_card__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the PetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PetPage = /** @class */ (function () {
    function PetPage(navCtrl, navParams, camera, platform, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.platform = platform;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.breeds = ['BULLDOG', 'BEAGLE', 'POODLE', 'LABRADOR RETRIEVER', 'GERMAN SHEPHERD', 'ENGLISH MASTIFF', 'SIBERIAN HUSKY',
            'GOLDEN RETRIEVER', 'BOXER', 'BULLDOG', 'BEAGLE', 'POODLE',
            'LABRADOR RETRIEVER', 'GERMAN SHEPHERD', 'ENGLISH MASTIFF', 'SIBERIAN HUSKY', 'GOLDEN RETRIEVER', 'BOXER', 'AUSTRALIAN SHEPHERD', 'YORKSHIRE TERRIER',
            'OLD ENGLISH SHEEPDOG', 'BULL TERRIER', 'ROTTWEILER', 'GREAT DANE', 'POINTER', 'CHIHUAHUA', 'DACHSHUND',
            'GREYHOUND', 'AUSTRALIAN CATTLE DOG', 'SHIH TZU', 'PUG', 'CAVALIER KING', 'AKITA', 'BOSTON TERRIER',
            'BICHON FRISE', 'ALASKAN MALAMUTE', 'BASSET HOUND', 'DEBERMAN', 'FRENCH BULLDOG', 'POMERANIAN',
            'BODER COLLIE', 'MALTESE', 'JACK RUSSELL', 'BASENJI', 'SHETLAND', 'SCHNAUZER', 'HAVANESE', 'BULL TERRIER', 'CHOW CHOW',
            'ST. BERNARD', 'AFGHAN HOUND', 'LHASA APSO', 'ENGLISH SPRINGER SPANIEL', 'PAPILLON', 'WEST WHITE TERRIER', 'AIRDALE TERRIER',
            'GERMAN SHORTHAIRED', 'PEMBROKE WELSH', 'A MIX OF TWO BREEDSYORKSHIRE TERRIER', 'OTHER'];
        this.pic = 'https://images.unsplash.com/photo-1421098518790-5a14be02b243?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ff70edd02988d22f0e70a4683bd4f133&auto=format&fit=crop&w=1778&q=80';
        this.name = '';
        this.age = '';
        this.color = '';
        this.vaccination = '';
        this.size = '';
        this.aggressive = '';
        this.social = '';
        this.petInfo = '';
    }
    PetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PetPage');
    };
    PetPage.prototype.ionViewDidEnter = function () {
        this.client = JSON.parse(localStorage.getItem('client'));
    };
    PetPage.prototype.vaccinationChange = function (vaccination) {
        var _this = this;
        if (vaccination == 'NO') {
            var alert_1 = this.alertCtrl.create({
                subTitle: 'We apologize, please come back when all vaccinations are up to date',
                buttons: [
                    {
                        text: 'ok',
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    PetPage.prototype.save = function () {
        var _this = this;
        var pet = {
            name: this.name,
            pic: this.pic,
            age: this.age,
            breed: this.breed,
            color: this.color,
            vaccination: this.vaccination,
            size: this.size,
            aggressive: this.aggressive,
            social: this.social,
            petInfo: this.petInfo,
            _id: Date.now(),
            timestamp: new Date(),
            isSelect: true
        };
        if (this.client) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').doc("" + this.client.client_id).collection('pets').add(pet)
                .then(function () {
                _this.additionalPetPrompt();
            }).catch(function (err) { return console.log(err); });
        }
    };
    PetPage.prototype.picChosen = function (event) {
        var _this = this;
        var _id = (Date.now()).toString();
        var imageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref().child(_id);
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            var pic = reader.result;
            imageRef.putString(pic, 'data_url')
                .then(function (snap) {
                //this.pic = snap.downloadURL
                _this.pic = reader.result;
                console.log('picChosen', _this.pic);
            })
                .catch(function (err) { return console.log(err); });
        };
        reader.readAsDataURL(file);
    };
    PetPage.prototype.additionalPetPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            message: 'Do you have an additional pet that needs to be walked',
            buttons: [
                {
                    text: 'NO',
                    handler: function (data) {
                        __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().collection('users').doc("" + _this.client.client_id).collection('pets')
                            .get()
                            .then(function (snap) {
                            var pets = [];
                            snap.forEach(function (doc) {
                                pets.push(doc.data());
                                localStorage.setItem('pets', JSON.stringify(pets));
                            });
                            console.log('pets', pets);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__card_card__["a" /* CardPage */]);
                        })
                            .catch(function (err) { return console.log(err); });
                    }
                },
                {
                    text: 'YES',
                    handler: function (data) {
                        _this.breed = '';
                        _this.name = '';
                        _this.age = '';
                        _this.color = '';
                        _this.vaccination = '';
                        _this.size = '';
                        _this.aggressive = '';
                        _this.social = '';
                        _this.petInfo = '';
                    }
                }
            ]
        });
        prompt.present();
    };
    PetPage.prototype.choosePic = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        };
        this.platform.ready().then(function () {
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                var base64Image = 'data:image/jpeg;base64,' + imageData;
            }, function (err) {
                // Handle error
                console.log(err);
                alert(err);
            });
        })
            .catch(function (err) { return alert(err); });
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
    };
    PetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pet',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/pet/pet.html"*/'<!--\n  Generated template for the PetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pet</ion-title>\n\n    <!--<ion-buttons end>\n\n    	<button ion-button (click)="save()"> SAVE</button>\n\n    </ion-buttons>-->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-row>\n\n		<ion-col col-4 offset-4>\n\n			<div>\n				<label for="image_upload"> \n					<img [src]="pic"  class="pet-pic"/>\n				</label>\n				<input name="image_upload" type="file" id="image_upload" style="display: none;" (change)="picChosen($event)">\n				<!--<img [src]="pic" width="90px" class="pet-pic" (click)="choosePic()"/>-->\n			</div>\n\n		</ion-col>\n\n	</ion-row>\n\n	<ion-row>\n\n		<ion-col col-4>\n\n			<label> Name </label>\n\n		</ion-col>\n\n		<ion-col col-8>\n\n			<input type="text" name="" [(ngModel)]="name">\n\n		</ion-col>\n\n	</ion-row>\n\n	<ion-row>\n			<ion-col col-4><ion-label> Breed </ion-label></ion-col>\n			<ion-col col-8>\n				<ion-select [(ngModel)]="breed">\n\n					<ion-option *ngFor="let breed of breeds" [value]="breed">{{breed}}</ion-option>\n\n				</ion-select>\n			</ion-col>\n	</ion-row>\n\n\n	<ion-row>\n\n			<ion-col col-4><ion-label> Age </ion-label></ion-col>\n			<ion-col col-8><ion-select [(ngModel)]="age">\n\n				<ion-option value="<3"> 0 - 3 years old </ion-option>\n				<ion-option value="<6"> 3 - 6 years old </ion-option>\n				<ion-option value="<15"> 10 - 15 years old </ion-option>\n\n			</ion-select></ion-col>\n\n	</ion-row>\n\n	<ion-row>\n\n			<ion-col col-4><ion-label> Color </ion-label></ion-col>\n			<ion-col col-8><ion-select [(ngModel)]="color">\n\n				<ion-option value="brown"> Brown </ion-option>\n				<ion-option value="black"> Black </ion-option>\n				<ion-option value="gray"> Gray </ion-option>\n				<ion-option value="white"> White </ion-option>\n				<ion-option value="other" > Other </ion-option>\n\n			</ion-select></ion-col>\n\n	</ion-row>\n\n\n	<ion-row>\n\n			<ion-col col-4><ion-label> Vaccination ontime </ion-label></ion-col>\n			<ion-col col-8><ion-select (ionChange)="vaccinationChange(vaccination)" [(ngModel)]="vaccination">\n\n				<ion-option value="YES"> Yes </ion-option>\n				<ion-option value="NO"> No </ion-option>\n\n			</ion-select></ion-col>\n\n	</ion-row>\n\n\n	<ion-row>\n\n			<ion-col col-4><ion-label> Dog Size </ion-label></ion-col>\n			<ion-col col-8><ion-select [(ngModel)]="size">\n\n				<ion-option value="l"> Large </ion-option>\n				<ion-option value="m"> Medium </ion-option>\n				<ion-option value="s"> Small </ion-option>\n\n			</ion-select></ion-col>\n\n	</ion-row>\n\n\n	<ion-row>\n\n			<ion-col col-4><ion-label> Aggressive </ion-label></ion-col>\n			<ion-col col-8><ion-select [(ngModel)]="aggressive">\n\n				<ion-option value="YES"> YES </ion-option>\n				<ion-option value="NO"> NO </ion-option>\n\n			</ion-select></ion-col>\n\n	</ion-row>\n\n\n\n	<ion-row>\n\n			<ion-col col-4><ion-label> Social </ion-label></ion-col>\n			<ion-col col-8><ion-select [(ngModel)]="social">\n\n				<ion-option value="YES"> YES </ion-option>\n				<ion-option value="NO"> NO </ion-option>\n\n			</ion-select></ion-col>\n\n	</ion-row>\n\n\n	<ion-row>\n\n		<ion-col col-4>\n\n			<label> About the dog </label>\n\n		</ion-col>\n\n		<ion-col col-8>\n\n			<input type="text" name="" [(ngModel)]="petInfo" />\n\n		</ion-col>\n\n	</ion-row>\n\n\n	<ion-row>	\n			<button ion-button color="orange" block (click)="save()"> Continue </button>\n	</ion-row>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/pet/pet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PetPage);
    return PetPage;
}());

//# sourceMappingURL=pet.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fire_fire__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_firestore__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__verify_verify__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var API_URL = __WEBPACK_IMPORTED_MODULE_7__providers_config__["a" /* API_URL */];
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    //const url : "https://6ac3f451.ngrok.io"
    function SignUpPage(navCtrl, navParams, storage, fire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.fire = fire;
        this.startPage = navParams.get('startPage');
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    /*async create(){
  
      let _id = (Date.now()).toString()
  
      this.fire.createUser(email,password)
        .then(() => {
  
          let client = {
            name : this.name,
            phone : this.phone,
            email : this.email,
            client_id : _id
          }
  
           
  
           
  
          /*axios.post(API_URL+'clients', {
              email : this.email,
              name : this.name,
              phone : this.phone,
          })
          .then((res) => {
              let client_id = res.data.client_id
              console.log(client_id)
              let client = {
                  name : this.name,
                  email : this.email,
                  phone : this.phone,
                  client_id : client_id,
              }
            this.storage.set('client', client)
            this.storage.set('phone', this.phone)
            this.navCtrl.popTo(BookWalkPage)
          })
        })
        .catch((err) => {
          alert('We could not sign you up')
          console.log(err)
        })
      
    }*/
    SignUpPage.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(API_URL + 'login', {
            phone: this.phone
        })
            .then(function (res) {
            _this.storage.set('phone', _this.phone);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__verify_verify__["a" /* VerifyPage */], { startPage: _this.startPage });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/sign-up/sign-up.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<ion-row>\n		<img src="assets/imgs/icon.png" height="250" [ngStyle]="{\'margin\': \'auto\'}"/>\n	</ion-row>\n\n	<!--\n	<ion-row>\n		<ion-item>\n			<ion-label floating>Name <ion-icon name="person"></ion-icon></ion-label>\n    		<ion-input type="text" [(ngModel)]="name"></ion-input>\n		</ion-item>\n	</ion-row>\n-->\n\n	<ion-row>\n\n		<ion-item>\n\n			<ion-label floating>Phone <ion-icon name="call"></ion-icon></ion-label>\n    		<ion-input type="text" [(ngModel)]="phone"></ion-input>\n\n		</ion-item>\n\n	</ion-row>\n\n	<!--\n	<ion-row>\n		<ion-item>\n			<ion-label floating>Password <ion-icon name="key"></ion-icon></ion-label>\n    		<ion-input type="password" [(ngModel)]="password"></ion-input>\n		</ion-item>\n	</ion-row>\n-->\n\n		<br/>\n		<br/>\n	<ion-row>\n		<button ion-button color="orange" block round (click)="login()"> Continue </button>\n	</ion-row>\n	<br/><br/>\n\n	<!--\n	<p text-center><span class="gray">Already Have an Account?</span> <span (click)="login()">Log In</span></p>\n-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_fire_fire__["a" /* FireProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__track_walk_track_walk__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_report__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sign_up_sign_up__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_firestore__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_client_client__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var API_URL = __WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* API_URL */];
/**
 * Generated class for the WalksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalksPage = /** @class */ (function () {
    function WalksPage(navCtrl, navParams, modalCtrl, storage, client_provider, events, platform) {
        //console.log(this.client_provider.client.client_id)
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.client_provider = client_provider;
        this.events = events;
        this.platform = platform;
        this.pendingWalks = [];
        this.completedWalks = [];
        this.client_id = '8564b56e-fbbc-11e7-b062-dbaa40bb4ff2';
        //this.loadData()
        /*this.events.subscribe('client:in', () => {
          console.log('new_event')
          //this.loadData()
          location.reload()
        })
    
        this.events.subscribe('walk:booking', () => {
          this.navCtrl.setRoot(TrackWalkPage)
          //this.loadData()
          location.reload()
        })*/
    }
    WalksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalksPage');
    };
    WalksPage.prototype.ionViewDidEnter = function () {
        // this.client = JSON.parse(localStorage.getItem('client'))
        // this.pastWalks()
        // this.notificationsFire()
        this.client = JSON.parse(localStorage.getItem('client'));
        if (this.client) {
            if (this.client.pic != null) {
                //this.client.pic = 'https://images.unsplash.com/photo-1508554291109-58244036f52e?auto=format&fit=crop&w=934&q=8'
                this.pastWalks();
                this.notificationsFire();
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__sign_up_sign_up__["a" /* SignUpPage */], { startPage: 'walks' });
        }
    };
    WalksPage.prototype.ngOnInit = function () {
        //this.fetchActiveWalks()
        //this.loadData()
    };
    WalksPage.prototype.loadData = function () {
        var _this = this;
        this.platform.ready()
            .then(function () {
            _this.storage.get('client')
                .then(function (val) {
                _this.client = val;
                console.log(_this.client);
                _this.client_id = val.client_id;
                console.log(_this.client_id);
                //this.fetchActiveWalks()
                //this.fetchCompletedWalks()
                _this.notificationsFire();
                _this.pastWalks();
            })
                .catch(function (err) { return console.log(err); });
        })
            .catch(function (err) { return console.log(err); });
    };
    WalksPage.prototype.notificationsFire = function () {
        var _this = this;
        var firestore = __WEBPACK_IMPORTED_MODULE_7_firebase__["firestore"]();
        firestore.collection('walks').where('client_id', '==', "" + this.client.client_id).where('pending', '==', true)
            .get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                console.log(doc.id);
                console.log(doc.data());
                _this.pendingWalks.push(doc.data());
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    WalksPage.prototype.fetchActiveWalks = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(API_URL + ("walks?client_id=" + this.client.client_id)) //walker_id
            .then(function (res) {
            _this.pendingWalks = res.data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    WalksPage.prototype.fetchCompletedWalks = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get(API_URL + ("completed_walks?client_id=" + this.client.client_id)) //walker_id
            .then(function (res) {
            _this.completedWalks = res.data;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    WalksPage.prototype.pastWalks = function () {
        var _this = this;
        var firestore = __WEBPACK_IMPORTED_MODULE_7_firebase__["firestore"]();
        firestore.collection('walks').where('client_id', '==', "" + this.client.client_id).where('pending', '==', false)
            .get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                console.log(doc.id);
                console.log(doc.data());
                _this.completedWalks.push(doc.data());
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    WalksPage.prototype.review = function (walk) {
        //this.storage.set('walk', walk)
        localStorage.setItem('walk', JSON.stringify(walk));
        console.log(walk);
        var reviewModal = this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__report_report__["a" /* ReportPage */]);
        //reviewModal.present()
    };
    WalksPage.prototype.track = function (event, request) {
        event.stopPropagation();
        //this.storage.set('request', request)
        localStorage.setItem('request', JSON.stringify(request));
        var trackWalkModal = this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__track_walk_track_walk__["a" /* TrackWalkPage */]);
        //trackWalkModal.present()
    };
    WalksPage.prototype.ionViewDidLeave = function () {
        this.pendingWalks = [];
        this.completedWalks = [];
    };
    WalksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-walks',template:/*ion-inline-start:"/Users/Oluchi/udog-client/src/pages/walks/walks.html"*/'<!--\n  Generated template for the WalksPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>walks</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n\n		<ion-item-group>\n			<ion-item-divider color=\'light\'> Active & Pending Walks </ion-item-divider>\n				<ion-item *ngFor="let walk of pendingWalks" (click)="openRequest(notif)">\n					 <ion-avatar item-start>\n		      			<img [src]="walk?.pet.pic">\n		    		</ion-avatar>\n					<p>{{ walk?.time }}</p>\n					<p>{{ walk?.pickUp }}</p>\n					<button item-content ion-button round color="danger" item-end (click)="track($event, walk)"> TRACK </button>\n				</ion-item>\n				<ion-item-options side="right">\n\n		    	</ion-item-options>\n	    </ion-item-group>\n\n\n	    <ion-item-group>\n			<ion-item-divider color=\'light\'> Past Walks </ion-item-divider>\n				<ion-item *ngFor="let walk of completedWalks" (click)="review(walk)">\n					 <ion-avatar item-start>\n		      			<img [src]="walk?.pet.pic">\n		    		</ion-avatar>\n					<p>{{ walk?.time }}</p>\n					<p>{{ walk?.pickUp }}</p>\n					<!--<button item-content ion-button round color="danger" item-end (click)="walkIntention($event)"> TRACK </button>-->\n				</ion-item>\n				<ion-item-options side="right">\n\n		    	</ion-item-options>\n	    </ion-item-group>\n	\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Oluchi/udog-client/src/pages/walks/walks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__providers_client_client__["a" /* ClientProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], WalksPage);
    return WalksPage;
}());

//# sourceMappingURL=walks.js.map

/***/ })

},[364]);
//# sourceMappingURL=main.js.map