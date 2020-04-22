import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsPerdidasComponent } from './leads-perdidas.component';

describe('LeadsPerdidasComponent', () => {
  let component: LeadsPerdidasComponent;
  let fixture: ComponentFixture<LeadsPerdidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsPerdidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsPerdidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
