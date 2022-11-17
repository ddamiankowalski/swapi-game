import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSnackbarComponent } from './game-snackbar.component';

describe('GameSnackbarComponent', () => {
  let component: GameSnackbarComponent;
  let fixture: ComponentFixture<GameSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
