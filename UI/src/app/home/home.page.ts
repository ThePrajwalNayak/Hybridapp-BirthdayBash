import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  username: string = 'ThePrajwalNayak';
  hackersHero: any = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getHackersHero();
  }

  getHackersHero() {
    this.userService.getUserByUserName(this.username)
      .subscribe(data => {
        this.hackersHero = data;
      }, error => {
        console.log(error);
      });
  }


}
