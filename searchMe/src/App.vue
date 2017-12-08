<template>
  <div id="app">
    <img width=200 src="./assets/Namibie_Hoba_Meteorite.jpg" id="meteor-pic">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
	background-color: #CFD8DC;
	color: #212121;
  }

  #meteor-pic {
    border-radius: 50%;
  }
  html{
	  background-color: #607D8B;
  }

</style>
