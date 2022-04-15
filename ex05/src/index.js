var monitorListArray = ["Apple", "Peach", "Berry"];


function myMonitorsFunction(){
    var monitorsList = [];
    for (var i = 0; i < monitorListArray.length; i++){
        monitorsList.push([monitorListArray[i], i + 1]);
        
    }
    return monitorsList;
}

console.log(myMonitorsFunction());

module.exports = myMonitorsFunction;