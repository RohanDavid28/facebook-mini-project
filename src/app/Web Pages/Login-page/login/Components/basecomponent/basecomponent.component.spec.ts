import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasecomponentComponent } from './basecomponent.component';

describe('BasecomponentComponent', () => {
  let component: BasecomponentComponent;
  let fixture: ComponentFixture<BasecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
