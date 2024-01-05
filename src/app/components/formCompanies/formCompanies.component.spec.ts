/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormCompaniesComponent } from './formCompanies.component';

describe('FormCompaniesComponent', () => {
  let component: FormCompaniesComponent;
  let fixture: ComponentFixture<FormCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
