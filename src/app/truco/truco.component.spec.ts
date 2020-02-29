import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucoComponent } from './truco.component';

describe('TrucoComponent', () => {
  let component: TrucoComponent;
  let fixture: ComponentFixture<TrucoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrucoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
