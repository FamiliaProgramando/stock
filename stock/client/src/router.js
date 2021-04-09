import { createRouter, createWebHistory } from 'vue-router';
import NuevaCoccion from './pages/NuevaCoccion.vue';
import Envasado from './pages/Envasado.vue';
// import Home from './pages/Home.vue';
// import InsumosCrue from './pages/InsumosCrue.vue';
// import ProveedoresCrue from './pages/ProveedoresCrue.vue';
// import RecetasCrue from './pages/RecetasCrue.vue';
// import RegistroLotesCrue from './pages/RegistroLotesCrue.vue';
// import StockCrue from './pages/StockCrue.vue';


// const router = createRouter({
//   history: createWebHistory(),
//   routes: [{ path: '/vue', redirect: '/vue/nuevacoccion' },
//           { path: '/vue/nuevacoccion', component: NuevaCoccion },
//           { path: '/vue/envasado', component: Envasado },
//           { path: '/vue/Home', component: Home },
//           { path: '/vue/insumos', component: InsumosCrue },
//           { path: '/vue/proveedores', component: ProveedoresCrue },
//           { path: '/vue/recetas', component: RecetasCrue },
//           { path: '/vue/registro', component: RegistroLotesCrue },
//           { path: '/vue/stock', component: StockCrue },



//   ],
// });

// export default router;

const routerOptions = [
  { path: '/vue', redirect: '/vue/nuevacoccion' },
  { path: '/vue/nuevacoccion', component: NuevaCoccion },
  { path: '/vue/envasado', component: Envasado },
]
const routes = routerOptions.map(route => {
  return {
    ...route,
    // component: () => import(`@/components/${route.component}.vue`)
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

// Vue.use(Router)
export default router;
