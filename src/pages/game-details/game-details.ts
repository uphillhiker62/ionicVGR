import { GameReviewsPage } from './../game-reviews/game-reviews';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GameDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-details',
  templateUrl: 'game-details.html',
})
export class GameDetailsPage {

  gameID: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gameID = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDetailsPage');
  }

  gameReviews() {
    this.navCtrl.push(GameReviewsPage, {
      gameID: this.gameID
    });
  }

}
