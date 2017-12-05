// Import the vue instance
import Vue from 'vue'
// Import the App component
import App from './App'
// Import VueResource for API
import VueResource from 'vue-resource'
// Import the vue router
import VueRouter from 'vue-router'
// Import the main component
import Main from './components/Main'
// Import the about component
import About from './components/About'
// Import the search component
import Search from './components/Search'
// Import VueFuse for Search
import VueFuse from 'vue-fuse'
// Tell vue to use the router and resource and Vuefuse
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueFuse)

// Define the routes
const routes = [
// Route for the home route of the webpage
{ path: '/', component: Main },
// Route for the about route of the webpage
{ path: '/about', component: About },
  // Route for the search component
{ path: '/', component: Search }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
// Instantiating the vue instance
new Vue({
// Define the selector for the root component
  el: '#app',
// Pass the template to the root component
  template: '<App/>',
// Declare components that the root component can access
  components: { App },
// Pass in the router to the vue instance
  router
// Mount the router on the app
}).$mount('#app')
