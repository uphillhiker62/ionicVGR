import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GameReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-reviews',
  templateUrl: 'game-reviews.html',
})
export class GameReviewsPage {

  gameID: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gameID = navParams.get('gameID');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameReviewsPage');
  }

}
