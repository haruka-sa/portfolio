<template>
  <div id="drawerSection">
    <label for="nav-input">
      <div id="drawerButton">
        <img
          id="close"
          src="../assets/close.png"
        >
      </div>
    </label>

    <ul class="drawerMenuSection">
      <li class="homeButton">
        <a
          href="#main"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('#mainSection')"
        >
          Home
        </a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="#about"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('#aboutSection')"
        >
          About me
        </a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="#skill"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('#skillSection')"
        >Skill Sets</a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="#vision"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('#visionSection')"
        >Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
      clickSmoothScroll (section) {
        event.preventDefault()
        this.$SmoothScroll(
          document.querySelector(section),
          400,
          'y'
        );
        this.$emit('close')
      }
    }
  }
</script>


<style scoped>
  #drawerSection {
    background-color: #f3f3f3;
    width: 100%;
    height: auto;
  }

  #drawerButton {
    height: auto;
    background: #f3f3f3;
  }

  #close {
    width: 20px;
    height: 20px;
    margin: 10px;
    float: right;
    cursor: pointer;
  }

  .drawerMenuItem {
    background-color: #fff;
    width: 100%;
    height: auto;
    list-style: none;
    padding: 20px 10px 20px 10px;

    /* padding-bottom: 10px; */
    border: 1px solid  #f3f3f3;
  }

  .homeButton {
    background-color: #fff;
    width: 100%;
    height: auto;
    list-style: none;
    padding: 40px 10px 20px 10px;

    /* padding-bottom: 10px; */
    border: 1px solid  #f3f3f3;
  }

  .drawerMenuItemLink {
    color: #707070;
    font-size: 12px;
    font-family: 'Noto Sans JP', sans-serif;
    display: inline;
    text-decoration: none;
  }

</style>
