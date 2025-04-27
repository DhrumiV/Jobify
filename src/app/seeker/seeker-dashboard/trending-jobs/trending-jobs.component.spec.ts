import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingJobsComponent } from './trending-jobs.component';

describe('TrendingJobsComponent', () => {
  let component: TrendingJobsComponent;
  let fixture: ComponentFixture<TrendingJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingJobsComponent]
    });
    fixture = TestBed.createComponent(TrendingJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
