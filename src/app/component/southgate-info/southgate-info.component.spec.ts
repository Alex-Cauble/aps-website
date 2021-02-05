import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthgateInfoComponent } from './southgate-info.component';

describe('SouthgateInfoComponent', () => {
  let component: SouthgateInfoComponent;
  let fixture: ComponentFixture<SouthgateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthgateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthgateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
