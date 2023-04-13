import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrordemedicacionComponent } from './errordemedicacion.component';

describe('ErrordemedicacionComponent', () => {
  let component: ErrordemedicacionComponent;
  let fixture: ComponentFixture<ErrordemedicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrordemedicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrordemedicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
