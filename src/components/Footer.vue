<template>
  <div id="footerSection">
    <a
      id="smoothScroll"
      href="#"
      @click="clickSmoothScroll()"
    >
      <img
        id="gotoTop"
        width="30"
        height="30"
        src="@/assets/scroll.png"
        alt="page top"
      >
    </a>

    <div id="foterCopyright">
      <small>©Seattleconsulting</small>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
  #footerSection {
    background: linear-gradient(#80e1f7, #06c1e6);
    width: 100%;
    height: auto;
    text-align: center;
    padding: 10px 0;
  }

  #foterCopyright {
    color: #fff;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    font-family: 'Noto Sans JP', sans-serif;
    padding: 20px 0;
  }

  #gotoTop {
    background: white;
    border-radius: 50%;
    position: relative;
    bottom: 25px;
    opacity: 0.8;
  }

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
</style>
