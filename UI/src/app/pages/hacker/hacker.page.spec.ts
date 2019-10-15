import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerPage } from './hacker.page';

describe('HackerPage', () => {
  let component: HackerPage;
  let fixture: ComponentFixture<HackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
