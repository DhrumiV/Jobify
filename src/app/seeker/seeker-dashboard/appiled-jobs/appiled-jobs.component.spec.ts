import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppiledJobsComponent } from './appiled-jobs.component';

describe('AppiledJobsComponent', () => {
  let component: AppiledJobsComponent;
  let fixture: ComponentFixture<AppiledJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppiledJobsComponent]
    });
    fixture = TestBed.createComponent(AppiledJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
