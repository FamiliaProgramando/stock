import { createStore } from 'vuex';

import insumosModule from './modules/insumos/index.js';
import proveedoresModule from './modules/proveedores/index.js';

const store = createStore({
  modules:{
    insumos: insumosModule,
    proveedores: proveedoresModule
  },

});

export default store;
