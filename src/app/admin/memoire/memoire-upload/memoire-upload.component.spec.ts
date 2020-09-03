import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoireUploadComponent } from './memoire-upload.component';

describe('MemoireUploadComponent', () => {
  let component: MemoireUploadComponent;
  let fixture: ComponentFixture<MemoireUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoireUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoireUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
