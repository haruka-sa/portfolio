<template>
  <div id="mainSection">
    <div id="userName">
      <h1>H.Saito</h1>
    </div>
    <div id="lign">
      <hr
        width="140"
        color="white"
        size="1"
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

<style>
#mainSection {
  background: linear-gradient(#80e1f7, #06c1e6);
  width: 100%;
  height: auto;
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

#lign {
  width: 150px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
}

#companyName {
  margin: 0 auto;
  padding: 0 0 20px 0;
  width: 180px;
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
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
</style>
