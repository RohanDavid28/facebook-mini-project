import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbProductComponent } from './fb-product.component';

describe('FbProductComponent', () => {
  let component: FbProductComponent;
  let fixture: ComponentFixture<FbProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
