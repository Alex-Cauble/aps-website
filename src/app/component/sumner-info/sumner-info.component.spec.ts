import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumnerInfoComponent } from './sumner-info.component';

describe('SumnerInfoComponent', () => {
  let component: SumnerInfoComponent;
  let fixture: ComponentFixture<SumnerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumnerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumnerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
