## Angular Weather App

This is a weather application built with Angular that allows users to view the current weather and forecast for their location or a specified city.

## Features

- View current weather details for any city
- View a 3-day forecast for any city
- Automatically detect and display weather for the user's current location

## Technologies Used

- Angular
- RxJS
- OpenStreetMap API (for geolocation-based city detection)
- WeatherAPI.com (for fetching current weather and forecast)

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
