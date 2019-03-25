//funcion para calcular el cantidad de senadores por partido
function glance (){
    
    var members;
    var table;
    
    table = "";        
    members = data.results[0].members;
    statistics.votesRepublicans = 0;
    statistics.votesDemocrats = 0;
    statistics.votesIndependents = 0;
    statistics.votestotal = 0;

    //recorro el array del senado y con un switch saco la cantidad de senadores por partido y sumo los porcentajes de votos por partido
    for(var i=0;i<members.length;i++){
        
        statistics.votestotal += members[i].votes_with_party_pct;

        switch(members[i].party){

            case "R": 
            statistics.numRepublicans += 1;
            statistics.votesRepublicans += members[i].votes_with_party_pct;
            break;
            case "D":
            statistics.numDemocrats += 1;
            statistics.votesDemocrats += members[i].votes_with_party_pct;
            break;
            case "I":
            statistics.numIndependents += 1;
            statistics.votesIndependents += members[i].votes_with_party_pct;
            break;
        }
        
    }
    
    //calculo la el porcentaje de votos por partido
    statistics.votesRepublicans = statistics.votesRepublicans/statistics.numRepublicans;
    
    statistics.votesDemocrats = statistics.votesDemocrats/statistics.numDemocrats;
    
    statistics.votesIndependents = statistics.votesIndependents/statistics.numIndependents;
    
    //paso el porcenaje a solo 2 decimales
    statistics.votesRepublicans = statistics.votesRepublicans.toFixed(2);
    
    statistics.votesDemocrats = statistics.votesDemocrats.toFixed(2);
    
    statistics.votesIndependents = statistics.votesIndependents.toFixed(2);
    
    //porcentaje total
    statistics.votestotal = statistics.votestotal/members.length;
    
    //porcentaje total con solo 2 decimales
    statistics.votestotal = statistics.votestotal.toFixed(2);
    
    console.log(statistics.numDemocrats);
    console.log(statistics.numIndependents);
    console.log(statistics.numRepublicans);
    console.log(statistics.votesRepublicans);
    console.log(statistics.votesDemocrats);
    console.log(statistics.votesIndependents);
    
    console.log(statistics.votestotal);
    
    //muestro en una tabla que vinculare al html
    table = "<tr>"+
    "<th>Party</th>"+
    "<th>No. of Reps</th>"+
    "<th>% voted w/party</th>"+
    "</tr>"+
    "<tr>"+
    "<td>Democrats</td>"+
    "<td>"+statistics.numDemocrats+
    "</td>"+
    "<td>"+statistics.votesDemocrats+
    "</td>"+
    "</tr>"+
    "<tr>"+
    "<td>Republicans</td>"+
    "<td>"+statistics.numRepublicans+
    "</td>"+
    "<td>"+statistics.votesRepublicans+
    "</td>"+
    "</tr>"+
    "<tr>"+
    "<td>Independents</td>"+
    "<td>"+statistics.numIndependents+
    "</td>"+
    "<td>"+statistics.votesIndependents+
    "</td>"+
    "</tr>"+
    "<tr>"+
    "<td>Total</td>"+
    "<td>"+members.length+"</td>"+
    "<td>"+statistics.votestotal+
    "</td>"+
    "</tr>"; 
    
    return table;
}

//funcion para tomar los 10 de menor lealtad y mostrarlos en una tabla
function least (){
    
    var members;
    var least;
    var porcent;
    var tableLeast;
    
    tableLeast = "<tr>"+
    "<th>Name</th>"+
    "<th>No. Party Votes</th>"+
    "<th>% Party Votes</th>"+
    "</tr>";
    members = data.results[0].members;
    //calculamos el 10% de senadores
    porcent = members.length*10/100;
    var porcent = parseInt(porcent);
    
    //ordenamos el array con el valor de % de votos 
    console.log(members.sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct}));
    
    //insertamos el 10% que queremos en nuestro array de json
    statistics.leastLoyal = members.slice(0, porcent);
    
    console.log(statistics.leastLoyal);
    
    //recorremos el array del 10% que queremos para insertarlo en una tabla
    for(var i = 0;i<statistics.leastLoyal.length;i++){
        
      /*condicion para tomar o no el middle name */ if(statistics.leastLoyal[i].middle_name == null){
            
            tableLeast += "<tr>"+
            "<td>"+statistics.leastLoyal[i].first_name+statistics.leastLoyal[i].last_name+"</td>"+
            "<td>"+statistics.leastLoyal[i].total_votes+"</td>"+
            "<td>"+statistics.leastLoyal[i].votes_with_party_pct+"</td>"+
            "</tr>";
        }else{
            
            tableLeast += "<tr>"+
            "<td>"+statistics.leastLoyal[i].first_name+statistics.leastLoyal[i].middle_name+statistics.leastLoyal[i].last_name+"</td>"+
            "<td>"+statistics.leastLoyal[i].total_votes+"</td>"+
            "<td>"+statistics.leastLoyal[i].votes_with_party_pct+"</td>"+
            "</tr>";
        }
    }  
    
    console.log(tableLeast);
    
    return tableLeast;
}

//funcion para tomar los 10 de mayor lealtad y mostrarlos en una tabla
function most (){
    
    var members;
    var most;
    var porcent;
    var tableMost;
    
    tableMost = "<tr>"+
    "<th>Name</th>"+
    "<th>No. Party Votes</th>"+
    "<th>% Party Votes</th>"+
    "</tr>";
    members = data.results[0].members;
    //calculamos el 10% de senadores
    porcent = members.length*10/100;
    var porcent = parseInt(porcent);
    
    //ordenamos el array con el valor de % de votos 
    console.log(members.sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct}));
    
    //insertamos el 10% que queremos en nuestro array de json
    statistics.mostLoyal = members.slice(-porcent);
    
    console.log(statistics.mostLoyal);
    
    //recorremos el array del 10% que queremos para insertarlo en una tabla
    for(var i = 0;i<statistics.mostLoyal.length;i++){
        
       /*condicion para tomar o no el middle name */ if(statistics.mostLoyal[i].middle_name == null){
            
            tableMost += "<tr>"+
            "<td>"+statistics.mostLoyal[i].first_name+statistics.mostLoyal[i].last_name+"</td>"+
            "<td>"+statistics.mostLoyal[i].total_votes+"</td>"+
            "<td>"+statistics.mostLoyal[i].votes_with_party_pct+"</td>"+
            "</tr>";
        }else{
            
            tableMost += "<tr>"+
            "<td>"+statistics.mostLoyal[i].first_name+statistics.mostLoyal[i].middle_name+statistics.mostLoyal[i].last_name+"</td>"+
            "<td>"+statistics.mostLoyal[i].total_votes+"</td>"+
            "<td>"+statistics.mostLoyal[i].votes_with_party_pct+"</td>"+
            "</tr>";
        }
    }
    
    console.log(tableMost);
            
    return tableMost;
}

//vinculo con el html funcion glance
document.getElementById("glance-data").innerHTML = glance();

//vinculo con el html funcion least
document.getElementById("least-data").innerHTML = least();

//vinculo con el html funcion most
document.getElementById("most-data").innerHTML = most();









