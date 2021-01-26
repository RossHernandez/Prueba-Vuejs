<template>
    <div class="container image-list mx-auto lg:flex lg:flex-wrap">
            <b-row>
            <b-col cols="3" sm="3" style="width:100;height:100;padding:10px;"
             v-for="imagen in lstImagenes" :key="imagen.id">
            <img :src="imagen.download_url">
            </b-col>
        </b-row>        
    </div>
</template>
<script>
//import Axios from 'axios';
export default {
    name:"Imagenes",
    data() {
        return {
            lstImagenes:[{
        }]
        }
    },
    mounted() {
      this.obtenerImagenes();
     //this.obtenerImagenesGray();
    
  },
  methods:{
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
  }  
}
</script>