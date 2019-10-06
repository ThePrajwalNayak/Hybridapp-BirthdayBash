import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersFollowingModalPage } from './followers-following-modal.page';

describe('FollowersFollowingModalPage', () => {
  let component: FollowersFollowingModalPage;
  let fixture: ComponentFixture<FollowersFollowingModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersFollowingModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersFollowingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
