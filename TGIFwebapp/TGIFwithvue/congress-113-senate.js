var app = new Vue({
    el: '#senate',
    data: {
        members: {},
        checkedParty: ["R","D","I"],
    },
    methods:{
        filter: function(){
            var membersFilter = []
            //recorro el array de todos los miembros
            for(var i=0;i<this.members.length;i++){

               /*la condicion es para mostrar todos lo miembros con el checkbox de partidos seleccionado y con el dropdown*/ if(this.checkedParty.indexOf(this.members[i].party) !== -1){
                    
                    membersFilter.push(this.members[i]);
                }

            }
            
            return membersFilter;
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
    
}).catch(function(error) {
    
    console.log( "Request failed: "+ error.message );
});