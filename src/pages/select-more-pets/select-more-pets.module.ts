import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectMorePetsPage } from './select-more-pets';

@NgModule({
  declarations: [
    SelectMorePetsPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectMorePetsPage),
  ],
})
export class SelectMorePetsPageModule {}
