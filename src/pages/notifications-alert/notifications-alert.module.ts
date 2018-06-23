import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationAlertPage } from './notifications-alert';

@NgModule({
  declarations: [
    NotificationAlertPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationAlertPage),
  ],
})
export class NotificationsAlertPageModule {}
