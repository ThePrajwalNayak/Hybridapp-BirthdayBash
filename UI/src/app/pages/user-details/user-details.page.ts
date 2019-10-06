import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  user : any;
  constructor(private userService : UserService) { 
  }

  ngOnInit() {
    this.user = this.userService.getSelectedUser();
  }

}
