<template>
  <div class="main">
    <navbar/>
    <div class="container">
      <welcome/>
      <about/>
      <projects/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Welcome from './components/Welcome.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  
  components: {
    Navbar,
    Welcome,
    About,
    Projects
  }
}
</script>

<style>
main{
  width: 100vw;
  height: 100vh;
}
</style>