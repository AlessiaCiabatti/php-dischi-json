const { createApp } = Vue;

createApp({

  data(){
    return{
      title: 'Discs List',
      // il server.php viene chiamato da JS
      apiUrl: 'server.php',
    }
  },
  methods:{
    // CHIAMATA ad api esposta da server.php
    getApi(){
      axios.get(this.apiUrl)
      .then(result => {
        console.log(result.data)
      })
    }
  },
  mounted(){
    this.getApi()
  }

}).mount('#app')