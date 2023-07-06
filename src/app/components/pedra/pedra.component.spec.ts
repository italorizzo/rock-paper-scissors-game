/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PedraComponent } from './pedra.component';

describe('PedraComponent', () => {
  let component: PedraComponent;
  let fixture: ComponentFixture<PedraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
