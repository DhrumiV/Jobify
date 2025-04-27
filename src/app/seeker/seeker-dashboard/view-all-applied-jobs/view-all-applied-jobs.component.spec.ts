import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAppliedJobsComponent } from './view-all-applied-jobs.component';

describe('ViewAllAppliedJobsComponent', () => {
  let component: ViewAllAppliedJobsComponent;
  let fixture: ComponentFixture<ViewAllAppliedJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllAppliedJobsComponent]
    });
    fixture = TestBed.createComponent(ViewAllAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
