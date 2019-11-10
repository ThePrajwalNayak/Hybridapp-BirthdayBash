import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';

export enum SearchType {
  LoginName = 'Users',
  Repositories = 'repositories'
}

export enum FollowersFollowingModalType {
  FOLLOWERS = 'Followers',
  FOLLOWING = 'Following'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_URL: string = 'https://api.github.com/users';
  user: any = null;

  constructor(private httpClient: HttpClient) { }

  setSelectedUser(user) {
    this.user = user;
  }

  getSelectedUser() {
    return this.user;
  }

  getAllUsers(nextUserIndex) {
    console.log(nextUserIndex);
    return this.httpClient.get('https://api.github.com/users?since=' + nextUserIndex);
  }

  getUserByUserName(username) {
    return this.httpClient.get('https://api.github.com/users/' + username);
  }

  getFollowers(username) {
    return this.httpClient.get('https://api.github.com/users/' + username + '/followers');
  }

  getFollowing(username) {
    return this.httpClient.get('https://api.github.com/users/' + username + '/following');
  }

  getRepoDetails(username) {
    return this.httpClient.get('https://api.github.com/users/' + username + '/repos');
  }

  searchData(searchData, SearchType){
    if(SearchType == 'Users'){
      return this.httpClient.get('https://api.github.com/users/'+searchData);
    } else if(SearchType == 'repositories'){
      return this.httpClient.get('https://api.github.com/search/repositories?q='+searchData);
    }
  
    
  }

}
