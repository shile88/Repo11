var myNestedArray = [[]];

function myNestedFunction(arr){

    myNestedArray[0] = [arr[0], arr[2]];
    myNestedArray.push([arr[1], arr[3]]);

    return myNestedArray;
}

console.log(myNestedFunction(['Toblerone', 'Milka', 5,  3]));
module.exports = myNestedFunction;