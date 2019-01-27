import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogsPage } from '../logs/logs';
import { DeletePage } from '../delete/delete';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goDelete() {
    this.navCtrl.push(DeletePage);
  }

  goLogs() {
    this.navCtrl.push(LogsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
