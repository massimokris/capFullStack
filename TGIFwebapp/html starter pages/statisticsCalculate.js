function num (){
    
    var members;
    var table;
    
    table = "<tr><th>numero de senadores</th></tr>";        
    members = data.results[0].members;

    for(var i=0;i<members.length;i++){

        switch(members[i].party){

            case "R": 
            statistics.numRepublicans+= 1;
            break;
            case "D":
            statistics.numDemocrats+= 1;
            break;
            case "I":
            statistics.numIndependents+= 1;
            break;
        }
    }
            
console.log(statistics.numRepublicans);
console.log(statistics.numDemocrats);
console.log(statistics.numIndependents);
    
    table = "<tr><th>numero de senadores</th></tr>"+
    "<tr><td>"+statistics.numRepublicans+"</td></tr>"+
    "<tr><td>"+statistics.numDemocrats+"</td></tr>"+
    "<tr><td>"+statistics.numIndependents+"</td></tr>"; 
    
    return table;
}



document.getElementById("num-data").innerHTML = num();