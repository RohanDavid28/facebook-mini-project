import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesBaseComponent } from './games-base.component';

describe('GamesBaseComponent', () => {
  let component: GamesBaseComponent;
  let fixture: ComponentFixture<GamesBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
