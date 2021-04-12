export default {
  namespaced: true,
  state() {
    return {
      proveedores: [
        {
          id: 'p1',
          name: 'proveedor 1'
        },
        {
          id: 'p2',
          name: 'proveedor 2'
        },
        {
          id: 'p3',
          name: 'proveedor 3'
        },
      ]
    }
  },
  mutations: {},
  actions: {},
  getters: {
    proveedores(state) {
      return state.proveedores;
    }
  }
}
