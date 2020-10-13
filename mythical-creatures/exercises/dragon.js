class Dragon {
  constructor(name, rider, color, numberOfMeals) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    if (numberOfMeals === undefined) {
      this.numberOfMeals = 0;
    } else {
      this.numberOfMeals = numberOfMeals;
    };
  };

  eat() {
    this.numberOfMeals = this.numberOfMeals + 1
    if (this.numberOfMeals >= 3) {
      this.hungry = false;
    };
  };
};


module.exports = Dragon;
