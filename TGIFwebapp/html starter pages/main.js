function tabla (){
    
    var miembros;
    var tablaMiembros;

    miembros = data.results[0].members;
    tablaMiembros =    "<tr>"+
                        "<th>Full name</th>"+
                        "<th>Party</th>"+
                        "<th>State</th>"+
                        "<th>Years in Office</th>"+
                        "<th>% Votes w/Party</th>"+
                        "</tr>"+ 
                        "<tr>";

    //console.log(miembros.length);

    for(var i=0;i<miembros.length;i++){

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
             "<td><a href="+miembros[i].url+">"+miembros[i].first_name+" "+miembros[i].middle_name+" "+miembros[i].last_name+"</a></td>"+
             "<td>"+miembros[i].party+"</td>"+
             "<td>"+miembros[i].state+"</td>"+
             "<td>"+miembros[i].seniority+"</td>"+
             "<td>"+miembros[i].votes_with_party_pct+"%</td>"+
             "</tr>";
        }
    }

    /*console.log(tablaMiembros);
    console.log(tablaMiembros.length);*/
    
    return tablaMiembros;
}

document.getElementById("members-data").innerHTML = tabla();

function estados (){
    
    var estado;
    var tablaEstados;
    
    estado = data.results[0].members;
    tablaEstados= "<option>"+"all"+"</option>";
    
    for(var i=0;i<estado.length;i++){
        
        tablaEstados += 
            
            "<option>"+estado[i].state+"</option>";
    }
    
    console.log(tablaEstados);
    
    return tablaEstados;
}

document.getElementById("state-data").innerHTML = estados();
