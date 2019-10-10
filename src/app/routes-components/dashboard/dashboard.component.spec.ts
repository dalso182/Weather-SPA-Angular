import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../modules/material/material.module';
import {WeatherService} from '../../services/weather.service';
import {CityService} from '../../services/city.service';
import {CityCurrentWeatherComponent} from '../../components/city-current-weather/city-current-weather.component';
import {CitySearchComponent} from '../../components/city-search/city-search.component';
import {ControlsComponent} from '../../components/controls/controls.component';
import {TempPipe} from '../../pipes/temp.pipe';
import {SpeedPipe} from '../../pipes/speed.pipe';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {City} from '../../interfaces/city';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, ControlsComponent, CitySearchComponent,
        CityCurrentWeatherComponent, TempPipe, SpeedPipe],
      imports: [BrowserAnimationsModule, FormsModule, MaterialModule, ReactiveFormsModule, RouterModule, HttpClientTestingModule],
      providers: [WeatherService, CityService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a city', () => {
    const mockedCity = {name: 'New York'} as City;
    component.selectedCities = [] as City[];
    expect(component.selectedCities.length).toBe(0);
    component.addCity(mockedCity);
    expect(component.selectedCities.length).toBe(1);
  });

  it('should remove a city', () => {
    component.selectedCities = [{name: 'New York'}] as City[];
    expect(component.selectedCities.length).toBe(1);
    component.removeCity('New York');
    expect(component.selectedCities.length).toBe(0);
  });

});
