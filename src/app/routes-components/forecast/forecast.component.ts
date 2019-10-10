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
  loading = true;
  forecast: ForecastWeather;
  groupedForecast = [];
  city = 'amsterdam';
  country = 'NL';
  tempUnit = 'c';
  speedUnit = 'km/h';

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.city = params.get('city');
      this.country = params.get('country');
      this.getCityForecastWeather(this.city, this.country);

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
        console.log('grouped', this.groupedForecast);
        this.loading = false;
      }
    );
  }


}
