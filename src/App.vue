<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{ name: 'ComponenteB'}">Aprendiendo Vue</b-navbar-brand>
    </b-navbar>
    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
</style>
