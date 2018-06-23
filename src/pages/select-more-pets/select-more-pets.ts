import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-select-more-pets',
  templateUrl: 'select-more-pets.html',
})
export class SelectMorePetsPage {

	allPets:any;
	selectedPets:any;
	numberOfDogs:any;
	checkedCount:number = 0;
	isCheckedPets:any = [];

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectMorePetsPage');
  }

	ionViewDidEnter() {

		this.selectedPets = this.navParams.get('selectedPets');

	    console.log('selectedPets',this.selectedPets);

		let getAllpertData = JSON.parse(localStorage.getItem('pets'));

		for (var i = 0; i < getAllpertData.length; i++) {
			getAllpertData[i]._id = 'pets'+i;
			getAllpertData[i].checked = false;
			getAllpertData[i].petName = getAllpertData[i].name;
		}

		console.log('getAllpertData==>',getAllpertData);

		if (this.selectedPets.length > 0) {

			let metchArray = getAllpertData.filter((item) => {
			this.selectedPets.some(data => {
				if (item._id === data._id) {
					item.checked = true;
				}
			});
				return item;
			});

			console.log('metchArray',metchArray);

			this.checkedCount = this.selectedPets.length;

			console.log('checkedCount',this.checkedCount);

			this.isCheckedPets = this.selectedPets;

			console.log('isCheckedPets',this.isCheckedPets);

		}

	     this.allPets = getAllpertData;

	     console.log('allpets',this.allPets);

		this.numberOfDogs = this.navParams.get('numberOfDogs');
		console.log('numberOfDogs',this.numberOfDogs);
	}

	selectPets(item){
		console.log('item',item);
		if (item.checked) {
			console.log('++' + item.name);
			this.checkedCount++;
			item.checked = true;
			this.isCheckedPets.push(item);
		} else {
			this.checkedCount--;
			console.log('--');
			item.checked = false;

			var index = this.isCheckedPets.findIndex(x => x._id == item._id);

			if(index !== -1) {
		      this.isCheckedPets.splice(index, 1);  
		    }
			
		};

		console.log('this.isCheckedPets',this.isCheckedPets);
	}

	dismiss(){
		this.viewCtrl.dismiss();
	}

	selectdDogs(){
		this.viewCtrl.dismiss(this.isCheckedPets);
	}

}

