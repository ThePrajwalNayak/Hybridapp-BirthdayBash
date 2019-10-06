import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-followers-following-modal',
  templateUrl: './followers-following-modal.page.html',
  styleUrls: ['./followers-following-modal.page.scss'],
})
export class FollowersFollowingModalPage implements OnInit {

  users: any;
  modalType : string;
  
  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    console.table(this.navParams);
    this.users = this.navParams.data.users;
    this.modalType = this.navParams.data.modalType;
    debugger;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
