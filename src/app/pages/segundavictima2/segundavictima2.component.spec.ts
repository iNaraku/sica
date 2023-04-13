import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Segundavictima2Component } from './segundavictima2.component';

describe('Segundavictima2Component', () => {
  let component: Segundavictima2Component;
  let fixture: ComponentFixture<Segundavictima2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Segundavictima2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Segundavictima2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
