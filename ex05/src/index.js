var myPetsArray = [
  {
    animalType: "Dog",
    name: "Pujdo",
  },
  {
    animalType: "Cat",
    name: "Maca",
  },
  {
    animalType: "Bird",
    name: "Tweety",
  },
];

function myPetsFunction(pets) {
  return myPetsArray[pets].name;
}

console.log(myPetsFunction(1));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;