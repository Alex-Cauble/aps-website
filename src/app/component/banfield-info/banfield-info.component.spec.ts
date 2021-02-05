import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanfieldInfoComponent } from './banfield-info.component';

describe('BanfieldInfoComponent', () => {
  let component: BanfieldInfoComponent;
  let fixture: ComponentFixture<BanfieldInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanfieldInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanfieldInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
