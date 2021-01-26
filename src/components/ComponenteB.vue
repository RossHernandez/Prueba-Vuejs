<template>
    <div class="container mt-3">
    <b-row align-v="start">
        <b-col>
            <!--Seleccionar efecto-->
            <p>Selecciona de la lista una imagen y aplicale un efecto</p>
            <b-form-select v-model="selected" :options="options" class="mb-3" value-field="item" text-field="name"
            disabled-field="notEnabled">
            <template #first>
                <b-form-select-option :value="null" disabled>Seleccione un efecto</b-form-select-option>
            </template>
            </b-form-select>
            <!--<div class="mt-3">Selected: <strong>{{ selected }}</strong></div>-->
            <b-row>
            <b-col>
                <label for="sb-vertical">Ancho</label><br>
                    <b-form-spinbutton id="sb-vertical-alto" v-model="anchura" vertical min="20" max="600" step="20"
                    ></b-form-spinbutton>
            </b-col>
            <b-col>
                <label for="sb-vertical">Alto</label><br>
                <b-form-spinbutton id="sb-vertical-ancho" v-model="altura" vertical min="20" max="600" step="20"
                ></b-form-spinbutton>
            </b-col>
            <b-col>
                <br>
                <input type="checkbox" id="jpg" value="jpg" v-model="checkedTipo">
                <label for="jpg">Tipo .jpg</label><br>
                <input type="checkbox" id="webp" value="webp" v-model="checkedTipo">
                <label for="webp">Tipo .webp</label>
               <!-- <span>Usted verá imagenes tipo {{ checkedTipo }}</span>-->
            </b-col>
            </b-row><br>
            <b-button  style="margin:10px" variant="outline-dark"
            :to="{ name: 'Imagenes'}">Mostrar todo</b-button>
            <br>
            <img :src="src_actual" :style="style" />
        </b-col>
        <!--Columna de imagenes-->
        <b-col sm="5">
            <h3>Lista de imagenes</h3>
            <div style="margin:5px" v-for="imagen in lstImagenes" :key="imagen.id">
            <!--<img :src="imagen.download_url":width="'${anchura}px'" :height="'${altura}px'">-->
            <img :src="imagen.download_url" @click="enviarSrc(imagen.download_url)">
            
            </div>
        </b-col>
   </b-row>
  </div>
</template>
<script>
//import axios from 'axios';
export default {
    name: "ComponenteB",
    data() {
        return {
            url: '',
            style:{
                width: "200px",
                height: "200px"
            },
            src_actual:"https://picsum.photos/id/1020/4288/2848",
            checkedTipo: [],
            selected: 'null',
            options: [
            { item: 'normal', name: 'Foto Normal' },
            { item: 'grises', name: 'Escala de grises' },
            { item: 'difuminado', name: 'Efecto difuminado' },
            ],
            lstImagenes:[]
        }
    },
    mounted() {
     this.obtenerImagenes();
    
  },
  methods:{
  enviarSrc(src){
      this.src_actual = src
  },
  obtenerImagenes(){
    this.$http.get("https://picsum.photos/v2/list")
        .then(response => {
          if (response.data){
            let resultado = response.data;
            resultado.forEach((item) => {
              console.log(item);
              this.lstImagenes.push(item);
            });
          }
        }).catch(error => {
      console.log(error);
    });
  },    
  },
  computed:{
      anchura:{
          get(){
              return this.style.width;
          },
          set(value){
              this.style.width = value +"px"
          }
      },
      altura:{
          get(){
              return this.style.height;
          },
          set(value){
              this.style.height = value +"px"
          }
      }
  },
  watch:{
      selected:function(value){
          if (value=="grises") {
              this.src_actual = this.src_actual+"?grayscale"
          }
          else{
              if (value=="normal") {
                   this.src_actual = this.src_actual.split("?")[0]
              }
              else{
                   this.src_actual = this.src_actual+"?blur=5"
              }
          }
          this.obtenerImagenes();
      }
      
  }
}
</script>
<style lang="stylus" scoped>

</style>