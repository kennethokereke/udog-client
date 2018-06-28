webpackJsonp([2],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMorePetsPageModule", function() { return SelectMorePetsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_more_pets__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectMorePetsPageModule = /** @class */ (function () {
    function SelectMorePetsPageModule() {
    }
    SelectMorePetsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_more_pets__["a" /* SelectMorePetsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_more_pets__["a" /* SelectMorePetsPage */]),
            ],
        })
    ], SelectMorePetsPageModule);
    return SelectMorePetsPageModule;
}());

//# sourceMappingURL=select-more-pets.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectMorePetsPage; });
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
            selector: 'page-select-more-pets',template:/*ion-inline-start:"/Users/skirosoft/Documents/IONIC/UDOG/udog-ionic-client-new/src/pages/select-more-pets/select-more-pets.html"*/'<!--\n  Generated template for the SelectMorePetsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons start>\n      <button [disabled]="isCheckedPets.length != numberOfDogs" ion-button icon-only (click)="selectdDogs()">\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Select more pets</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n		<ion-item *ngFor="let items of allPets">\n      <ion-avatar item-start>\n      		<img [src]="items.pic">\n      </ion-avatar>\n      <ion-label>{{items.petName}}</ion-label>\n      <ion-checkbox item-end [disabled]="checkedCount == numberOfDogs && !items.checked" [(ngModel)]="items.checked" (ionChange)="selectPets(items)"></ion-checkbox>\n\n		</ion-item>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/skirosoft/Documents/IONIC/UDOG/udog-ionic-client-new/src/pages/select-more-pets/select-more-pets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SelectMorePetsPage);
    return SelectMorePetsPage;
}());

//# sourceMappingURL=select-more-pets.js.map

/***/ })

});
//# sourceMappingURL=2.js.map