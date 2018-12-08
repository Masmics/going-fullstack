import VueRouter from './vue-router';
import Home from './components/home/Home.vue';
import Nonprofits from './components/nonprofits/Nonprofits.vue';

export default new VueRouter({
  routes: [
    { path: '/', components: Home },
    { path: '/nonprofits', component: Nonprofits },
    { path: '*', redirect: '/' }
  ]
});