(function mostrarSchedule(){
    
    ocultar();
    document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('scoreboard').style.display="block";
    document.getElementById('sliderImg').style.display="block";
    document.getElementById('schedule_home').style.display="block";
    
    document.getElementById('footer').style.display="block";
})();

function mostrarSchedule2(){
    
    ocultar();
    document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('scoreboard').style.display="block";
    document.getElementById('sliderImg').style.display="block";
    document.getElementById('schedule_home').style.display="block";
    
    document.getElementById('footer').style.display="block";
}

function mostrarMaps(){
    
    ocultar();
    document.getElementById('maps').style.display="block";
    document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
}

function mostrarContact(){
    
    ocultar();
    document.getElementById('contact').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
}

function mostrarU1(){
    
    ocultar();
    document.getElementById('u1').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
}

function mostrarU2(){
    
    ocultar();
    document.getElementById('u2').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
}

function mostrarU3(){
    
    ocultar();
    document.getElementById('u3').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
}

function mostrarU4(){
    
    ocultar();
    document.getElementById('u4').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
}

function mostrarU5(){
    
    ocultar();
    document.getElementById('u5').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
}

function mostrarU6(){
    
    ocultar();
    document.getElementById('u6').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
}

function mostrarCalvary(){
    
    ocultar();
    document.getElementById('calvary').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
    document.getElementById('teams').style.display="block";
}

function mostrarEdmonton(){
    
    ocultar();
    document.getElementById('edmonton').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
    document.getElementById('teams').style.display="block";
}

function mostrarForge(){
    
    ocultar();
    document.getElementById('forge').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
    document.getElementById('teams').style.display="block";
}

function mostrarPacific(){
    
    ocultar();
    document.getElementById('pacific').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
    document.getElementById('teams').style.display="block";
}

function mostrarYork(){
    
    ocultar();
    document.getElementById('york').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
    document.getElementById('teams').style.display="block";
}

function mostrarValour(){
    
    ocultar();
    document.getElementById('valour').style.display="block";
     document.getElementById('topHeader').style.display="block";
    document.getElementById('navBar').style.display="block";
    document.getElementById('footer').style.display="block";
    document.getElementById('teams').style.display="block";
}

function ocultar(){
    
    document.getElementById('topHeader').style.display="none";
    document.getElementById('navBar').style.display="none";
    document.getElementById('scoreboard').style.display="none";
    document.getElementById('sliderImg').style.display="none";
    document.getElementById('schedule_home').style.display="none";
    document.getElementById('footer').style.display="none";
    document.getElementById('contact').style.display="none";
    document.getElementById('u1').style.display="none";
    document.getElementById('u2').style.display="none";
    document.getElementById('u3').style.display="none";
    document.getElementById('u4').style.display="none";
    document.getElementById('u5').style.display="none";
    document.getElementById('u6').style.display="none";
    document.getElementById('calvary').style.display="none";
    document.getElementById('york').style.display="none";
    document.getElementById('edmonton').style.display="none";
    document.getElementById('valour').style.display="none";
    document.getElementById('pacific').style.display="none";
    document.getElementById('forge').style.display="none";
    document.getElementById('maps').style.display="none";
    document.getElementById('teams').style.display="none";
}

//funcion para agregar categorias al dropdown
function tableCategories(){
    
    var category;
    var tableCategories;
    
    category = data.categories;
    
    console.log(category);
    
    tableCategories = "<option id='category'>all</option>";
    
    for(var i = 0; i < category.length; i++){
        
        tableCategories += "<option id='category'>"+category[i]+"</option>";
    }
    
    console.log(tableCategories);
    
    return tableCategories;
}

if(document.getElementById("categories-data")){
    
    //vinculamos esa funcion al html
    document.getElementById("categories-data").innerHTML = tableCategories(); 
}

//funcion para agregar fechas al dropdown
function tableDate(){
    
    var dates;
    var tableDate;
    
    dates = data.allgames;
    
    tableDate = "<option id='category'>all</option>";
    
    for(var i = 0; i < dates.length; i++){
        
        tableDate += "<option id='category'>"+dates[i].date+"</option>";
    }
    
    return tableDate;
}

if(document.getElementById("date")){
    
    //vinculamos esa funcion al html
    document.getElementById("date").innerHTML = tableDate(); 
}

function matchesList(){
    
    var listCategories;
    var listDates;
    var list;
    var printList;
    
    listCategoriesCategories = tableCategories();
    listDatesDates = tableDate();
    
    list = data.allgames;
    
    console.log(list[0].games.length);
    
    for(var i = 0; i < list.length; i++){
        
        printList += "<li>"+list[i].date
        
            for(var j = 0; j < list[i].games.length; j++){
                
                "<ul>"+"<li>"+list[i].games[j].categories[0]+" "+list[i].games[j].categories[1]+"</li>"+
                
                "<li>"+list[i].games[j].place+"</li>"+
                    
                "<li>"+list[i].games[j].time+"</li>"+"</ul>"
            }
        
            "</li>";
    }
    
    
    return printList;
}

console.log(matchesList());

