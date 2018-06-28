webpackJsonp([3],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsAlertPageModule", function() { return NotificationsAlertPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_alert__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsAlertPageModule = /** @class */ (function () {
    function NotificationsAlertPageModule() {
    }
    NotificationsAlertPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifications_alert__["a" /* NotificationAlertPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications_alert__["a" /* NotificationAlertPage */]),
            ],
        })
    ], NotificationsAlertPageModule);
    return NotificationsAlertPageModule;
}());

//# sourceMappingURL=notifications-alert.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationAlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-notifications-alert',template:/*ion-inline-start:"/Users/skirosoft/Documents/IONIC/UDOG/udog-ionic-client-new/src/pages/notifications-alert/notifications-alert.html"*/'<!--\n  Generated template for the NotificationAlertPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="notification-popup" *ngIf="reqData">\n    <h2 *ngIf="reqData.msgTitle">{{reqData.msgTitle}}</h2>\n  \n    <img *ngIf="walkerData" src="{{walkerData.pic}}">\n  \n    <div class="bookwalk-pet-pic" *ngIf="pets">\n      <ng-container *ngFor="let item of pets">\n        <img [src]="item?.pic" class="pet-image" [ngStyle]="{\'align-self\': \'center\'}"/>\n      </ng-container>\n    </div>\n  \n    <div class="poup-btn-wrap" (click)="dismiss()">\n      <img class="tick-img" src="assets/imgs/greencheck.svg">\n    </div>\n  \n    <!-- <ion-buttons start>\n      <button ion-button (click)="dismiss()"></button>\n    </ion-buttons> -->\n    <div class="popup-content" *ngIf="reqData.msgText">\n      <p>{{reqData.msgText}}</p>	\n    </div>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/skirosoft/Documents/IONIC/UDOG/udog-ionic-client-new/src/pages/notifications-alert/notifications-alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], NotificationAlertPage);
    return NotificationAlertPage;
}());

//# sourceMappingURL=notifications-alert.js.map

/***/ })

});
//# sourceMappingURL=3.js.map