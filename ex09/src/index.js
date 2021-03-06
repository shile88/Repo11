function myMutation(arr){
    var allLetters = true;
    for(var i = 0; i < arr[1].length; i++) {
        if(!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())) {
            allLetters = false;
        }
    }
    return allLetters;
}

console.log(myMutation(['hello', 'hey']));
console.log(myMutation(['hello', 'Hello']));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;