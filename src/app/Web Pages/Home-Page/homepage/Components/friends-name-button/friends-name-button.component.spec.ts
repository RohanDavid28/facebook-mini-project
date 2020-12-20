import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsNameButtonComponent } from './friends-name-button.component';

describe('FriendsNameButtonComponent', () => {
  let component: FriendsNameButtonComponent;
  let fixture: ComponentFixture<FriendsNameButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsNameButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsNameButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
