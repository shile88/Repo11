var myPetsArray = ["Dog", "Cat"];


function myArrayFunction(myPets){
    myPets.push("Bird", "Fish");
    var myNewPets = myPets;
    var firstPet = myNewPets[0];
    var lastPet = myNewPets[myNewPets.length-1];
    myNewPets.unshift("Lion");
    myNewPets.splice(1, 1);
    myNewPets.splice(3, 1);
    

    return myNewPets;
}

console.log(myArrayFunction(myPetsArray));

module.exports = myArrayFunction;