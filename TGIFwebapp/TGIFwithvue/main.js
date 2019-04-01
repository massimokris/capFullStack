//funcion para sacar todos los estados de objeto json y ordenarlos en u dropdown
function estados (){
    
    var estado;
    var tablaEstados;
    
    //asignamos a la variable el objeto json de la lista de senadores para reucir la direccion del objeto para cuando la quiera llamar
    estado = data.results[0].members;
    
    //inicializamos el dropdown con una cabecera
    tablaEstados= "<option id='estados'>"+"all"+"</option>";
    
    //recorremos el array de la lista de senadores 
    for(var i=0;i<estado.length;i++){
        
       /*condicion para no repetir los estados en el dropdown*/ if(estado.indexOf(estado[i].state !== -1)){
            
            //mientras lo recorremos en cada iteracion metemos cada opcion del dropdown de estados
            tablaEstados += 
            
                "<option id='estados'>"+estado[i].state+"</option>";
        }
    }
    
    //console.log(tablaEstados);
    
    //retornamos el dropdown ya listo para insertar en la pagina
    return tablaEstados;
}

//usamos la condicion para verificar que el id este en el html y si esta use el vinculo a la funcion
if(document.getElementById("state-data")){
    
    //vinculamos esa funcion al html
    document.getElementById("state-data").innerHTML = estados(); 
}

//funcion para realizar la tabla de todos los miembro del senado o house que estan en nuestro objeto json
function tabla (){
    
    var miembros;
    var tablaMiembros;
    var partidosSeleccionados;
    var states; 
    
    //asigno el nodo de los datos del objeto json que estan vinculados al id#state-data 
    states = document.querySelector('#state-data').value
    
    console.log(states);
    
    //asigno el objeto json de los miembros del senado a la variable para reucir la direccion del objeto para cuando la quiera llamar
    miembros = data.results[0].members;
    
    //inicializo la tabla de miembros con la cabecera de la tabla
    tablaMiembros =    "<tr>"+
                        "<th>Full name</th>"+
                        "<th>Party</th>"+
                        "<th>State</th>"+
                        "<th>Years in Office</th>"+
                        "<th>% Votes w/Party</th>"+
                        "</tr>";
    
    //extraigo el nodo de los objetos con el name#party lo combierto en un array lo recorro con .map y solo estraigo su value
    partidosSeleccionados = Array.from( document.querySelectorAll('input[name=party]:checked')).map(x => x.value);
    
    //console.log(partidosSeleccionados);

    //console.log(miembros.length);
    
    //recorro el array de todos los miembros
    for(var i=0;i<miembros.length;i++){

       /*la condicion es para mostrar todos lo miembros con el checkbox de partidos seleccionado y con el dropdown*/ if(partidosSeleccionados.indexOf(miembros[i].party) !== -1 && (states == miembros[i].state || states == "all")){
            
           /*condicion para que cuando no tiene middle name,no tomarlo y cuando si, tomarlo*/
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
    
    //retornamos la tabla de miembros
    return tablaMiembros;
}

//usamos la condicion para verificar que el id este en el html y si esta use el vinculo a la funcion
if(document.getElementById("members-data")){
    //vinculamos al html
    document.getElementById("members-data").innerHTML = tabla();  
}
 
if(document.getElementById("members-data")){
     /*cambiamos la tabla en base a el partido que selecciona o deselecciona el usuario*/ document.getElementById("D").addEventListener("click", function(){
        document.getElementById("members-data").innerHTML = tabla();
    });  
}

if(document.getElementById("members-data")){
     /*cambiamos la tabla en base a el partido que selecciona o deselecciona el usuario*/  document.getElementById("R").addEventListener("click", function(){
        document.getElementById("members-data").innerHTML = tabla();
    });  
}

if(document.getElementById("members-data")){
   /*cambiamos la tabla en base a el partido que selecciona o deselecciona el usuario*/  document.getElementById("I").addEventListener("click", function(){
    document.getElementById("members-data").innerHTML = tabla();
    });  
}

if(document.getElementById("members-data")){
    /*cambiamos la tabla en base a el estado que elige el usuario*/ 
      document.getElementById("state-data").addEventListener("change", function(){
        document.getElementById("members-data").innerHTML = tabla();
    });  
}




