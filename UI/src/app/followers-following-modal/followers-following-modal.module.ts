import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FollowersFollowingModalPage } from './followers-following-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FollowersFollowingModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FollowersFollowingModalPage]
})
export class FollowersFollowingModalPageModule {}
