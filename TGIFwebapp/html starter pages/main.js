function estados (){
    
    var estado;
    var tablaEstados;
    
    estado = data.results[0].members;
    tablaEstados= "<option id='estados'>"+"all"+"</option>";
    
    for(var i=0;i<estado.length;i++){
        
        tablaEstados += 
            
            "<option id='estados'>"+estado[i].state+"</option>";
    }
    
    //console.log(tablaEstados);
    
    return tablaEstados;
}

if(document.getElementById("state-data")){
    
    document.getElementById("state-data").innerHTML = estados(); 
}

function tabla (){
    
    var miembros;
    var tablaMiembros;
    var partidosSeleccionados;
    var states; 
    
    states = document.querySelector('#state-data').value
    
    console.log(states);

    miembros = data.results[0].members;
    tablaMiembros =    "<tr>"+
                        "<th>Full name</th>"+
                        "<th>Party</th>"+
                        "<th>State</th>"+
                        "<th>Years in Office</th>"+
                        "<th>% Votes w/Party</th>"+
                        "</tr>";
    
    partidosSeleccionados = Array.from( document.querySelectorAll('input[name=party]:checked')).map(x => x.value);
    
    //console.log(partidosSeleccionados);

    //console.log(miembros.length);

    for(var i=0;i<miembros.length;i++){

        if(partidosSeleccionados.indexOf(miembros[i].party) !== -1 && (states == miembros[i].state || states == "all")){
            
            if(miembros[i].middle_name == null){

            tablaMiembros +=
            "<tr>" +
            " <td><a href="+miembros[i].url+">"+miembros[i].first_name+" "+miembros[i].last_name+"</a></td>"+ 
            "<td>"+miembros[i].party+"</td>"+
            "<td>"+miembros[i].state+"</td>"+
            "<td>"+miembros[i].seniority+"</td>"+
            "<td>"+miembros[i].votes_with_party_pct+"%</td>"+
            "</tr>";
            }else{

                 tablaMiembros +=
                 "<tr>"+
                 "<td><a href="+miembros[i].url+">"+miembros[i].first_name+" "+miembros[i].middle_name+" "+miembros[i].last_name+"</a></td>"+
                 "<td>"+miembros[i].party+"</td>"+
                 "<td>"+miembros[i].state+"</td>"+
                 "<td>"+miembros[i].seniority+"</td>"+
                 "<td>"+miembros[i].votes_with_party_pct+"%</td>"+
                 "</tr>";
            }
        }
        
    }

    /*console.log(tablaMiembros);
    console.log(tablaMiembros.length);*/
    
    return tablaMiembros;
}

if(document.getElementById("members-data")){
    
    document.getElementById("members-data").innerHTML = tabla();  
}
 
if(document.getElementById("members-data")){
    
      document.getElementById("D").addEventListener("click", function(){
        document.getElementById("members-data").innerHTML = tabla();
    });  
}

if(document.getElementById("members-data")){
    
      document.getElementById("R").addEventListener("click", function(){
        document.getElementById("members-data").innerHTML = tabla();
    });  
}

if(document.getElementById("members-data")){
    
    document.getElementById("I").addEventListener("click", function(){
    document.getElementById("members-data").innerHTML = tabla();
    });  
}

if(document.getElementById("members-data")){
    
      document.getElementById("state-data").addEventListener("change", function(){
        document.getElementById("members-data").innerHTML = tabla();
    });  
}




