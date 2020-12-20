import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbPostUploadComponent } from './fb-post-upload.component';

describe('FbPostUploadComponent', () => {
  let component: FbPostUploadComponent;
  let fixture: ComponentFixture<FbPostUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbPostUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbPostUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
