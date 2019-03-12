console.log("iniciano javascript");

var myName;
var age;
var ignasiAge;
var ageDiff;
var contador;
var contadorWhile;
var contadorFor;

cotador=0;
contadorWhile=0;
contadorFor=0;

//aca comenzamos fundamentos js
myName="massimo";
age=22;
ignasiAge=32;
ageDiff=age-ignasiAge;

console.log(myName);
console.log(age);
console.log(ageDiff);

if(age>21){
    
    console.log("Ya es mayor de 21");
}else{
    
   console.log("No es mayor de 21"); 
}

if(ignasiAge==age){
    
    console.log("Tiene la misma edad que ignasi");
}else{
    
    if(ignasiAge>age){
        
        console.log("Ignasi es mas viejo que ustes");
    }else{
        
        console.log("Ignasi es mas joven que usted");
    }
}
// terminamos con fundamentos js

//comenzamos con arrays js

//ordenamos array

var nombres = ["pedro", "jose", "manuel", "humberto", "rodrigo", "caro", "massimo", "antonio", "luis", "andy", "santiago"];

// namevarible.length muestra la cantidad de elementos
// namevarible.push (valor) agrega un elemento al final de la matriz
// namevarible.indexOf (valor) para vver igualdad de algun elemeto
// namevarible.join (separado ejem ", ") miestra todos los elementos e cadena
// namevarible.sort(); ordena la matriz

nombres.length
console.log(nombres.length);

nombres.sort();
console.log(nombres[0]);
console.log(nombres[10]);
console.log(nombres.sort());

for(contador=0;contador<nombres.length;contador++){
    
    console.log(nombres [contador]);
}

//terminamos de ordenar array

//bucle en array

var edades = [15, 20, 22, 32, 28, 39, 55, 9, 10, 27, 60];

while(contadorWhile<edades.length){
    
    console.log(edades [contadorWhile]);
    
    if(edades [contadorWhile]%2==0){
        
        console.log(edades [contadorWhile]);
    } contadorWhile++
}

console.log("Solo para separas while y for");

for(contadorFor=0;contadorFor<nombres.length;contadorFor++){
    
    console.log(edades [contadorFor]);
    
    if(edades [contadorFor]%2==0){
        
        console.log(edades [contadorFor]);
    }
}




