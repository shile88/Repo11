var myArr = [2, 5, 9, 8, 1];

function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(var k = 0; k < arr.length; k++){
            if(arr[k] > arr[k + 1]){
                var newArr = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = newArr;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(myArr));

module.exports = bubbleSort;