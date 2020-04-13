<template>
  <div id="headerSection">
    <button
      class="headerButton"
      @click="toggle"
    >
      <img
        width="30"
        height="30"
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

<style lang="scss" scoped>
  #headerSection {
    background: #f3f3f3;
    width: 100%;
    height: auto;
  }

  .headerButton {
    border-style: none;
    box-shadow: none;
    background: #f3f3f3;
  }
</style>
