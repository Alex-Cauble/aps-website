import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClcInfoComponent } from './clc-info.component';

describe('ClcInfoComponent', () => {
  let component: ClcInfoComponent;
  let fixture: ComponentFixture<ClcInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClcInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClcInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
