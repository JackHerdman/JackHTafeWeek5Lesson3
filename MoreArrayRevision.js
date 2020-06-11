// Create an array called pets with the following properties: name, age, species, id, ownerId
let pets = [{
    name: "Rex",
    age: 5,
    species: "Dog",
    id: "cd346959-56af-4410-a2c3-eeeaaa1c3bdb",
    ownerId: "4103b495-1b09-4bb7-9b5b-585177c56cd0"
}, {
    name: "Felix",
    age: 8,
    species: "Cat",
    id: "d9f552b4-11d0-40c8-bbe0-7e2f2abdb6a7",
    ownerId: "e371be91-3d0e-4af7-898f-5b4e3f26c30f"
}, {
    name: "Bruce",
    age: 10,
    species: "Bearded Dragon",
    id: "b16b6ad9-f654-4167-b4e3-8976213630ff",
    ownerId: "ff8d5334-e3dd-432d-8566-d4d88f98365b"
}, {
    name: "Fluffers",
    age: 3,
    species: "Rabbit",
    id: "b76de278-57a9-4acb-a806-996d9a0d36b1",
    ownerId: "4103b495-1b09-4bb7-9b5b-585177c56cd0"
}, {
    name: "Krypto",
    age: 2,
    species: "Dog",
    id: "7ad8f7bb-a03c-4cba-aa54-eac3c12eb3ff",
    ownerId: "3f166d60-b510-411d-b09e-acdca0eeb29e"
}, {
    name: "Alfonso",
    age: 22,
    species: "Alpaca",
    id: "422df487-f34b-437f-83b8-f9644bb710cf",
    ownerId: "ff8d5334-e3dd-432d-8566-d4d88f98365b"
}, {
    name: "Kuzco",
    age: 28,
    species: "Llama",
    id: "6b32a394-9bc3-47d0-b10d-ad536445449d",
    ownerId: "ff8d5334-e3dd-432d-8566-d4d88f98365b"
}, {
    name: "Terrence",
    age: 142,
    species: "Turtle",
    id: "be7e74ef-4124-4dfb-8a38-f5a45216650d",
    ownerId: "e371be91-3d0e-4af7-898f-5b4e3f26c30f"
}];

// Create an array called owners with the following properties: firstName, lastName, id
let owners = [{
    firstName: "Jack",
    lastName: "Herdman",
    id: "ff8d5334-e3dd-432d-8566-d4d88f98365b"
}, {
    firstName: "Felicity",
    lastName: "Frumple",
    id: "e371be91-3d0e-4af7-898f-5b4e3f26c30f"
}, {
    firstName: "Clark",
    lastName: "Kent",
    id: "3f166d60-b510-411d-b09e-acdca0eeb29e"
}, {
    firstName: "Bobbie",
    lastName: "Burns",
    id: "4103b495-1b09-4bb7-9b5b-585177c56cd0"
}];

// Q1 - Write a function that returns a pet given its id
console.log("Question 1 - return pet by ID");

function findPet(id) {
    return pets.find(pet => pet.id == id);
}

console.log(findPet("422df487-f34b-437f-83b8-f9644bb710cf"));
console.log();

// Q2 - Write a function that returns an owner given its id
console.log("Question 2 - return owner by ID");

function findOwner(id) {
    return owners.find(owner => owner.id == id);
}

console.log(findOwner("3f166d60-b510-411d-b09e-acdca0eeb29e"));
console.log();

// Q3 - Write a function that returns the all the pets for an owner
console.log("Question 3 - return pets owned by an owner ID");

function petsByOwner(id) {
    return pets.filter(pet => pet.ownerId == id);
}

console.table(petsByOwner("ff8d5334-e3dd-432d-8566-d4d88f98365b"));
console.log();

// Q4 - Write a function that returns the number of pets for each owner: return array should be an object with property ownerId and numberOfPets
console.log("Question 4 - return array with ownerID and number of pets");

function numberOfPets() {
    let numberOfPets = [];
    for (let owner of owners) {
        let pets = petsByOwner(owner.id)
        numberOfPets.push({ ownerId: owner.id, numberOfPets: pets.length })
    }
    return numberOfPets;
}
// function getPetCountByOwner(){
//     return owners.map(owner => ({ownerId: owner.id, numberOfPets: petsByOwner(owner.id).length}));
   

console.table(numberOfPets());
console.log();


// Q5 - Write a function that returns all the names of the pets in order of their owner's last name
console.log("Question 5 -return all pet names by owners last name");

function sortPets() {
    surnamePets = pets.map(pet => ({
        name: pet.name,
        surname: (findOwner(pet.ownerId)).lastName
    }))
    surnamePets.sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => a.surname.localeCompare(b.surname));
    console.log(surnamePets)
    return surnamePets.map(pet => pet.name)
}
console.table(sortPets());
console.log();