<template>
  <div id="mainSection">
    <div id="userName">
      <h1>H.Saito</h1>
    </div>
    <div id="line">
      <hr
        size="1"
        width="170"
        color="white"
        align="center"
      >
    </div>
    <div id="companyName">
      <h1>Seattleconsulting</h1>
    </div>
    <div id="profile">
      <img
        id="profilePicture"
        src="../assets/profile.jpg"
      >
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  #mainSection {
    background: linear-gradient(#80e1f7, #06c1e6);
    width: 100%;
    height: auto;
    // margin-top: 50px;
    min-height: 200px;
    border-bottom: solid 1px #cbcbcb;
  }

  #userName {
    text-align: center;
    padding: 20px 0 0 0;
    color: #fff;
    font-size: 18pt;
    font-weight: bold;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    font-family: 'Noto Sans JP', sans-serif;
  }

  #line {
    width: 170px;
    margin: 0 auto;
  }

  #companyName {
    margin: 0 auto;
    padding: 0 0 20px 0;
    width: 220px;
    color: #fff;
    font-size: 18pt;
    font-weight: bold;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    font-family: 'Noto Sans JP', sans-serif;
  }

  #profile {
    text-align: center;
    padding: 20px 0;
  }

  #profilePicture {
    width: 64px;
    height: 64px;
    border-radius: 50%;

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
  }
</style>
