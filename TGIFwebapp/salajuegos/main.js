console.log("iniciano javascript");

var myName;
var age;
var ignasiAge;
var ageDiff;

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



