import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalkerPage } from './walker';

@NgModule({
  declarations: [
    WalkerPage,
  ],
  imports: [
    IonicPageModule.forChild(WalkerPage),
  ],
})
export class WalkerPageModule {}
