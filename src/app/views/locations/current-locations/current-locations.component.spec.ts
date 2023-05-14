import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLocationsComponent } from './current-locations.component';

describe('CurrentLocationsComponent', () => {
  let component: CurrentLocationsComponent;
  let fixture: ComponentFixture<CurrentLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
