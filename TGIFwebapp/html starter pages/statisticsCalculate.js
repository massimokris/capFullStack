//funcion para calcular el cantidad de senadores por partido
function glance (){
    
    var members;
    var table;
        
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
    
    //agrego una condicion para que muestre el valor original cuando es 0
    if(statistics.votesIndependents == 0){
        
        statistics.votesIndependents = statistics.votesIndependents
    }else{
        
       statistics.votesIndependents = statistics.votesIndependents/statistics.numIndependents;
       
       statistics.votesIndependents = statistics.votesIndependents.toFixed(2);
    }
    
    //paso el porcenaje a solo 2 decimales
    statistics.votesRepublicans = statistics.votesRepublicans.toFixed(2);
    
    statistics.votesDemocrats = statistics.votesDemocrats.toFixed(2);
    
    //calculo porcentaje total
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
    
    //retorno la tabla de miembros de un vistazo
    return table;
}

//funcion para tomar los 10 de menor lealtad y mostrarlos en una tabla
function leastLoyal (){
    
    var members;
    var least;
    var porcent;
    var tableLeastLoyal;
    
    //inicializamos la variable con las cabeceras de la tabla
    tableLeastLoyal= "<tr>"+
    "<th>Name</th>"+
    "<th>No. Party Votes</th>"+
    "<th>% Party Votes</th>"+
    "</tr>";
    
    //asignamos a la variable un objeto json
    members = data.results[0].members;
    
    //calculamos el 10% de senadores
    porcent = Math.floor(members.length*10/100);
    
    //ordenamos el array con el valor de % de votos 
    console.log(members.sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct}));
    
    //insertamos el 10% que queremos en nuestro array de json en este caso el 10% menor
    statistics.leastLoyal = members.slice(0, porcent);
    
    console.log(statistics.leastLoyal);
    
    //recorremos el array del 10% que queremos para insertarlo en una tabla
    for(var i = 0;i < statistics.leastLoyal.length;i++){
        
      /*condicion para tomar o no el middle name */ if(statistics.leastLoyal[i].middle_name == null){
            
            tableLeastLoyal+= "<tr>"+
            "<td>"+statistics.leastLoyal[i].first_name+statistics.leastLoyal[i].last_name+"</td>"+
            "<td>"+statistics.leastLoyal[i].total_votes+"</td>"+
            "<td>"+statistics.leastLoyal[i].votes_with_party_pct+"</td>"+
            "</tr>";
        }else{
            
            tableLeastLoyal+= "<tr>"+
            "<td>"+statistics.leastLoyal[i].first_name+statistics.leastLoyal[i].middle_name+statistics.leastLoyal[i].last_name+"</td>"+
            "<td>"+statistics.leastLoyal[i].total_votes+"</td>"+
            "<td>"+statistics.leastLoyal[i].votes_with_party_pct+"</td>"+
            "</tr>";
        }
    }  
    
    console.log(tableLeastLoyal);
    
    //retorno la tabla lista de los menos leales
    return tableLeastLoyal;
}

//funcion para tomar los 10 de mayor lealtad y mostrarlos en una tabla
function mostLoyal (){
    
    var members;
    var porcent;
    var tableMostLoyal;
    
    //inicializamos la variable con las cabeceras de la tabla
    tableMostLoyal = "<tr>"+
    "<th>Name</th>"+
    "<th>No. Party Votes</th>"+
    "<th>% Party Votes</th>"+
    "</tr>";
    
    //asignamos a la variable un objeto json
    members = data.results[0].members;
    
    //calculamos el 10% de senadores
    porcent = Math.floor(members.length*10/100);
    
    //ordenamos el array con el valor de % de votos 
    console.log(members.sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct}));
    
    //insertamos el 10% que queremos en nuestro array de json en este caso el 10% mayor
    statistics.mostLoyal = members.slice(-porcent);
    
    console.log(statistics.mostLoyal);
    
    //recorremos el array del 10% que queremos para insertarlo en una tabla
    for(var i = 0;i < statistics.mostLoyal.length;i++){
        
       /*condicion para tomar o no el middle name */ if(statistics.mostLoyal[i].middle_name == null){
            
            tableMostLoyal += "<tr>"+
            "<td>"+statistics.mostLoyal[i].first_name+statistics.mostLoyal[i].last_name+"</td>"+
            "<td>"+statistics.mostLoyal[i].total_votes+"</td>"+
            "<td>"+statistics.mostLoyal[i].votes_with_party_pct+"</td>"+
            "</tr>";
        }else{
            
            tableMostLoyal += "<tr>"+
            "<td>"+statistics.mostLoyal[i].first_name+statistics.mostLoyal[i].middle_name+statistics.mostLoyal[i].last_name+"</td>"+
            "<td>"+statistics.mostLoyal[i].total_votes+"</td>"+
            "<td>"+statistics.mostLoyal[i].votes_with_party_pct+"</td>"+
            "</tr>";
        }
    }
    
    console.log(tableMostLoyal);
     
    //retorno la tabla lista de los mas leales
    return tableMostLoyal;
}

