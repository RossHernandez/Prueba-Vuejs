<template>
<div class="container">
  <div class="hello">
    <b-container fluid>
      <b-row class="justify-content-md-center">
        <b-col cols="8">
          <md-field>
            <label>Nombre</label>
            <md-input v-model="usuario.nombre" type="text"></md-input>
          </md-field>

          <md-field >
            <label>Año de nacimiento</label>
            <md-input v-model="usuario.anioNacimiento" type="number"></md-input>
          </md-field>

          <md-button class="md-raised" v-on:click="enviarValores()">Aceptar</md-button>

        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div v-if="bandera">
            <ComponenteA :usuario="usuario"></ComponenteA>
          </div>
        </b-col>
      </b-row>

    </b-container>
  </div>
  </div>
</template>

<script>
import ComponenteA from "@/components/ComponenteA";
export default {
  name: 'HelloWorld',
  components:{
    ComponenteA
  },
  props: {
    msg: String
  },
  data:()=>({
    usuario:{
      nombre:"",
      anioNacimiento:0,
      edad:0
    },
    bandera:false,
    anioActual:2021,
    url:""
  }),
  created() {

  },
  methods:{
    /**
     *cuando les clic esta funcion  se activa
     */
    enviarValores(){
      this.usuario.edad = this.calcularEdad();
      this.bandera = true;
    },
    /**
     * Funcion para calcular la edad
     * @returns {number}
     */
    calcularEdad(){
      return  this.anioActual - this.usuario.anioNacimiento;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
