var app = new Vue({
    el: '#house',
    data: {
        members: [],
        checkedParty: ["R","D","I"],
        checkedState: ["all"],
        glance: {},
        mostLoyal: {},
        leastLoyal: {},
        mostAttendance: {},
        leastAttendance: {}
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
        },
        
        //funcion para mostrar el total de senadores por partido y el porcenaje de votos
        glanceMembers: function(){
            
            var members = this.members;
            
            //objeto con los datos a extraer de los miembros
            var obj = {
                
                numRepublicans: 0,
                votesRepublicans: 0,
                numDemocrats: 0,
                votesDemocrats: 0,
                numIndependents: 0,
                votesIndependents: 0,
                totalMembers: 0,
                totalVotes: 0
            }
            
            //recorro el array de miembros del congreso
            for(var i=0; this.members.length > i; i++){
                
                //acumulo el total de porcetaje de votos para luego calcular el porccentaje total
                obj.totalVotes += members[i].votes_with_party_pct; 
                
                //acumulo y sumo por partido comparando con un switch en cada iteracion
                switch(members[i].party){
                        
                    case "R":
                        
                        obj.numRepublicans++;
                        obj.votesRepublicans += this.members[i].votes_with_party_pct;
                        break;
                    
                    case "D":
                        
                        obj.numDemocrats++;
                        obj.votesDemocrats += this.members[i].votes_with_party_pct;
                        break;
                    
                    case "I":
                    
                        obj.numIndependents++;
                        obj.votesIndependents += this.members[i].votes_with_party_pct;
                        break;
                }
            }
            
            //calculo de porcentaje de votos
            if(obj.votesIndependents == 0){
                
                obj.votesIndependents = obj.votesIndependents;
            }else{
                
                obj.votesIndependents = obj.votesIndependents/obj.numIndependents;
            }
                
            obj.votesRepublicans = obj.votesRepublicans/obj.numRepublicans;
                
            obj.votesDemocrats = obj.votesDemocrats/obj.numDemocrats;
            
            obj.totalMembers = this.members.length;
            
            obj.totalVotes = obj.totalVotes/obj.totalMembers;
            
            //reduccion de decimales
            obj.votesIndependents = obj.votesIndependents.toFixed(2);
               
            obj.votesRepublicans = obj.votesRepublicans.toFixed(2);
                
            obj.votesDemocrats = obj.votesDemocrats.toFixed(2);
            
            obj.totalVotes = obj.totalVotes.toFixed(2);
            
            return obj;
        },
        
        //funcion para calcular la estadistica del x% menos leal a su partido en base al porcentaje de votos con su partido
        loyalLeast: function(){
        
            var porcent;
            var members = this.members;
            
            porcent = Math.floor(members.length*10/100);
    
            leastLoyal = [...members].sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct});
            
            for(var i= 0; porcent > i; i++){
                
                if(i!=0 && leastLoyal[i].votes_with_party_pct == leastLoyal[i-1].votes_with_party_pct){
                    
                    porcent++;
                }
            }
        
            return leastLoyal.slice(0, porcent);
            
        },
        
        //funcion para calcular la estadistica del x% mas leal a su partido en base al porcentaje de votos con su partido
        loyalMost: function(){
        
            var porcent;
            var members = this.members;
            
            porcent = Math.floor(members.length*10/100);
    
            mostLoyal = [...members].sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct});
            
            for(var i = 0; porcent > i; i++){
                
               if(i != 0 && mostLoyal[i].votes_with_party_pct == mostLoyal[i-1].votes_with_party_pct){
                   
                   porcent++;
               } 
            }
        
            return mostLoyal.slice(-porcent);
        },
        
        //funcion para calcular la estadistica del x% con menos ausencias en el congreso en base a los votos perdidos
        attendanceLeast: function(){
        
            var porcent;
            var members = this.members;
            
            porcent = Math.floor(members.length*10/100);
            
            leastAttendance = [...members].sort(function(a, b){return b.missed_votes - a.missed_votes});
            
            for(var i = 0; porcent > i; i++){
                
                if(i!=0 && leastAttendance[i].missed_votes == leastAttendance[i-1].missed_votes ){
                    
                    porcent++;
                }
            }
            
        
            return leastAttendance.slice(0, porcent);
        },
        
         //funcion para calcular la estadistica del x% con menos ausencias en el congreso en base a los votos perdidos
        attendanceMost: function(){
        
            var porcent;
            var members = this.members;
            
            porcent = Math.floor(members.length*10/100);
    
            mostAttendance = [...members].sort(function(a, b){return a.missed_votes - b.missed_votes});
            
            for(var i = 0; porcent > i; i++){
                
                if(i != 0 && leastAttendance[i].missed_votes == leastAttendance[i-1].missed_votes){
                    
                    porcent++;
                }
            }
        
            return mostAttendance.slice(0, porcent);
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
    app.glance = app.glanceMembers();
    
}).catch(function(error) {
    
    console.log( "Request failed: "+ error.message );
});