//funcion para mostrar el de mayor concurrencia al congreso
function mostAttendance (){
    
    var members;
    var tableMostAttendance;
    var porcent;
    
    //inicializamos la tabla con los nombres de cabecera
    tableMostAttendance = "<tr>"+
    "<th>Name</th>"+
    "<th>No. Missed Votes</th>"+
    "<th>% Missed</th>"+
    "</tr>";
    
    //asignamos a la variable un objeto json
    members = data.results[0].members;
    
    //calculamos el 10% de senadores
    porcent = Math.floor(members.length*10/100);
    
    //ordenamos el array de menor a mayor en base a los votos perdidos 
    console.log(members.sort(function (a, b){ return a.missed_votes - b.missed_votes}));
    
    //asignamos a nuestro objeto json los que menos faltas tienes es decir los que mas attendance tienen
    statistics.mostAttendance = members.slice(-porcent);
    
    console.log(statistics.mostAttendance);
    
    //recorremo el objeto json para ir sacando datos en base a condiciones que colocaremos
    for(var i = 0;i < statistics.mostAttendance.length; i++){
        
       /* condicion para tomar o no el middle name */ 
        if(statistics.mostAttendance[i].middle_name == null){
            
            tableMostAttendance += "<tr>"+
            "<td>"+statistics.mostAttendance[i].first_name+statistics.mostAttendance[i].last_name+"</td>"+
            "<td>"+statistics.mostAttendance[i].missed_votes+"</td>"+
            "<td>"+statistics.mostAttendance[i].missed_votes_pct+"</td>"+
            "</tr>";
        }else{
            
            tableMostAttendance += "<tr>"+
            "<td>"+statistics.mostAttendance[i].first_name+statistics.mostAttendance[i].middle_name+statistics.mostAttendance[i].last_name+"</td>"+
            "<td>"+statistics.mostAttendance[i].missed_votes+"</td>"+
            "<td>"+statistics.mostAttendance[i].missed_votes_pct+"</td>"+
            "</tr>";
        }
    }
    
    console.log(tableMostAttendance);
    
    //retornamos la tabla ya armada para luego mostrarla en el html
    return tableMostAttendance;
    
}

//funcion para calcular en de menor concurrencia al congreso
function leastAttendance (){
    
    var members;
    var porcent;
    var tableLeastAttendance;
    
    //asignamos a la variable un objeto json
    members = data.results[0].members;
    
    //inicializamos la tabla con las cabeceras 
    tableLeastAttendance = "<tr>"+
    "<th>Name</th>"+
    "<th>No. Missed Votes</th>"+
    "<th>% Missed</th>"+
    "</tr>";
    
    //canculamos el porcentaje que queremos de nuestro objeto json
    porcent = Math.floor(members.length*10/100);
    
    //asignamos a nuestro objeto json los que meas faltas tienes es decir los que menos attendance tienen
    statistics.leastAttendance = members.slice(0, porcent);
    
    /* condicion para tomar o no el middle name */
    for(var i = 0;i < statistics.leastAttendance.length; i++){
        
        if(statistics.leastAttendance[i].middle_name == null){
            
            tableLeastAttendance += "<tr>"+
            "<td>"+statistics.leastAttendance[i].first_name+statistics.leastAttendance[i].last_name+"</td>"+
            "<td>"+statistics.leastAttendance[i].missed_votes+"</td>"+
            "<td>"+statistics.leastAttendance[i].missed_votes_pct+"</td>"+
            "</tr>";
        }else{
            
            tableLeastAttendance += "<tr>"+
            "<td>"+statistics.leastAttendance[i].first_name+statistics.leastAttendance[i].middle_name+statistics.leastAttendance[i].last_name+"</td>"+
            "<td>"+statistics.leastAttendance[i].missed_votes+"</td>"+
            "<td>"+statistics.leastAttendance[i].missed_votes_pct+"</td>"+
            "</tr>";
        }
    }
    
    //retornamos la tabla ya armada para luego mostrarla en el html
    return tableLeastAttendance;
}

//vinculo con el html funcion glance, la condicion es para ver si el id esta en el html
if(document.getElementById("glance-data")){
    
    document.getElementById("glance-data").innerHTML = glance();
}

//vinculo con el html funcion leastLoyal, la condicion es para ver si el id esta en el html
if(document.getElementById("leastLoyal-data")){
    
    document.getElementById("leastLoyal-data").innerHTML = leastLoyal();
}

//vinculo con el html funcion mostLoyal, la condicion es para ver si el id esta en el html
if(document.getElementById("mostLoyal-data")){
    
    document.getElementById("mostLoyal-data").innerHTML = mostLoyal();  
}

//vinculo con el html funcion mostAttendance, la condicion es para ver si el id esta en el html
if(document.getElementById("mostAttendance-data")){
    document.getElementById("mostAttendance-data").innerHTML = mostAttendance();
}

//vinculo co el html funcion leastAttendance, la condicion es para ver si el id esta en el html
if(document.getElementById("leastAttendance-data")){
     document.getElementById("leastAttendance-data").innerHTML = leastAttendance();
}










