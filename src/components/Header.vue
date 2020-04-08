<template>
  <div id="headerSection">
    <button @click="toggle" class="btn btn-success"><img id="headerButton" scr="../assets/menuButton.png"></button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">content here</div>
    </Drawer>
  </div>
</template>
 
<script>
import Drawer from "vue-simple-drawer";
 
export default {
  name: "App",
  components: {
    Drawer
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>

<style>
#headerSection {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background: #F3F3F3;
  color: #2c3e50;
  padding-top: 0px;
  margin: 0 auto;
  width: 800px;
}
</style>
