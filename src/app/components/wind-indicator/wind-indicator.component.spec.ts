import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindIndicatorComponent } from './wind-indicator.component';

describe('WindIndicatorComponent', () => {
  let component: WindIndicatorComponent;
  let fixture: ComponentFixture<WindIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
