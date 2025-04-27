import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerProfileComponent } from './seeker-profile.component';

describe('SeekerProfileComponent', () => {
  let component: SeekerProfileComponent;
  let fixture: ComponentFixture<SeekerProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeekerProfileComponent]
    });
    fixture = TestBed.createComponent(SeekerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
