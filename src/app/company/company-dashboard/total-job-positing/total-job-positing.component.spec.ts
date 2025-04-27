import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalJobPositingComponent } from './total-job-positing.component';

describe('TotalJobPositingComponent', () => {
  let component: TotalJobPositingComponent;
  let fixture: ComponentFixture<TotalJobPositingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalJobPositingComponent]
    });
    fixture = TestBed.createComponent(TotalJobPositingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
