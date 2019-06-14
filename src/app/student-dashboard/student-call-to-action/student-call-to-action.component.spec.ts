import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCallToActionComponent } from './student-call-to-action.component';

describe('StudentCallToActionComponent', () => {
  let component: StudentCallToActionComponent;
  let fixture: ComponentFixture<StudentCallToActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCallToActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
