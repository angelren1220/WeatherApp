import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  forecastData: any;
  city: string = '';
  searchHistory: { city: string, weatherData: any, forecastData: any }[] = [];

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {

    this.getCurrentCity();
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      this.searchHistory = JSON.parse(savedHistory);
    }    
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

  getWeatherAndForecast() {
    this.weatherService.getWeatherAndForecast(this.city).subscribe((data) => {
      this.weatherData = data.weather;
      this.forecastData = data.forecast;

      // search history
      const newResult = {
        city: this.city,
        weatherData: data.weather,
        forecastData: data.forecast
      };
      this.searchHistory.push(newResult);
      localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    });
  }

  loadCityWeather(city: string) {
    this.city = city;
    this.getWeatherAndForecast();
  }
  

}
