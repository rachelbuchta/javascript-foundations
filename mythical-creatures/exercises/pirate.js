class Pirate {
  constructor(name, job, cursed, booty) {
    this.name = name
    if (this.job === job) {
      this.job = "scallywag";
    } else {
      this.job = job;
    }
    this.cursed = false;
    this.booty = 0;
  }

  robShip() {
    var x = 100;
    this.booty = this.booty + x++;
    return 'YAARRR!'
  }
}





module.exports = Pirate;
