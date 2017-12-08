<template>
  <div class="hello">
  <p>{{ meteoriteList.length }}</p>
  <input v-model="search" placeholder="filter meteorites">
  <p v-for="meteorite in filteredList">{{ meteorite.name }}, Location: {{ meteorite.reclat }} {{meteorite.reclong}}, Mass:{{ meteorite.mass }} grams, Recorded: {{ meteorite.year }}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
		data() {
      return {
        center: {lat: 10.0, lng: 10.0},
          search: '',
		      meteoriteList: []
      }
		},
    computed: {
      filteredList() {
        return this.meteoriteList.filter(meteorite => {
          return meteorite.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    created() {
      let vm = this
      axios.get('https://data.nasa.gov/resource/y77d-th95.json')
      .then(function (response) {
        vm.meteoriteList = response.data;
      // console.log(response);
       })
     .catch(function (error) {
      console.log(error);
     });
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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