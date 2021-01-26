<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <p>Nombre: {{usuario.nombre}}</p>
          <p>Año de nacimiento: {{usuario.anioNacimiento}}</p>
          <p>Edad: {{usuario.edad}}</p>
          <p>Eres: {{clasificacion}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ComponenteA",
  components:{

  },
  props:{
    usuario:{
      nombre:"",
      anioNacimiento:0,
      edad:0
    }
  },
  data:()=>({
    clasificacion:""
  }),
  created() {
    this.clasifica(this.usuario.edad);
  },
  mounted() {

  },
  methods:{
    /**
     * Funcion para clasificar la edad
     * @param edad
     */
    clasifica(edad){
      switch (true){
        case edad <= 20:
          this.clasificacion = "Eres Joven";
          break;
        case edad >= 21 && edad <= 30:
          this.clasificacion = "Ya estas viejo";
          break;
      }
    }
  }
}
</script>

<style scoped>

</style>