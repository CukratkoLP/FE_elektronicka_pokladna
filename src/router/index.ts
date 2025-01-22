import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NumPad from '../components/NumPad.vue';
import SaltyPastryView from '../views/SaltyPastryView.vue';
import SweetPastryView from '../views/SweetPastryView.vue';
import DrinkView from '../views/DrinkView.vue';

const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/numpad', name: 'NumPad', component: NumPad },
  { path: '/salty-pastry', name: 'SaltyPastryView', component: SaltyPastryView },
  { path: '/sweet-pastry', name: 'SweetPastryView', component: SweetPastryView },
  { path: '/drink', name: 'DrinkView', component: DrinkView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
