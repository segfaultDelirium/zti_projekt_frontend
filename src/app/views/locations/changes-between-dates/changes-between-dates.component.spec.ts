import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesBetweenDatesComponent } from './changes-between-dates.component';

describe('ChangesBetweenDatesComponent', () => {
  let component: ChangesBetweenDatesComponent;
  let fixture: ComponentFixture<ChangesBetweenDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesBetweenDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangesBetweenDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
