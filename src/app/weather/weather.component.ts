import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

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

  ngOnInit(): void { }

  getCurrentCity() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.weatherService.getCityFromCoordinates(latitude, longitude).subscribe((data) => {
          this.city = data.address.city;
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
    })
  }

  getForecast() {
    this.weatherService.getForecast(this.city).subscribe((data) => {
      this.forecastData = data;
    });
  }

}
