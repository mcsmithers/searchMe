<template>
  <div class="hello">
    <h1>SearchMe</h1>
    <p>Find a meteorite by typing in the searchbox.</p>
  <gmap-map
    :center="center"
    :zoom="1"
    style="width: 100%; height: 300px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in filteredList"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      :label="m.name"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
  <br/>

  <input v-model="search" placeholder="Search a meteorite">
  <p v-for="meteorite in filteredList">Name: {{ meteorite.name }}, Location: {{ meteorite.reclat }} latitude {{ meteorite.reclong }} longitude, Mass: {{meteorite.mass}} grams, Recorded: {{meteorite.year}}</p>
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
  color: #455A64;
}

</style>