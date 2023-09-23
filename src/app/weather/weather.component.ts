import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { tap, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  forecastData: any;
  city: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCurrentCity();
  }

  getCurrentCity() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.weatherService.getCityFromCoordinates(latitude, longitude).subscribe((data) => {
          this.city = data.address.city;
          // Fetch weather after identifying the city
          this.getWeatherAndForecast();
        });
      }, (error) => {
        console.error('Error obataining geolocation', error);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  // getWeather() {
  //   this.weatherService.getWeather(this.city).subscribe((data) => {
  //     this.weatherData = data;
  //   })
  // }

  // getForecast() {
  //   this.weatherService.getForecast(this.city).subscribe((data) => {
  //     this.forecastData = data;
  //   });
  // }

  getWeatherAndForecast() {
    this.weatherService.getWeatherAndForecast(this.city).subscribe((data) => {
      this.weatherData = data.weather;
      this.forecastData = data.forecast;
    });

  }


}
