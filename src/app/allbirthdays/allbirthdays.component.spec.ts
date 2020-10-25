import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbirthdaysComponent } from './allbirthdays.component';

describe('AllbirthdaysComponent', () => {
  let component: AllbirthdaysComponent;
  let fixture: ComponentFixture<AllbirthdaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbirthdaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbirthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
