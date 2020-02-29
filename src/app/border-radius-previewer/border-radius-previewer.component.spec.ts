import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderRadiusPreviewerComponent } from './border-radius-previewer.component';

describe('BorderRadiusPreviewerComponent', () => {
  let component: BorderRadiusPreviewerComponent;
  let fixture: ComponentFixture<BorderRadiusPreviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderRadiusPreviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderRadiusPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
