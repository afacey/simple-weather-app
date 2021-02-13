const storage = new Storage();
const weatherLocation = storage.getLocation();
const weather = new Weather(weatherLocation);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

document.getElementById("w-locationForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const newLocationValue = document.getElementById("w-locationInput").value;

  if (newLocationValue) {
    weather.changeLocation(newLocationValue);
    getWeather();
    storage.setLocation(newLocationValue);
  }
});

async function getWeather() {
  try {
    const weatherData = await weather.getWeather();

    if (weatherData.error) {
      throw new Error(
        `Unable to change location - ${weatherData.error.message}`
      );
    }
    document.getElementById("error").textContent = "";

    ui.paint(weatherData);
  } catch (error) {
    document.getElementById("error").textContent = error;
    storage.setLocation(null);
    console.log(error);
  }
}
