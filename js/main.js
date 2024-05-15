const { createApp } = Vue

createApp({

    data() {
        return {
            listaMail: [],
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail',
        }
    },
    methods: {
       
    },
    mounted() {
        let codiceRisposta;
        let datiRisposta;
        for(let x = 0; x<10; x++){
        axios.get(this.indirizzo).then((result) => { //attenzione all'arrow function!!

             codiceRisposta = `${result.status}/${result.statusText}`;
             datiRisposta = result.data;

            console.log("Ricevuta risposta", codiceRisposta, datiRisposta);

            this.listaMail.push(datiRisposta.response);
        
            });
        }
    }

}).mount('#app')