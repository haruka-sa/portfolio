<template>
 <div id="mainSection">
    <div id="userName">
        <h1>H.Saito</h1>
    </div>
    <div id="lign">
        <hr width="140"  color="white" size="1">
    </div>
    <div id="companyName">
        <h1>Seattleconsulting</h1>
    </div>
    <div id="profile">
     <img id="profilePicture" src="../assets/profile.jpg"> 
    </div> 
 </div>
</template>

<script>
</script>

<style>
#mainSection {
    background: linear-gradient(#80E1F7, #06C1E6);
    width: 100%;
    higth: auto;
}

#userName {
    text-align: center;
    padding: 20px 0px 0px 0px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: Bold;
    font-family: Noto Sans;
    text-shadow: 0 2px 5px rgba(0, 0, 0, .5);
}
#lign {
    width: 135px;
    margin: 0 auto;
    font-size: 18px;
    font-family: Noto Sans;
    font-weight: Bold;
}
#companyName {
    margin: 0 auto;
    padding: 0px 0px 20px 0px;
    width: 180px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: Bold;
    font-family: Noto Sans;
    text-shadow: 0 2px 5px rgba(0, 0, 0, .5);
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
</style>