import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsbaseComponent } from './friendsbase.component';

describe('FriendsbaseComponent', () => {
  let component: FriendsbaseComponent;
  let fixture: ComponentFixture<FriendsbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsbaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
