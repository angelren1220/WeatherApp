## Angular Weather App

This Angular-powered weather application provides users with an intuitive interface to view both current weather conditions and a 3-day forecast. It has the capability to automatically detect the user's current location and can also allow manual city entry for weather lookups.

## Features

- Automatic Location Detection: As soon as you open the app, it identifies and displays weather data for your current location.
- Custom City Entry: Want to know the weather somewhere else? Just type in the city's name and get immediate details.
- 3-Day Forecast: Alongside current conditions, view a concise 3-day forecast for any city.

### App View
![App View](https://github.com/angelren1220/WeatherApp/blob/1037bf1f57d91abbf8a92e85836e64755dc70381/screenshots/Screenshot1.png?raw=true)

## Technologies Used

- Angular: Used as the main framework for building the application.
- RxJS: Employed for handling asynchronous data streams.
- OpenStreetMap API: This API aids in geolocation-based city identification.
- WeatherAPI.com: Our primary source for current weather and forecast data.

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone [your-repository-link]
   cd [repository-name]
   ```

2. **Install Dependencies**:

   Make sure you have [Node.js](https://nodejs.org/) and the Angular CLI installed.

   ```bash
   npm install
   ```

3. **Setup Environment Variables**:

   Create a `.env` file in the root directory and add your WeatherAPI key:

   ```
   API_KEY=your_api_key_here
   ```

4. **Start the Development Server**:

   ```bash
   ng serve
   ```

   Open a browser and navigate to `http://localhost:4200/`.

## Usage

1. To view the weather for your current location, simply load the app. It will automatically detect your location and display the weather.
2. To check the weather for a different city, enter the city name in the provided input and click on "Get Weather".
