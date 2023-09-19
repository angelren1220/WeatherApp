import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
    })
  }
}
