var str = "Paragon";

function myReverse(){
    var string = "";
    for(var i = str.length - 1; i >= 0; i--){
        string += str[i];
    }
    return string;
}

console.log(myReverse());

module.exports = myReverse;