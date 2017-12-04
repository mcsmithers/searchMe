// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import VueResource for API 
import VueResource from 'vue-resource'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router and resource
Vue.use(VueResource)
Vue.use(VueRouter)
/* eslint-disable no-new */
//import the hi component
import Hi from './components/Hi'
//import the about component
import About from './components/About'
//import the search component
import Search from './components/Search'
//define your routes
const routes = [
	//route for the home route of the webpage
	{ path: '/', component: Hi },
	//route for the about route of the webpage
  { path: '/about', component: About },
  //route for the search component
  { path: '/', component: Search}
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinating the vue instance
new Vue({
	//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the vue instance
  router
}).$mount('#app')//mount the router on the app
