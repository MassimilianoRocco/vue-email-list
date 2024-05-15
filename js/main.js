const { createApp } = Vue

createApp({

    data() {
        return {
            listaMail:[],
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail',
            codiceRisposta:"",
            datiRisposta:"",
            inputUtente:"",
        }
    },
    methods: {
       addMails(input){
        
        if(this.listaMail != null){
            this.listaMail = [];

            for(let x = 0; x<input; x++){
                axios.get(this.indirizzo).then((result) => {
        
                     codiceRisposta = `${result.status}/${result.statusText}`;
                     datiRisposta = result.data;
        
                    console.log("Ricevuta risposta", codiceRisposta, datiRisposta);
        
                    this.listaMail.push(datiRisposta.response);     
                    });
                }
        }

            else{
                for(let x = 0; x<input; x++){
                    axios.get(this.indirizzo).then((result) => {
            
                            codiceRisposta = `${result.status}/${result.statusText}`;
                            datiRisposta = result.data;
            
                        console.log("Ricevuta risposta", codiceRisposta, datiRisposta);
            
                        this.listaMail.push(datiRisposta.response);     
                        });
                    }
                }
        
       }
    },
    mounted() {

        
    }

}).mount('#app')