import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodsonInfoComponent } from './woodson-info.component';

describe('WoodsonInfoComponent', () => {
  let component: WoodsonInfoComponent;
  let fixture: ComponentFixture<WoodsonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodsonInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodsonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
