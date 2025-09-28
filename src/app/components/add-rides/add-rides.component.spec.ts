import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRidesComponent } from './add-rides.component';

describe('AddRidesComponent', () => {
  let component: AddRidesComponent;
  let fixture: ComponentFixture<AddRidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
