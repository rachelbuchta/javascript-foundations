class Hobbit {
  constructor(name, age, adult, old) {
    this.name = name;
    this.age = 0;
    this.adult = adult;
    this.old = old;

  }


  celebrateBirthday() {
    this.age ++;
    if(this.age <= 32) {
      this.adult = false;
    } else {
      this.adult = true;
    };
    if(this.age <= 100) {
      this.old = false;
    } else {
      this.old = true;
    }
  };
};










module.exports = Hobbit;
