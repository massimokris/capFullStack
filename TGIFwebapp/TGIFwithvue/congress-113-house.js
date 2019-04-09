var app = new Vue({
    el: '#house',
    data: {
        members: {},
        checkedParty: ["R","D","I"],
        checkedState: ["all"],
        numRepublicans: 0,
        votesRepublicans: 0,
        numDemocrats: 0,
        votesDemocrats: 0,
        numIndependents: 0,
        votesIndependents: 0,
        totalMembers: 0,
        totalVotes: 0,
        mostLoyal: {},
        leastLoyal: {}
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
            
            for(var i=0; this.members.length; i++){
                
                totalVotes += members[i].votes_with_party_pct; 
                
                switch(members[i].party){
                        
                    case "R":
                        
                        numRepublicans++;
                        votesRepublicans += this.members[i].votes_with_party_pct;
                        break;
                    
                    case "D":
                        
                        numDemocrats++;
                        votesDemocrats += this.members[i].votes_with_party_pct;
                        break;
                    
                    case "I":
                    
                        numIndependents++;
                        votesIndependents += this.members[i].votes_with_party_pct;
                        break;
                }
            }
                    
            votesIndependents = votesIndependents/numIndependents;
            
                
            votesRepublicans = votesRepublicans/numRepublicans;
                
            votesDemocrats = votesDemocrats/numDemocrats;
            
            totalMembers = this.members.length;
            
            totalVotes = totalVotes/totalMembers;
            
            return 0;
        },
        
        loyalLeast: function(){
        
            var porcent;
            var members = this.members;
            
            porcent = Math.floor(members.length*10/100);
        
            members.sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct});
    
            leastLoyal = members.slice(0, porcent);
        
            return leastLoyal;
        },
        
        loyalMost: function(){
        
            var porcent;
            var members = this.members;
            
            porcent = Math.floor(members.length*10/100);
        
            members.sort(function(a, b){return a.votes_with_party_pct - b.votes_with_party_pct});
    
            mostLoyal = members.slice(-porcent);
        
            return mostLoyal;
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