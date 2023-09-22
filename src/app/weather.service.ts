import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'https://api.weatherapi.com/v1/current.json';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient){}

  getCurrentLocationWeather(lat: number, lon: number) {
    return this.http.get(`${this.apiUrl}?key=${this.apiKey}&q=${lat},${lon}`);
  }  

  getWeather(city: String) {
    return this.http.get(`${this.apiUrl}?key=${this.apiKey}&q=${city}`)
  }
}
