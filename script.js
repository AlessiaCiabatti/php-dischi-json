const { createApp } = Vue;

createApp({

  data(){
    return{
      title: 'Discs List',
      // il server.php viene chiamato da JS
      apiUrl: 'server.php',
      arrayDisc: [],

      //a-1 nuovo disco
      newDisc: {
        name: '',
        singer: '',
        year: '',
        url: '',
      },
    }
  },
  methods:{
    // CHIAMATA ad api esposta da server.php
    getApi(){
      axios.get(this.apiUrl)
      .then(result => {
        console.log(result.data)
        this.arrayDisc = result.data;
      })
    },

    addNewDisc(){
      /*1 strutturo i dati per inviarli in POST a server.php
        - php per poter ricevere dati inviati da una pg HTML deve vederli come se provengono da un form

        2 invio con axios in post i dati 
        3 con i dati che ricevo aggiorno la lista dei todo
      */

      console.log('---------',this.newDisc);


      const data = new FormData();
      // ha dentro delle informazioni che sono l'header della chiamata post come se provenisse da un form, sennò php lo rifiuta

      /* 
      FormData metodi -> append()
      faccio append della variabile che ti mando in post es -> newDiscTitle
      */
    //  1
      data.append('newDiscTitle', this.newDisc.name);
      data.append('newDiscSinger', this.newDisc.singer);
      // console.log(data);

    // 2
      axios.post(this.apiUrl, data)
      .then(result =>{
        console.log(result.data)
      })
    }
  },
  mounted(){
    this.getApi()
  }

}).mount('#app')