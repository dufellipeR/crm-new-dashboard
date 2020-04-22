import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspeccoesComponent } from './prospeccoes.component';

describe('ProspeccoesComponent', () => {
  let component: ProspeccoesComponent;
  let fixture: ComponentFixture<ProspeccoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspeccoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspeccoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
