class Vampire {
  constructor(name, pet) {
  this.name = name;
  if (pet === undefined) {
     this.pet = "bat";
  } else {
  this.pet = pet;
};
  this.thirsty = true;
};
drink() {
  this.thirsty = false;
};
};















module.exports = Vampire;
