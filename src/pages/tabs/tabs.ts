import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { TrackWalkPage } from '../track-walk/track-walk'
import { WalksPage } from '../walks/walks'
import { ReportPage } from '../report/report'
import { BookWalkPage } from '../book-walk/book-walk'
import { RegisterPage } from '../register/register'
import { PetPage } from '../pet/pet'
import { CardPage } from '../card/card'
import { NavController, NavParams } from 'ionic-angular';
import { RateWalkPage } from '../rate-walk/rate-walk'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

//  @ViewChild('myTabs') tabRef: Tabs;
  variable: Boolean;
  tab1Root = HomePage;
  tab2Root = WalksPage;
  tab3Root = ProfilePage;
  tab4Root = RateWalkPage;
  tab5Root = TrackWalkPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console(this.navCtrl.getActive().component.tabRef.getSelected().root.name);
    this.variable = false;
  }

  ionViewDidEnter() {
//    this.tabRef.select(2);
  }
}
