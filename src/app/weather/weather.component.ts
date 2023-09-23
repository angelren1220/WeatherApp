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

  constructor(private weatherService: WeatherService) { }

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
  

  getWeatherIcon(condition: string): string {
    if (condition.toLowerCase().includes('sunny')) {
      return 'fas fa-sun';
    } else if (condition.toLowerCase().includes('rain')) {
      return 'fas fa-cloud-rain';
    } else if (condition.toLowerCase().includes('snow')) {
      return 'fas fa-snowflake';
    } else if (condition.toLowerCase().includes('cloud' || 'overcast')) {
      return 'fas fa-cloud';
    } else if (condition.toLocaleLowerCase().includes('clear')){
      return 'fas fa-moon';
    } else if (condition.toLocaleLowerCase().includes('mist' || 'fog')){
      return 'fas fa-smog';
    }

    // Default icon
    return 'fas fa-question';
  }


  loadCityWeather(city: string) {
    this.city = city;
    this.getWeatherAndForecast();
  }
  

}
