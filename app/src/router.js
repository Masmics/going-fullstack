import VueRouter from 'vue-router';
import Home from './components/Home.vue'; //or not src?
import Nonprofits from './components/Nonprofits.vue';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/nonprofits', component: Nonprofits },
    { path: '*', redirect: '/' }
  ]
});