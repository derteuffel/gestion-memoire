import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoireSaveSuccessComponent } from './memoire-save-success.component';

describe('MemoireSaveSuccessComponent', () => {
  let component: MemoireSaveSuccessComponent;
  let fixture: ComponentFixture<MemoireSaveSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoireSaveSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoireSaveSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
