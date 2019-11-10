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

  searchChanged(event) {
    console.log(event.detail.value);
    // Call our service function which returns an Observable
    if (this.searchTerm) {
      this.userService.searchData(this.searchTerm, this.type)
        .subscribe(data => {
          this.prepareResult(data);
        }, error => {
          console.log(error);
        });
    }
  }

  prepareResult(data){
    this.results = [];
    if(this.type == 'Users'){
      this.results.push(data);
    }else if(this.type == 'repositories'){
      let objCopy  = JSON.parse(JSON.stringify(data.items));
      this.results = objCopy;
    }
  }

  goToUserDetails(user) {
    this.userService.setSelectedUser(user);
    this.router.navigate(['/userDetails']);
  }

  avatarLetter(word) {
    return word.charAt(0).toUpperCase();
}

}
