<template>
  <div id="app">
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision
  }
}
</script>

<style>
#app {
  background-color: #fff;
}

</style>
