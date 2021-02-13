class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.condition = document.getElementById("w-condition");
    this.temp = document.getElementById("w-temp");
    this.img = document.getElementById("w-img");
    this.feelsLike = document.getElementById("w-feelsLike");
  }

  paint(weatherData) {
    const { name, region } = weatherData.location;
    const {
      condition,
      temp_c,
      temp_f,
      feelslike_c,
      feelslike_f,
    } = weatherData.current;

    this.location.textContent = `${name}, ${region}`;
    this.condition.textContent = `Condition: ${condition.text}`;
    this.temp.textContent = `Temp: ${temp_c} C (${temp_f} F)`;
    this.img.setAttribute("src", `http:${condition.icon}`);
    this.feelsLike.textContent = `Feels like: ${feelslike_c} C (${feelslike_f} F)`;
  }
}
