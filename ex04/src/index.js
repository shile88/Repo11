var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61],
];

function myArrayFunction(){
    var arr = [];
    for (var i = 0; i < temps.length; i++){ 
        var sum = 0;
        for (var k = 0; k < temps[i].length; k++){
            sum += temps[i][k];
        }
        var avg = sum/temps[i].length;
        arr.push(avg);
    }
    return arr;
}

console.log(myArrayFunction());

module.exports = myArrayFunction;


