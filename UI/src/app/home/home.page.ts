import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { UserService } from '../services/user.service';
import { FollowersFollowingModalPage } from '../followers-following-modal/followers-following-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  username : string = 'ThePrajwalNayak';
  hackersHero : any;
  FOLLOWERS : string = 'FOLLOWERS';
  FOLLOWING : string = 'FOLLOWING';
  followersArray : any = [];
  followingArray : any = [];
  repos : any = [];
  constructor(private userService: UserService, private modalController : ModalController) { }

  ngOnInit() {
    this.getHackersHero(this.username);
    this.getFollowers(this.username);
    this.getFollowing(this.username);
    this.getRepository(this.username);
  }

  getHackersHero(username: string) {
    this.userService.getUserByUserName(username)
      .subscribe(data => {
        this.hackersHero = data;
      }, error => {
        console.log(error);
      });
  }

  getFollowers(username: string) {
    this.userService.getFollower(username)
      .subscribe(data => {
        this.followersArray = data;
      }, error => {
        console.log(error);
      });
  }

  getFollowing(username: string) {
    this.userService.getFollowing(username)
      .subscribe(data => {
        this.followingArray = data;
      }, error => {
        console.log(error);
      });
  }

  getRepository(username: string) {
    this.userService.getRepoDetails(username)
      .subscribe(data => {
          this.repos = data;
      }, error => {
        console.log(error);
      });
  }

  async openModal(modalType: string) {
    var input = {
      'user' : null,
      'users': null,
      'modalType': null
    };
    if (modalType === this.FOLLOWERS) {
      input.user  = this.hackersHero,
      input.users = this.followersArray;
      input.modalType = this.FOLLOWERS;
    } else {
      input.user  = this.hackersHero,
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


}
