import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsAtGivenTimeComponent } from './locations-at-given-time.component';

describe('LocationsAtGivenTimeComponent', () => {
  let component: LocationsAtGivenTimeComponent;
  let fixture: ComponentFixture<LocationsAtGivenTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsAtGivenTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsAtGivenTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
