import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackWalkPage } from './track-walk';

@NgModule({
  declarations: [
    TrackWalkPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackWalkPage),
  ],
})
export class TrackWalkPageModule {}
