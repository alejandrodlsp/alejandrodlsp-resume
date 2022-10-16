<template>
  <div class="main">
    <navbar/>
    <scrollable-controller/>
    <div class="container">
      <WelcomeSection/>
      <AboutSection/>
      <ProjectsSection/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ScrollableController from "@/components/ScrollableController.vue";

export default {
  name: 'App',
  
  components: {
    Navbar,
    WelcomeSection,
    AboutSection,
    ProjectsSection,
    ScrollableController
  },
}
</script>

<style>
.fullpage {
  height: 100vh;
  width: 100%;
}
</style>