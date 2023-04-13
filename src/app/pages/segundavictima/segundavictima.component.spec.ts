import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundavictimaComponent } from './segundavictima.component';

describe('SegundavictimaComponent', () => {
  let component: SegundavictimaComponent;
  let fixture: ComponentFixture<SegundavictimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundavictimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundavictimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
