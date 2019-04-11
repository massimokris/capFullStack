var app = new Vue({
    el: '#senate',
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
        
                
        glanceMembers: function(){
             
            var members = this.members;
            
            var obj = {
                
                numRepublicans: 0,
                votesRepublicans: 0,
                numDemocrats: 0,
                votesDemocrats: 0,
                numIndependents: 0,
                votesIndependents: 0,
                totalMembers: 0,
                totalVotes: 0
            };
            
            for(var i=0; members.length > i; i++){
                
                obj.totalVotes += members[i].votes_with_party_pct; 
                
                switch(members[i].party){
                        
                    case "R":
                        
                        obj.numRepublicans++;
                        obj.votesRepublicans += members[i].votes_with_party_pct;
                        break;
                    
                    case "D":
                        
                        obj.numDemocrats++;
                        obj.votesDemocrats += members[i].votes_with_party_pct;
                        break;
                    
                    case "I":
                    
                        obj.numIndependents++;
                        obj.votesIndependents += members[i].votes_with_party_pct;
                        break;
                }
            }
                    
            obj.votesIndependents = obj.votesIndependents/obj.numIndependents;
            
                
            obj.votesRepublicans = obj.votesRepublicans/obj.numRepublicans;
                
            obj.votesDemocrats = obj.votesDemocrats/obj.numDemocrats;
            
            obj.totalMembers = members.length;
            
            obj.totalVotes = obj.totalVotes/obj.totalMembers;
            
            obj.votesIndependents = obj.votesIndependents.toFixed(2);
               
            obj.votesRepublicans = obj.votesRepublicans.toFixed(2);
                
            obj.votesDemocrats = obj.votesDemocrats.toFixed(2);
            
            obj.totalVotes = obj.totalVotes.toFixed(2);
            
            return obj;
        },
        
        loyalLeast: function(){
        
            var porcent;
            var members = this.members;
            
            porcent = Math.floor(members.length*10/100);
        
            
    
            leastLoyal = [...members].sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct}).slice(0, porcent);
        
            return leastLoyal;
        },
        
        loyalMost: function(){
        
            var porcent;
            var member = this.members;
            
            porcent = Math.floor(member.length*10/100);
    
            mostLoyal = [...member].sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct}).slice(-porcent);
        
            return mostLoyal;
        },
        
        attendanceLeast: function(){
        
            var porcent;
            var members = this.members;
            
            porcent = Math.floor(members.length*10/100);
    
            leastAttendance = [...members].sort(function(a, b){return a.missed_votes - b.missed_votes}).slice(0, porcent);
        
            return leastAttendance;
        },
        
        attendanceMost: function(){
        
            var porcent;
            var members = this.members;
            
            porcent = Math.floor(members.length*10/100);
    
            mostAttendance = [...members].sort(function(a, b){return a.missed_votes - b.missed_votes}).slice(-porcent);
        
            return mostAttendance;
        }
    }
    
});

//utilizamos la funcion fetch para tomar datos del servidod directamente
fetch( "https://api.propublica.org/congress/v1/113/senate/members.json", {
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