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
  @Input() citiesOptions: City[]; // available cities
  @Output() citySelected = new EventEmitter(); // emits selected city
  cityFormControl = new FormControl();
  filteredOptions: Observable<City[]>;
  selectedCity: City; // selected city from options
  error = false; // flag to show/hide error message when trying to add non existen city


  ngOnInit() {
    this.filteredOptions = this.cityFormControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  // this method is used to process when a user clicks the add button, if the city is valid it emits the city name to be used by the
  // parent component
  addCity() {
    this.selectedCity = this.citiesOptions.find(city => city.name === this.cityFormControl.value);
    // if the type string was not found in the options, show error, else emit the selected city
    if (!this.selectedCity) {
      this.error = true;
    } else {
      this.error = false;
      this.cityFormControl.setValue('');
      this.citySelected.emit(this.selectedCity); // we emit the selected city
    }
  }
  // filters the array of cities with the value input in the field
  _filter(value: string): City[] {
    const filterValue = value.toLowerCase();
    return this.citiesOptions.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
