import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerInterviewsComponent } from './seeker-interviews.component';

describe('SeekerInterviewsComponent', () => {
  let component: SeekerInterviewsComponent;
  let fixture: ComponentFixture<SeekerInterviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeekerInterviewsComponent]
    });
    fixture = TestBed.createComponent(SeekerInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
