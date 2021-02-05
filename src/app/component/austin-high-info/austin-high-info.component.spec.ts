import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustinHighInfoComponent } from './austin-high-info.component';

describe('AustinHighInfoComponent', () => {
  let component: AustinHighInfoComponent;
  let fixture: ComponentFixture<AustinHighInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AustinHighInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AustinHighInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
