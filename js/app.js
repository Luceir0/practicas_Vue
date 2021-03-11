const app = new Vue({
  el: '#app',
  //Instancia de Vue, pasando como parámetro el elemento donde vamos a crear el ámbito de Vue.
  data:{
    //Aquí, las variables (las propiedades):
    message: 'Hello Vue',
    isVisible: true
  },
  computed:{
  // Los métodos computados. Guardan en caché.
    reversedMessage: function() {
      //El nombre de la función, para llamarla en el html, será 'reversedMessage'.
      //Daría igual escribir aquí reversedMessage(){} directamente, o reversedMessage: function(){}; como en este caso.
      return this.message.split('').reverse().join('')
      // 'this' apunta a la instancia.
    }
  },
  methods:{
    //Aquí, los métodos. Un método y un computed son lo mismo, solo que el método no guarda en caché.
    calculateSum: function(value1, value2){
      return value1 + value2;
    }
  }
});
