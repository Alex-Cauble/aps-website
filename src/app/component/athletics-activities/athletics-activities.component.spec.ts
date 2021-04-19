import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleticsActivitiesComponent } from './athletics-activities.component';

describe('AthleticsActivitiesComponent', () => {
  let component: AthleticsActivitiesComponent;
  let fixture: ComponentFixture<AthleticsActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleticsActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleticsActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
