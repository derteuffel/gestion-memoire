import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoireDownloadComponent } from './memoire-download.component';

describe('MemoireDownloadComponent', () => {
  let component: MemoireDownloadComponent;
  let fixture: ComponentFixture<MemoireDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoireDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoireDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
