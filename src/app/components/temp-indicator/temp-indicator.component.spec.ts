import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempIndicatorComponent } from './temp-indicator.component';

describe('TempIndicatorComponent', () => {
  let component: TempIndicatorComponent;
  let fixture: ComponentFixture<TempIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
