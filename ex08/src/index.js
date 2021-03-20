var contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    number: "12365495208",
    likes: ["C", "C++", "C#"],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    number: "4568295761",
    likes: ["Python", "Ewift", "R"],
  },
  {
    firstName: "Richard",
    lastName: "Roe",
    number: "6938257149",
    likes: ["React", "Angular", "Vue"],
  },
  {
    firstName: "Jane",
    lastName: "Roe",
    number: "unknown",
    likes: ["JavaScript", "Node", "HTML & CSS"],
  },
];

function lookUpProfile(name, prop) {
  profiles = [...contacts];
  for (let i = 0; i < profiles.length; i++) {
    if (profiles[i].firstName == name) {
      if (profiles[i][prop] != undefined) {
        return profiles[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("John", "likes"));
console.log(lookUpProfile("Jane", "lastName"));
console.log(lookUpProfile("Richard", "likes"));
console.log(lookUpProfile("Rob", "number"));
console.log(lookUpProfile("Rob", "JavaScript"));
console.log(lookUpProfile("John", "address"));

module.exports = lookUpProfile;
