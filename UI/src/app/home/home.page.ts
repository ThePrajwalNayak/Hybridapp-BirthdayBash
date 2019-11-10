import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 

import { UserService , SearchType} from '../services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  searchTerm : any = '';
  type: SearchType = SearchType.LoginName;
  results : any = [];

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {

  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.userService.searchData(this.searchTerm, this.type)
    .subscribe(data => {
      this.results.push(data);
      debugger
    }, error => {
      console.log(error);
    })
  }

  goToUserDetails(user) {
    this.userService.setSelectedUser(user);
    this.router.navigate(['/userDetails']);
  }

}
