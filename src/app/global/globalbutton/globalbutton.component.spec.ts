import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalbuttonComponent } from './globalbutton.component';

describe('GlobalbuttonComponent', () => {
  let component: GlobalbuttonComponent;
  let fixture: ComponentFixture<GlobalbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
