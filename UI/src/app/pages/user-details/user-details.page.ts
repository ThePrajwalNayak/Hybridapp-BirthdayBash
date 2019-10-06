import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService, FollowersFollowingModalType } from '../../services/user.service';
import { FollowersFollowingModalPage } from '../../followers-following-modal/followers-following-modal.page';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  user: any;
  repos : any = [];
  FOLLOWERS: FollowersFollowingModalType = FollowersFollowingModalType.FOLLOWERS;
  FOLLOWING: FollowersFollowingModalType = FollowersFollowingModalType.FOLLOWING;
  followersArray: any = [];
  followingArray: any = [];


  constructor(private userService: UserService, public modalController: ModalController) {
  }

  ngOnInit() {
    this.user = this.userService.getSelectedUser();
    this.getRepoDetails();
    this.getFollower();
    this.getFollowing();
  }

  getRepoDetails(){
    this.userService.getRepoDetails(this.user.login)
    .subscribe(data => {
      this.repos = data;
    }, error => {
      console.log(error);
    });
  }

  getFollower() {
    this.userService.getFollower(this.user.login)
      .subscribe(data => {
        this.followersArray = data;
      }, error => {
        console.log(error);
      });
  }

  getFollowing() {
    this.userService.getFollowing(this.user.login)
      .subscribe(data => {
        this.followingArray = data;
      }, error => {
        console.log(error);
      })
  }



  async openModal(modalType: FollowersFollowingModalType) {
    var input = {
      'user' : null,
      'users': null,
      'modalType': null
    };
    if (modalType === this.FOLLOWERS) {
      input.user  = this.user,
      input.users = this.followersArray;
      input.modalType = this.FOLLOWERS;
    } else {
      input.user  = this.user,
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
