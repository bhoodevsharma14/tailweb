import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditScoreComponent } from './add-edit-score.component';

describe('AddEditScoreComponent', () => {
  let component: AddEditScoreComponent;
  let fixture: ComponentFixture<AddEditScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
