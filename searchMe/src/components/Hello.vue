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

<h2>Sites</h2>
<input v-model="search" placeholder="Search a meteorite...">
<table style="width:100%">
    <th>Name</th>
    <th>Location</th> 
    <th>Mass (g)</th>
    <th>Recorded</th>
    <tr v-for="meteorite in filteredList">
      <td> {{ meteorite.name }}</td>
      <td> {{ meteorite.reclat }} latitude {{ meteorite.reclong }} longitude</td>
      <td>{{meteorite.mass}}</td>
      <td>{{meteorite.year}}</td>
  </tr>
</table>
 
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
          }).map(m=>{
             return Object.assign({},m,{position:{lat:+m.reclat, lng:+m.reclong}})
          });
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