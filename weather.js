class Weather {
  constructor(location) {
    this.location = location;
    this.apiKey = "cf89de67beb84738a07232131210702";
  }

  async getWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.location}`
    );

    return await response.json();
  }

  changeLocation(location) {
    this.location = location;

    return location;
  }
}
