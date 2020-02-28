import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bin2DecComponent } from './bin2-dec.component';

describe('Bin2DecComponent', () => {
  let component: Bin2DecComponent;
  let fixture: ComponentFixture<Bin2DecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bin2DecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bin2DecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
