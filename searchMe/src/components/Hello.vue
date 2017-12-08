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

  <input v-model="search" placeholder="Search a meteorite...">
  <p v-for="meteorite in filteredList">{{ meteorite.name }}, Location: {{ meteorite.position }}, Mass:{{meteorite.mass}} grams, Recorded: {{meteorite.year}}</p>
  </div>
</template>

<script>
  class Meteorite {
    constructor( name, id, year, mass, latitude, longitude ) {
      this.name = name;
      this.id = id;
      this.year = year;
      this.mass = mass;
      this.latitude = latitude;
      this.longitude = longitude;
      this.position = { 'lat': latitude, 'lng': longitude }
    }
  }
  export default {
		data() {
      return {
        center: {lat: 10.0, lng: 10.0},
          search: '',
		      meteoriteList: [
        new Meteorite(
          'Aguila Blanca', 417, 1440, '1/1/1920 0:00', -30.86667, -64.55
        ),
        new Meteorite(
          'Aachen', 1, 21, '01/01/1880 12:00:00 AM', 50.775, 6.08333
        ),
        new Meteorite(
          'Aarhus', 2,720, '1/1/1951 0:00', 56.18333, 10.23333
        ),
        new Meteorite(
          'Abee', 6, 107000, '1/1/1952 0:00', 54.21667, -113
        ),
        new Meteorite(
          'Acapulco', 99, 10, '1914,1/1/1976 0:00', 16.88333, -99.9
        ),
        new Meteorite(
          'Achiras', 370, 780, '1/1/1902 0:00', -33.16667, -64.95
        ),
        new Meteorite(
          'Adhi Kot', 379, 4239, '1/1/1919 0:00', 32.1, 71.8
        ),
        new Meteorite(
          'Agen', 392, 30000, '01/01/1814 12:00:00 AM', 44.21667, 0.61667
        ),
        new Meteorite(
          'Adzhi-Bogdo', 390, 910, '1/1/1949 0:00', 44.83333, 95.16667
        ),
        new Meteorite(
          'Aioun el Atrouss', 423, '1/1/1974 0:00',  16.39806, -9.57028
        ),
        new Meteorite(
          'Aiir', 424, 24000, '1/1/1925  12:00:00 AM', 19.08333, 8.38333
        ),
        new Meteorite(
          'Aire-sur-la-Lys', 425, '01/01/1769 12:00:00 AM',  50.66667, 2.33333
        ),
        new Meteorite(
          'Akaba', 426, 779, '1/1/1949  12:00:00 AM', 29.51667, 35.05
        ),
        new Meteorite(
          'Akbarpur', 427, '01/01/1838 12:00:00 AM', 29.71667, 77.95
        ),
        new Meteorite(
          'Akwanga', 432, 3000, '1/1/1959  12:00:00 AM', 8.91667, 8.43333
        ),
        new Meteorite(
          'Akyumak', 433, 50000, '1/1/1981  12:00:00 AM', 39.91667, 42.81667
        ),
        new Meteorite(
          'Al Rais', 446, 160, '1/1/1957 0:00', 24.41667, 39.51667
        )
        
  ]
    }
		},
    computed: {
      filteredList() {
        return this.meteoriteList.filter(meteorite => {
          return meteorite.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
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