import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LogsPage } from '../logs/logs';
import { AboutPage } from '../about/about';

/**
 * Generated class for the DeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage {

  logs = [];
  trueLogs = [];
  newLogs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  checkLogs() {
    this.logs.forEach(log => {
      if (log.stats == "Posted") {
        this.trueLogs.push(log);
        console.log(log.id);
      }
    });
  }

  deletePost(id) {
    this.logs.forEach(log => {
      if (log.id == id) {
        var datum = {
          id:log.id,
          info:log.info,
          remarks:log.remarks,
          text:log.text,
          stats:"Deleted",
          color:log.color
        };
        this.logs[id] = datum;
      }
    });

    var logLen = this.logs.length + 1;
    var datetime = new Date();
    var getDateTime = datetime.toUTCString();

    var data = {
      id:logLen,
      info:getDateTime,
      remarks: "Removed:",
      text:this.logs[id].text,
      stats:this.logs[id].stats,
      color:"#ff0000"
    }; 
    this.logs.push(data);

    localStorage.setItem('logsJSON', JSON.stringify(this.logs));

    this.navCtrl.push(DeletePage);
  }

  markPost(id) {
    var logLen = this.logs.length + 1;
    var datetime = new Date();
    var getDateTime = datetime.toUTCString();

    var data = {
      id:logLen,
      info:getDateTime,
      remarks: "Updated:",
      text:this.logs[id].text,
      stats:this.logs[id].stats,
      color:"#ff9f00"
    }; 
    this.logs.push(data);

    localStorage.setItem('logsJSON', JSON.stringify(this.logs));
  }

  goLogs() {
    this.navCtrl.push(LogsPage);
  }

  goAbout() {
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    console.log('Current Page : Posts Page');

    var logsJSON = JSON.parse(localStorage.getItem('logsJSON'));
    if ( logsJSON != null) {
      this.logs = logsJSON;
    }

    console.log(JSON.parse(localStorage.getItem('logsJSON')));

    this.checkLogs();
  }
}
