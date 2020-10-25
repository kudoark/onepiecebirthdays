import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysbirthdayComponent } from './todaysbirthday.component';

describe('TodaysbirthdayComponent', () => {
  let component: TodaysbirthdayComponent;
  let fixture: ComponentFixture<TodaysbirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysbirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysbirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
