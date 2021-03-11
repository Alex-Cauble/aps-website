import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceLearningDetailsComponent } from './distance-learning-details.component';

describe('DistanceLearningDetailsComponent', () => {
  let component: DistanceLearningDetailsComponent;
  let fixture: ComponentFixture<DistanceLearningDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceLearningDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceLearningDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
