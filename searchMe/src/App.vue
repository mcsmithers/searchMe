<template>
  <div id="app">
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
    padding: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
	/* background-color: #CFD8DC; */
	color: #212121;
  }

  #meteor-pic {
    border-radius: 50%;
  }
  html{
	  /* background-color: #607D8B; */
  }

</style>
