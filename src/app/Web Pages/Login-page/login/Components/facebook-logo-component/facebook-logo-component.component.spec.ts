import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookLogoComponentComponent } from './facebook-logo-component.component';

describe('FacebookLogoComponentComponent', () => {
  let component: FacebookLogoComponentComponent;
  let fixture: ComponentFixture<FacebookLogoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookLogoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookLogoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
