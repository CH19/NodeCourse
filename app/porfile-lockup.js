// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    if(contacts.some(e => e.firstName == name)){
        const indexName = contacts.map(e => e.firstName).indexOf(name);
        if(contacts[indexName][prop]){
            return contacts[indexName][prop]
        }else{
            return 'No such property'
        }
    }else{
        return 'No such contact';
    }
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");
  console.log(contacts.some(e => e.firstName == 'Akira'))
  console.log(lookUpProfile('Pedro', 'likes'));