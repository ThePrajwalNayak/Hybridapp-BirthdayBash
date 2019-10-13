import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { UserService } from '../services/user.service';
import { FollowersFollowingModalPage } from '../followers-following-modal/followers-following-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  username: string = 'ThePrajwalNayak';
  // username: string = 'defunkt';
  hackersHero: any;
  FOLLOWERS: string = 'FOLLOWERS';
  FOLLOWING: string = 'FOLLOWING';
  followersArray: any = [];
  followingArray: any = [];
  repos: any = [];

  constructor(private userService: UserService, private modalController: ModalController) { }

  ngOnInit() {
    this.getHackersHero();
    this.getFollowers();
    this.getFollowing();
    this.getRepository();
  }

  getHackersHero() {
    this.userService.getUserByUserName(this.username)
      .subscribe(data => {
        this.hackersHero = data;
      }, error => {
        console.log(error);
      });
  }

  getFollowers() {
    this.userService.getFollowers(this.username)
      .subscribe(data => {
        this.followersArray = data;
      }, error => {
        console.log(error);
      });
  }

  getFollowing() {
    this.userService.getFollowing(this.username)
      .subscribe(data => {
        this.followingArray = data;
      }, error => {
        console.log(error);
      });
  }

  getRepository() {
    this.userService.getRepoDetails(this.username)
      .subscribe(data => {
        this.repos = data;
      }, error => {
        console.log(error);
      });
  }

  async openModal(modalType: string) {
    var input = {
      'user': null,
      'users': null,
      'modalType': null
    };
    if (modalType === this.FOLLOWERS) {
      input.user = this.hackersHero,
        input.users = this.followersArray;
      input.modalType = this.FOLLOWERS;
    } else {
      input.user = this.hackersHero,
        input.users = this.followingArray;
      input.modalType = this.FOLLOWING;
    }
    const modal = await this.modalController.create({
      component: FollowersFollowingModalPage,
      componentProps: input
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        let dataReturnedModal = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  avatarLetter(word) {
    return word.charAt(0);
  }

}
