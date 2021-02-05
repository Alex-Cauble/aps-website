import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IjholtonInfoComponent } from './ijholton-info.component';

describe('IjholtonInfoComponent', () => {
  let component: IjholtonInfoComponent;
  let fixture: ComponentFixture<IjholtonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IjholtonInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IjholtonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
