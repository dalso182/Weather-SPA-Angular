import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCurrentWeatherComponent } from './city-current-weather.component';

describe('CityCurrentWeatherComponent', () => {
  let component: CityCurrentWeatherComponent;
  let fixture: ComponentFixture<CityCurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityCurrentWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
