import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { DeletePage } from '../delete/delete';
import { AboutPage } from '../about/about';

/**
 * Generated class for the LogsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logs',
  templateUrl: 'logs.html',
})
export class LogsPage {

  post: String;
  logs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  writeLog() {

    var logsLen = this.logs.length;
    var datetime = new Date();
    var getDateTime = datetime.toUTCString();
    var datum = {
      id:logsLen,
      info: getDateTime,
      remarks: "Posted:",
      text:this.post,
      stats:"Posted",
      color:"#03a1d1"
    };
    this.logs.push(datum);
    this.post = ''; 

    localStorage.setItem('logsJSON', JSON.stringify(this.logs));

    console.log(JSON.parse(localStorage.getItem('logsJSON')));
  }

  goDelete() {
    this.navCtrl.push(DeletePage);
  }

  goAbout() {
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    console.log('Current Page : Logs Page');

    var logsJSON = JSON.parse(localStorage.getItem('logsJSON'));
    if ( logsJSON != null) {
      this.logs = logsJSON;
    }
  }
}
