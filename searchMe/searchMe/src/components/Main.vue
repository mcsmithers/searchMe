<template>
  <div class="header">
<img src="src\assets\Namibie_Hoba_Meteorite.JPG" width="300" height="300">        
    <h1>{{ msg }}</h1>
  <div id="search-area">
    <form id="search">
      Search <input name="query">
    </form>
  </div>
    <p>This app searches for meteorite landing sites.  You can look at a landing by year, mass, geolocation and other traits of famous landings.</p>
  </div>
</template>

<script>
export default {
  name: 'SearchMe',
  data () {
    return {
      msg: 'Meteorite Landings'
    }
  }
}
</script>

<!-- Adding "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
