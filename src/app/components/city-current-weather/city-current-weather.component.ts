import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {City} from '../../interfaces/city';
import {CurrentWeather} from '../../interfaces/current-weather';
import {WeatherService} from '../../services/weather.service';


@Component({
  selector: 'app-city-current-weather',
  templateUrl: './city-current-weather.component.html',
  styleUrls: ['./city-current-weather.component.scss']
})
export class CityCurrentWeatherComponent implements OnInit {
  @Input() city: City; //
  @Input() date: Date; //
  @Input() tempUnit;
  @Input() speedUnit;
  @Output() onCityRemoved = new EventEmitter();
  currentWeather: CurrentWeather;
  loading = true;
  constructor(private weatherService: WeatherService ) { }

  ngOnInit() {
    this.getCityCurrentWeather(this.city.name, this.city.country);
  }

  getCityCurrentWeather(city: string, country: string) {
    this.weatherService.getCityCurrentWeather(city, country).subscribe(
      response => {
        this.currentWeather = response;
        console.log('current weather', this.currentWeather);
        this.loading = false;
      }
    );
  }

  removeCity(name: string) {
    this.onCityRemoved.emit(name);
  }
}
