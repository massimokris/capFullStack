var app = new Vue({
    el: '#house',
    data: {
        members: {},
        checkedParty: ["R","D","I"],
        checkedState: ["all"]
    },
    methods:{
        
        //Funcion para filtrar los miembros con el checkbox o con el dropdown
        filter: function(){
            
            var membersFilter = [];
            
            //recorro el array de todos los miembros
            for(var i=0;i<this.members.length;i++){

               /*la condicion es para mostrar todos lo miembros con el checkbox de partidos seleccionado y con el dropdown*/ if(this.checkedParty.indexOf(this.members[i].party) !== -1 && (this.checkedState == this.members[i].state || this.checkedState == "all")){
                    
                    membersFilter.push(this.members[i]);
                   
                }

            }
            
            return membersFilter;
        },
        
        //funcion para filtrar los estados del dropdown y no repetirlos
        filterStates: function(){
            
            var stateFilter = ["all"];
            
            //recorro el array de todos los miembros
            for(var i=0;i<this.members.length;i++){
                
                /*la condicion es para no repetir los estados en el dropdwn*/ 
                if(stateFilter.indexOf(this.members[i].state) == -1){
                    
                    stateFilter.push(this.members[i].state);
                }
            }
            
            return stateFilter;
        }
    }
    
});

//utilizamos la funcion fetch para tomar datos del servidod directamente
fetch( "https://api.propublica.org/congress/v1/113/house/members.json", {
    headers: new Headers({
        //autenticacion con la api key de propublic
        'X-API-Key' : 'IC6RYVIy6ApP5SeZnSRhk0YKvnJN82Gzvl7cftzM'
    })
}).then(function(congress) {
    
    if (congress.ok) {
        
        return congress.json();
    }
    
    throw new Error(congress.statusText);
}).then(function(value) {
    
    app.members = value.results[0].members;
    app.checkedState = "all";
    
}).catch(function(error) {
    
    console.log( "Request failed: "+ error.message );
});