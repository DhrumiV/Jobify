import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostedJobDetailsComponent } from './view-posted-job-details.component';

describe('ViewPostedJobDetailsComponent', () => {
  let component: ViewPostedJobDetailsComponent;
  let fixture: ComponentFixture<ViewPostedJobDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPostedJobDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewPostedJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
