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
  @Input() city: City;
  @Input() date: Date;
  @Input() tempUnit; // c or f
  @Input() speedUnit; // km/h or m/h
  @Output() cityRemoved = new EventEmitter(); // emits city name when close button is clicked
  currentWeather: CurrentWeather;
  loading = true;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getCityCurrentWeather(this.city.name, this.city.country);
  }

  // Service is used to retrieved current weather
  getCityCurrentWeather(city: string, country: string) {
    this.weatherService.getCityCurrentWeather(city, country).subscribe(
      response => {
        this.currentWeather = response;
        this.loading = false;
      }
    );
  }

  // We emit this event when X button is clicked
  removeCity(name: string) {
    this.cityRemoved.emit(name);
  }
}
