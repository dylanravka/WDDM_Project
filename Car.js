class Car {
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    changeColor(_color) {
      this.color = _color;
    }
  }

var make = "BMW";
var model = "M3";
var year = "2019";
var color = "Silver";