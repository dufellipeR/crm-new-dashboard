import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunilComponent } from './funil.component';

describe('FunilComponent', () => {
  let component: FunilComponent;
  let fixture: ComponentFixture<FunilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
