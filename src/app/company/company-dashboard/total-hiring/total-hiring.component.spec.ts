import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalHiringComponent } from './total-hiring.component';

describe('TotalHiringComponent', () => {
  let component: TotalHiringComponent;
  let fixture: ComponentFixture<TotalHiringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalHiringComponent]
    });
    fixture = TestBed.createComponent(TotalHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
