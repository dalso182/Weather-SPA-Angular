import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchComponent } from './city-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../modules/material/material.module';
import {ControlsComponent} from '../controls/controls.component';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterModule} from '@angular/router';
import {City} from '../../interfaces/city';

describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySearchComponent ],
      imports: [ReactiveFormsModule, MaterialModule, FormsModule, RouterModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    component.citiesOptions = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set error when non existent city is added', () => {
    component.cityFormControl.setValue('none')
    expect(component.error).toBeFalsy();
    component.addCity();
    expect(component.error).toBeTruthy();
  });

  it('should emit the city being added when found in the options', () => {
    const mockedCity = {name: 'New York'} as City;
    spyOn(component.citySelected, 'emit');
    component.citiesOptions = [mockedCity] as City[];
    component.cityFormControl.setValue('New York')
    component.addCity();
    expect(component.citySelected.emit).toHaveBeenCalledWith(mockedCity);
  });

  it('should return a lower amount of cities when valid filter is applied', () => {
    const mockedCities = [
      {name: 'New York'},
      {name: 'London'},
      {name: 'Amsterdam'}] as City[];
    const filteredCities = component._filter('new');
    expect(filteredCities.length).toBeLessThan(mockedCities.length);
  });

});
