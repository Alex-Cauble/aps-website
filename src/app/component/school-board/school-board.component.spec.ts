import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBoardComponent } from './school-board.component';

describe('SchoolBoardComponent', () => {
  let component: SchoolBoardComponent;
  let fixture: ComponentFixture<SchoolBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
