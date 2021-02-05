import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevelnInfoComponent } from './neveln-info.component';

describe('NevelnInfoComponent', () => {
  let component: NevelnInfoComponent;
  let fixture: ComponentFixture<NevelnInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NevelnInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NevelnInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
