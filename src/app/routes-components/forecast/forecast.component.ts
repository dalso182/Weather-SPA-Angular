import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {ForecastWeather} from '../../interfaces/forecast-weather';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  loading = true; // spinner flag
  forecast: ForecastWeather; // to store server response
  groupedForecast = []; // to group days per date
  city = 'amsterdam'; // default city
  country = 'NL'; // default country
  tempUnit = 'c'; // default temp unit
  speedUnit = 'km/h'; // default speed unit

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // we look for the city and country in the url and replace the default values
    this.route.paramMap.subscribe(params => {
      this.city = params.get('city');
      this.country = params.get('country');
      this.getCityForecastWeather(this.city, this.country); // we get the forecast for the city

    });
  }

  getCityForecastWeather(city: string, country: string) {
    this.weatherService.getCityForecastWeather(city, country).subscribe(
      response => {
        this.forecast = response;
        for (const forecast of this.forecast.list) {
          const date = forecast.dt_txt.split(' ')[0];
          if (!this.groupedForecast[date]) {
            this.groupedForecast[date] = [];
          }
          this.groupedForecast[date].push(forecast);

        }
        this.loading = false;
      }
    );
  }


}
