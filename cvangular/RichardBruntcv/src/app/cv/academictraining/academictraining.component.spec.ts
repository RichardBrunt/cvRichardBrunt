import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademictrainingComponent } from './academictraining.component';

describe('AcademictrainingComponent', () => {
  let component: AcademictrainingComponent;
  let fixture: ComponentFixture<AcademictrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademictrainingComponent]
    });
    fixture = TestBed.createComponent(AcademictrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
