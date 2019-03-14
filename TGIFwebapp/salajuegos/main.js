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
// namevarible.join (separado ejem ", ") muestra todos los elementos e cadena
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

console.log("Solo para separar while y for");

for(contadorFor=0;contadorFor<nombres.length;contadorFor++){
    
    console.log(edades [contadorFor]);
    
    if(edades [contadorFor]%2==0){
        
        console.log(edades [contadorFor]);
    }
}

//terminamos bucle en array

//comenzamos funciones que utilizan array

//sintaxis function nombrearray comparacion(a,b) { return (lo que quieras que devuelva) }

//sintaxis b var array = (a,b) => (lo que quieras que regrese);

//utilizamos una funcion en la cual recorremos un array con una iteracion para encontrar el numero menor

var contadorFuncion;
var numeros = [2,3,5,6,9,10,4,7,8,1];
var numeroMenor;

contadorFuncion=0;

function menor(numeros){
    
    
    while(contadorFuncion<numeros.length){
        
        if(contadorFuncion==0){
            
            numeroMenor=numeros[contadorFuncion];
        }else{
            
            if(numeros[contadorFuncion]<numeroMenor){
                numeroMenor=numeros[contadorFuncion];
            } 
        }
        
        contadorFuncion++  
    }
    
return (numeroMenor);

}

console.log(menor(numeros));

//terminamos el ejercicio anterior

//utilizamos una funcion en la cual recorremos un array con una iteracion para encontrar el numero mayor

var contadorMayor;
var numerosMayor = [2,3,5,6,8,9,1,4,7,10];
var numeroMayor;

contadorMayor=0;

function mayor(numerosMayor){
    
    while(contadorMayor<numerosMayor.length){
        
        if(contadorMayor==0){
            
            numeroMayor=numerosMayor[contadorMayor];
        }else{
            
            if(numerosMayor[contadorMayor]>numeroMayor){
                
               numeroMayor=numerosMayor[contadorMayor]; 
            }
        }
        
        contadorMayor++
    }
    
return (numeroMayor);
}

console.log(mayor(numerosMayor));

//terminamos el ejercicio anterior

//realizamos una funcion que recibe 2 parametros un array y un indice, y mostramos por consola el elemento en la posicio dada en el indice

var array = [2,35,32,28,5,8,19,22,30,15,9];
var posicion;

function devolverparametro (array, posicion){
    
    posicion=prompt("Ingrese el numero de la posicion que desea ver");
    
    return (array[posicion]);
}

console.log(devolverparametro(array,posicion));

//terminamos el ejercicio anterior

//utilizamos una funcion en la cual recorremos un array y mostramos los datos iguales

var numerosIguales = [3,6,3,6,1,1,5,4,8,9];

function numeroIgual (array){
    
    var contadorIguales;
    contadorIguales=0;
    var iguales = [];
    
    while(contadorIguales<array.length){
        
       if(array.indexOf(array[contadorIguales]) != contadorIguales && iguales.indexOf(array[contadorIguales]) == -1){
           
           iguales.push(array[contadorIguales])
       }
       
        contadorIguales++
    }
    
    return iguales;
}

console.log(numeroIgual(numerosIguales));

//ordenar con for listo
var numerosIguales2 = [3,6,3,6,1,1,5,4,8,9];

function numeroIgual2 (array){
    
    var contadorIguales2;
    var comparadorIguales;
    var iguales2 = [];
    
    for(contadorIguales2=0;contadorIguales2<array.length;contadorIguales2++){
        
        for(comparadorIguales=contadorIguales2+1;comparadorIguales<array.length;comparadorIguales++){
            
            if(array[contadorIguales2] == array[comparadorIguales]){
                
                iguales2.push(array[comparadorIguales]);
            }
        }
       
    }
    
    return iguales2;
}

console.log(numeroIgual2(numerosIguales2));


//terminamos el ejercicio anterior

//con una funcion unimos todos los elementos de un array

var mycolor = ["red", "green", "white", "black"];

function ordenar (array){
    
    
    return array.join(",");
}

console.log(ordenar(mycolor));

//terminamos el ejercicio anterior


//comenzamos string functions

//metodos:
//.legth para obtener la longitud
//bigString.indexOf(searchString) encontrar una cadena dentro de una cadena mas grande si no la encuentra devuelve -1 
//.startsWith(subString) para saber si un string comienza con un substring particular, esto devuelve verdadero o falso.
//.endsWith lo mismo pero al revez
//.toLowerCase()cambia el string a minuscula
//.toUpperCase()cambia el string a mayuscula
//.trim()para deshacer cualquier espacio al principio o al final del string

//tomar un numero y mostrarlo invertido



function invertir(String){
    
    var numero;
    var invertido;
    
    invertido="";
    
    numero=prompt("Ingrese un numero");
    
    for(i=numero.length;i>-1;i--){
        
        invertido=invertido+numero.charAt(i);
    }

    return invertido;
}

console.log(invertir(String));

//terminamos el ejercicio anterior

//tomar ua palabra y mostrarla en orden alfabetico

function alfabetico (String){
    
    var palabra;
    var palabraOrdenada;
    
    palabraOrdenada= "";
    
    palabra=prompt("Ingrese una palabra");
    
    palabraOrdenada=palabra.split("");
    
    console.log(palabraOrdenada);
    
    return palabraOrdenada.sort();
    
}

console.log(alfabetico(String));

//terminamos el ejercicio anterior

//convertir cada primera letra de cada palabra en mayuscula

function mayuscula (String){
    
    var frase;
    var fraseMayuscula;
    
    fraseMayuscula= "";
    
    frase=prompt("Ingrese una frase");
    
    fraseMayuscula=frase.split(" ");
    
    for(var i=0;i<fraseMayuscula.length;i++){
        
        fraseMayuscula[i]=fraseMayuscula[i].charAt(0).toUpperCase()+fraseMayuscula[i].slice(1);
    }
    
    return fraseMayuscula;
}

console.log(mayuscula(String));

//terminamos el ejercicio anteior

//mostrar la palabra mas larga de una frase

function masLarga (String){
    
    var frase;
    var palabraLarga;
    var masLargo;
    
    palabraLarga= "";
    
    frase=prompt("ingrese otra frase");
    
    palabraLarga= frase.split(" ");
    
    for(var i=0;i<palabraLarga.length;i++){
        
        
        if(i==0){
            
            masLargo=palabraLarga[i];
        }else{
            
            if(palabraLarga.length>masLargo.length){
                
               masLargo=palabraLarga[i]; 
            }
        }
    }
    
    return masLargo;
}

console.log(masLarga(String));

//terminamos ejercicio













