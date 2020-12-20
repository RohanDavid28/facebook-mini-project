import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebooDescriptionComponentComponent } from './faceboo-description-component.component';

describe('FacebooDescriptionComponentComponent', () => {
  let component: FacebooDescriptionComponentComponent;
  let fixture: ComponentFixture<FacebooDescriptionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebooDescriptionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebooDescriptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
