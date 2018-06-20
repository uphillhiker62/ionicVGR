import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {

  }

  listBtn(sortBy: string) {
    this.navCtrl.push(ListPage, {
      sortBy: sortBy
    });
  }

}
