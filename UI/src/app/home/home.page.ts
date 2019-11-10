import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserService, SearchType } from '../services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchTerm: any = '';
  type: SearchType = SearchType.LoginName;
  results: any = [];
  currentSeachFilter = this.type;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  //Call API to get result based on SeachTerm and Search Type
  searchChanged(event) {
    console.log(event.detail.value);
    //If user using same filter for search then proceed with API call
    if (this.currentSeachFilter == this.type) {
      //Call API if searchTerm not empty 
      if (this.searchTerm) {
        this.userService.searchData(this.searchTerm, this.type)
          .subscribe(data => {
            this.prepareResult(data);
          }, error => {
            this.results = [];
            console.log(error);
          });
      }else{
        this.results = [];
      }
    }
  }

  prepareResult(data) {
    this.results = [];
    if (this.type == 'Users') {
      this.results.push(data);
    } else if (this.type == 'repositories') {
      let objCopy = JSON.parse(JSON.stringify(data.items));
      this.results = objCopy;
    }
  }

  resetSearchTerm(event) {
    this.searchTerm = '';
    this.results = [];
  }

  filterChanged(event) {
    console.log(event.detail.value);
    this.currentSeachFilter = event.detail.value;
    this.searchTerm = '';
    this.results = [];
  }

  goToUserDetails(user) {
    this.userService.setSelectedUser(user);
    this.router.navigate(['/userDetails']);
  }

  avatarLetter(word) {
    return word.charAt(0).toUpperCase();
  }

}
