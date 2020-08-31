import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestMemoireDetailsComponent } from './guest-memoire-details.component';

describe('GuestMemoireDetailsComponent', () => {
  let component: GuestMemoireDetailsComponent;
  let fixture: ComponentFixture<GuestMemoireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestMemoireDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestMemoireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
