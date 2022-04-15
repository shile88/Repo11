var myStr = "Paragon is the best!";

function useMethods(){
   
    var mySplit = myStr.split("");
    var myReverse = mySplit.reverse().join('');
    var countCharacters = myReverse.split(" ").map(function(element){
        return element.length;
    })
    return {myReverse: myReverse, countCharacters: countCharacters};
}

console.log(useMethods());

module.exports = useMethods;