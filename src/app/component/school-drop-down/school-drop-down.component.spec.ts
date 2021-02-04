import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDropDownComponent } from './school-drop-down.component';

describe('SchoolDropDownComponent', () => {
  let component: SchoolDropDownComponent;
  let fixture: ComponentFixture<SchoolDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
