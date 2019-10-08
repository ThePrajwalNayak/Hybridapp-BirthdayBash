import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  nextUserIndex = 0;
  users: any;
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { static: true }) content: IonContent;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers(this.nextUserIndex);
  }

  getAllUsers(lastUser) {
    this.userService.getAllUsers(this.nextUserIndex).subscribe(data => {
      this.users = data;
      // this.users.push(data);
    });
  }

  loadData(event) {

    setTimeout(() => {
      this.nextUserIndex = this.nextUserIndex + 30;
      // this.getAllUsers(this.nextUserIndex);
      this.userService.getAllUsers(this.nextUserIndex).subscribe(data => {
        this.users = this.users.concat(data);
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        // if (this.users.length > 90) {
        //   event.target.disabled = true;
        // }
      });
    }, 1000);
  }

  goToUserDetails(user) {
    this.userService.setSelectedUser(user);
    this.router.navigate(['/userDetails']);
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  backToTop() {
    this.content.scrollToTop();
  }

}
