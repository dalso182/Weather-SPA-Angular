import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {City} from '../interfaces/city';
import {catchError} from 'rxjs/operators';
import {CurrentWeather} from '../interfaces/current-weather';
import {ForecastWeather} from '../interfaces/forecast-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCityCurrentWeather(city, country): Observable<CurrentWeather[]> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=04ccf8a2d1e915c732630e2cf8bc4ed4`;
    return this.http.get<CurrentWeather[]>(url).pipe(
      catchError(this.handleError<CurrentWeather[]>('getCityCurrentWeather', []))
    );
  }

  getCityForecastWeather(city, country): Observable<ForecastWeather[]> {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=04ccf8a2d1e915c732630e2cf8bc4ed4`;
    return this.http.get<ForecastWeather[]>(url).pipe(
      catchError(this.handleError<ForecastWeather[]>('getCityForecastWeather', []))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
