const { createApp } = Vue;

createApp({

  data(){
    return{
      title: 'Discs List',
      // il server.php viene chiamato da JS
      apiUrl: 'server.php',
      arrayDisc: [],

      //a-1 nuovo disco
      addNewDisc: {
        Name: 'aaa',
        Singer: '',
        Year: '',
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
    }
  },
  mounted(){
    this.getApi()
  }

}).mount('#app')