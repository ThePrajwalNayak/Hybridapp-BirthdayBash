import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  constructor(private http: HTTP) { }

  getBirthdayWinner(){
    return this.http.get('/assets/json/BirthdayWinner.json', {}, {});
  }
}
