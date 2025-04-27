import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPostJobComponent } from './company-post-job.component';

describe('CompanyPostJobComponent', () => {
  let component: CompanyPostJobComponent;
  let fixture: ComponentFixture<CompanyPostJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyPostJobComponent]
    });
    fixture = TestBed.createComponent(CompanyPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
