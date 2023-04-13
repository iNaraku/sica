import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuasifallaComponent } from './cuasifalla.component';

describe('CuasifallaComponent', () => {
  let component: CuasifallaComponent;
  let fixture: ComponentFixture<CuasifallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuasifallaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuasifallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
