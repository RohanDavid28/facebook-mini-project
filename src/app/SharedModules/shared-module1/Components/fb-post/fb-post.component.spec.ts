import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbPostComponent } from './fb-post.component';

describe('FbPostComponent', () => {
  let component: FbPostComponent;
  let fixture: ComponentFixture<FbPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
