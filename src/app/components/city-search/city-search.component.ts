import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {City} from '../../interfaces/city';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {
  @Input() citiesOptions: City[];
  @Output() onCitySelected = new EventEmitter();
  cityFormControl = new FormControl();
  filteredOptions: Observable<City[]>;
  selectedCity: City;
  error = false;


  ngOnInit() {
    // this.citiesOptions.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.filteredOptions = this.cityFormControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  addCity() {
    this.selectedCity = this.citiesOptions.find(city => city.name === this.cityFormControl.value);
    // if the type string was not found in the options, show error, else emit the selected city
    if (!this.selectedCity) {
      this.error = true;
    } else {
      this.error = false;
      this.cityFormControl.setValue('');
      this.onCitySelected.emit(this.selectedCity); // we emit the selected city
    }
    console.log('selected', this.selectedCity);
  }

  _filter(value: string): City[] {
    const filterValue = value.toLowerCase();
    return this.citiesOptions.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
