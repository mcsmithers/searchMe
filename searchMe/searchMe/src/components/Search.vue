<template>
  <div id="app">
    <hr>
    <div class="search">
      <input type="search" v-model="term">
            <vue-fuse :keys='keys' :list="meteorites" event-name="meteoritesChanged" :default-all="defaultAllToggle"></vue-fuse>
      <label><input type="checkbox" @click="toggle">defaultAll</label>
      <div id="list">
        <ul>
          <li v-for="meteorite in methodResults" key="meteorite.id">{{meteorite.Geolocation}} | {{meteorite.name}} {{meteorite.mass}}{{meteorite.year}}{{meteorite.id}}</li>
        </ul>
      </div>
    </div>
    <hr>
    <div class='demo'>
      <h2>here's a list of meteorites to search through!</h2>
      <div id="list">
        <ul>
          <li v-for="meteorite in meteorites" key="meteorite.id">{{meteorite.Geolocation}} | {{meteorite.name}} {{meteorite.mass}}{{meteorite.year}}{{meteorite.model.id}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchMe',
  data () {
    return {
      term: '',
      defaultAllToggle: false,
      options: {
        keys: ['Geolocation', 'mass', 'year', 'name']
      },
      methodResults: [],
      keys: ['id', 'name', 'year', 'mass', 'Geolocation'],
      meteorites: [
        {
          id: 2,
          name: 'layla',
          year: 1988,
          mass: 66,
          Geolocation: 'CA, USA'
        },
        {
          id: 1,
          name: 'poiuygflayutylfga',
          year: 1988,
          mass: 66,
          Geolocation: 'MA, USA'
        },
        {
          id: 6,
          name: 'rgkyuoyjhlafghylka',
          year: 1948,
          mass: 74,
          Geolocation: 'VA, USA'
        },
        {
          id: 5,
          name: 'labylnmnbvca',
          year: 1938,
          mass: 33,
          Geolocation: 'WA, USA'
        },
        {
          id: 2,
          name: 'layykuykl',
          year: 1928,
          mass: 11,
          Geolocation: 'AR, USA'
        },
        {
          id: 21,
          name: 'lpayytrdasdfala',
          year: 1908,
          mass: 10,
          Geolocation: 'LA, USA'
        },
        {
          id: 11,
          name: 'lwerwehewraa',
          year: 1958,
          mass: 98,
          Geolocation: 'PA, USA'
        },
        {
          id: 14,
          name: 'lsdfgsdfgsdfg',
          year: 1978,
          mass: 696,
          Geolocation: 'GA, USA'
        }
      ]
    }
  },
  methods: {
    toggle () {
      this.defaultAllToggle = !this.defaultAllToggle
      this.$forceUpdate()
    }
  },
  watch: {
    term () {
      this.$search(this.term, this.meteorites, this.options).then(results => {
        this.methodResults = results
      })
    }
  },
  created () {
    this.$on('meteoritesChanged', results => {
      this.componentResults = results
    })
  }
}
</script>