import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationResultDialogComponent } from './modification-result-dialog.component';

describe('ModificationResultDialogComponent', () => {
  let component: ModificationResultDialogComponent;
  let fixture: ComponentFixture<ModificationResultDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationResultDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
