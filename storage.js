class Storage {
  constructor() {
    this.location;
    this.defaultLocation = "Toronto";
  }

  getLocation() {
    this.location = localStorage.getItem("location");

    return this.location !== "null" ? this.location : this.defaultLocation;
  }

  setLocation(location) {
    localStorage.setItem("location", location);
  }
}
