import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedScoreItemComponent } from './saved-score-item.component';

describe('SavedScoreItemComponent', () => {
  let component: SavedScoreItemComponent;
  let fixture: ComponentFixture<SavedScoreItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedScoreItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedScoreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
