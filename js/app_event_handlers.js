const app = new Vue({
  el: '#app',

  data:{
    numero: 13
  },

  methods:{
    incrementar(){
      this.numero++
    },

    decrementar(){
      this.numero--
    }
  }
});
