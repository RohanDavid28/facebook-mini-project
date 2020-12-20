import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbStatusComponent } from './fb-status.component';

describe('FbStatusComponent', () => {
  let component: FbStatusComponent;
  let fixture: ComponentFixture<FbStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
