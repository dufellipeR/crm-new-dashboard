import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsGanhasComponent } from './leads-ganhas.component';

describe('LeadsGanhasComponent', () => {
  let component: LeadsGanhasComponent;
  let fixture: ComponentFixture<LeadsGanhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsGanhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsGanhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
