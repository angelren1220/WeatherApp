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


  getWeatherAndForecast(city: String) {
    const weatherObservable = this.http.get(`${this.apiUrl}?key=${this.apiKey}&q=${city}`);
    const forecastObservable = this.http.get(`${this.forecastUrl}?key=${this.apiKey}&q=${city}&days=3`);

    return forkJoin({
      weather: weatherObservable,
      forecast: forecastObservable
    });
  }

  getWeatherIcon(condition: string): string {
    const str = condition.toLocaleLowerCase();
    if (str.includes('sunny')) {
      return 'fas fa-sun';
    } else if (str.includes('rain')) {
      return 'fas fa-cloud-rain';
    } else if (str.includes('snow')) {
      return 'fas fa-snowflake';
    } else if (str.includes('cloud') || str.includes('overcast')) {
      return 'fas fa-cloud';
    } else if (str.includes('clear')){
      return 'fas fa-moon';
    } else if (str.includes('mist') || str.includes('fog')){
      return 'fas fa-smog';
    }

    // Default icon
    return 'fas fa-question';
  }
}
