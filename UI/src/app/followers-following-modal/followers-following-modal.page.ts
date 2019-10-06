import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-followers-following-modal',
  templateUrl: './followers-following-modal.page.html',
  styleUrls: ['./followers-following-modal.page.scss'],
})
export class FollowersFollowingModalPage implements OnInit {

  user : any;
  users : any;
  modalType : string;

  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    this.user = this.navParams.data.user;
    this.users = this.navParams.data.users;
    this.modalType = this.navParams.data.modalType;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
