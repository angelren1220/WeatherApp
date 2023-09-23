import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private cityUrl = 'https://nominatim.openstreetmap.org/reverse?format=json'
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';
  private forecastUrl = 'https://api.weatherapi.com/v1/forecast.json';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient){}
  
  getCityFromCoordinates(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.cityUrl}&lat=${lat}&lon=${lon}`);
  } 

  // getWeather(city: String) {
  //   return this.http.get(`${this.apiUrl}?key=${this.apiKey}&q=${city}`)
  // }

  // getForecast(city: String) {
  //   return this.http.get(`${this.forecastUrl}?key=${this.apiKey}&q=${city}&days=3`);
  // }

  getWeatherAndForecast(city: String) {
    const weatherObservable = this.http.get(`${this.apiUrl}?key=${this.apiKey}&q=${city}`);
    const forecastObservable = this.http.get(`${this.forecastUrl}?key=${this.apiKey}&q=${city}&days=3`);

    return forkJoin({
      weather: weatherObservable,
      forecast: forecastObservable
    });
  }
}
