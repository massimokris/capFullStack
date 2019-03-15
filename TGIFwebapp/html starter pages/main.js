document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);

//console.log(data.results[0].members);

var senadores;
var tablaSenadores;

senadores = data.results[0].members;
tablaSenadores =    "<tr>"+
                    "<th>Full name</th>"+
                    "<th>Party</th>"+
                    "<th>State</th>"+
                    "<th>Seniority</th>"+
                    "<th>Percentage of votes</th>"+
                    "</tr>"+ 
                    "<tr>";

console.log(senadores.length);

for(var i=0;i<senadores.length;i++){
    
    if(senadores[i].middle_name == null){
        
        tablaSenadores +=
        "<tr>" +
        " <td><a href="+senadores[i].url+">"+senadores[i].last_name+" "+senadores[i].first_name+"</a></td>"+ 
        "<td>"+senadores[i].party+"</td>"+
        "<td>"+senadores[i].state+"</td>"+
        "<td>"+senadores[i].seniority+"</td>"+
        "<td>"+senadores[i].votes_with_party_pct+"%</td>"+
        "</tr>";
    }else{
        
         tablaSenadores +=
         "<td><a href="+senadores[i].url+">"+senadores[i].last_name+" "+senadores[i].first_name+" "+senadores[i].middle_name+"</a></td>"+
         "<td>"+senadores[i].party+"</td>"+
         "<td>"+senadores[i].state+"</td>"+
         "<td>"+senadores[i].seniority+"</td>"+
         "<td>"+senadores[i].votes_with_party_pct+"%</td>"+
         "</tr>";
    }
}

console.log(tablaSenadores);
console.log(tablaSenadores.length);

document.getElementById("senate-data").innerHTML  = tablaSenadores;

var camara;
var tablaCamara;

camara = data.results[0].members;
tablaCamara =    "<tr>"+
                    "<th>Full name</th>"+
                    "<th>Party</th>"+
                    "<th>State</th>"+
                    "<th>Seniority</th>"+
                    "<th>Percentage of votes</th>"+
                    "</tr>"+ 
                    "<tr>";

console.log(camara.length);

for(var i=0;i<camara.length;i++){
    
    if(camara[i].middle_name == null){
        
        tablaCamara +=
        "<tr>" +
        "<td>"+camara[i].last_name+" "+camara[i].first_name+"</td>"+ 
        "<td>"+camara[i].party+"</td>"+
        "<td>"+camara[i].state+"</td>"+
        "<td>"+camara[i].seniority+"</td>"+
        "<td>"+camara[i].votes_with_party_pct+"%</td>"+
        "</tr>";
    }else{
        
         tablaCamara +=
         "<td>"+camara[i].last_name+" "+camara[i].first_name+" "+camara[i].middle_name+"</td>"+
         "<td>"+camara[i].party+"</td>"+
         "<td>"+camara[i].state+"</td>"+
         "<td>"+camara[i].seniority+"</td>"+
         "<td>"+camara[i].votes_with_party_pct+"%</td>"+
         "</tr>";
    }
}

console.log(tablaCamara);
console.log(tablaCamara.length);

document.getElementById("house-data").innerHTML  = tablaCamara;
