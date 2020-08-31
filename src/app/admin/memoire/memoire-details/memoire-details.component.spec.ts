import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoireDetailsComponent } from './memoire-details.component';

describe('MemoireDetailsComponent', () => {
  let component: MemoireDetailsComponent;
  let fixture: ComponentFixture<MemoireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoireDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
