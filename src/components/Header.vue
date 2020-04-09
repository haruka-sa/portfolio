<template>
  <div id="headerSection">
    <button @click="toggle" class="btn btn-success"><img id="headerButton" src="../assets/header.png"></button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">
        <Menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
 
export default {
  name: "headerSection",
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
  background: #F3F3F3;
  width: 100%;
  height: auto;
}
#headerButton {
    width: 50px;
    height: 50px;
    border-style: none;
}
</style>
