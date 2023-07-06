/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TesouraComponent } from './tesoura.component';

describe('TesouraComponent', () => {
  let component: TesouraComponent;
  let fixture: ComponentFixture<TesouraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesouraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesouraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
