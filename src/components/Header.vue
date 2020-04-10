<template>
  <div id="headerSection">
    <button
      class="btn btn-success"
      @click="toggle"
    >
      <img
        id="headerButton"
        src="../assets/header.png"
      >
    </button>
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        <Menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
 
export default {
  name: "HeaderSection",
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
  background: #f3f3f3;
  width: 100%;
  height: auto;
}

#headerButton {
  width: 50px;
  height: 50px;
  border-style: none;
}
</style>
