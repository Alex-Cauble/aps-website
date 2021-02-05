import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllisInfoComponent } from './ellis-info.component';

describe('EllisInfoComponent', () => {
  let component: EllisInfoComponent;
  let fixture: ComponentFixture<EllisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EllisInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EllisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
