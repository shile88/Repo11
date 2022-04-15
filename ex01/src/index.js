var myArr = [2, 4, 0, 8, 10]

function myArrayFunction(myItems){
    myArr[2] = myItems;
    return myItems;
}

console.log(myArrayFunction(6));

module.exports = myArrayFunction;

