import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCurrentWeatherComponent } from './city-current-weather.component';
import {MaterialModule} from '../../modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {TempPipe} from '../../pipes/temp.pipe';
import {SpeedPipe} from '../../pipes/speed.pipe';
import {RouterModule} from '@angular/router';
import {WeatherService} from '../../services/weather.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {City} from '../../interfaces/city';

describe('CityCurrentWeatherComponent', () => {
  let component: CityCurrentWeatherComponent;
  let fixture: ComponentFixture<CityCurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityCurrentWeatherComponent, TempPipe, SpeedPipe ],
      imports: [MaterialModule, RouterModule, HttpClientTestingModule],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCurrentWeatherComponent);
    component = fixture.componentInstance;
    component.city = {} as City;
    component.city.name = 'test';
    component.city.country = 'test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on delete button click', async(() => {
    spyOn(component.cityRemoved, 'emit');
    component.removeCity('city');
    fixture.detectChanges();
    expect(component.cityRemoved.emit).toHaveBeenCalledWith('city');
  }));
});
