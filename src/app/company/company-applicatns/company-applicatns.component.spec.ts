import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyApplicatnsComponent } from './company-applicatns.component';

describe('CompanyApplicatnsComponent', () => {
  let component: CompanyApplicatnsComponent;
  let fixture: ComponentFixture<CompanyApplicatnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyApplicatnsComponent]
    });
    fixture = TestBed.createComponent(CompanyApplicatnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
