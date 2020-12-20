import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParentComponentComponent } from './home-parent-component.component';

describe('HomeParentComponentComponent', () => {
  let component: HomeParentComponentComponent;
  let fixture: ComponentFixture<HomeParentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeParentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
