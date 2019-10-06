import { Component, OnInit } from '@angular/core';
import { BirthdayService } from '../birthday.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private birthdayService : BirthdayService) {}

  ngOnInit(){
      this.getBirthdayWinner();
  }

  getBirthdayWinner(){
    this.birthdayService.getBirthdayWinner()
    .then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });
  }

}
