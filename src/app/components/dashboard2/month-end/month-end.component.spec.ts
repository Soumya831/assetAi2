import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthEndComponent } from './month-end.component';

describe('MonthEndComponent', () => {
  let component: MonthEndComponent;
  let fixture: ComponentFixture<MonthEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
