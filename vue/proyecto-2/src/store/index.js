import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Pera', cantidad: 0},
      {nombre: 'Naranja', cantidad: 0},
    ]
  },
  mutations: {
  },
  actions: {
    aumentar(state, index){
      state.frutas[index].cantidad ++
    },
    reiniciar(state){
      state.frutas.forEach(elemento => {
        elemento.cantidad = 0
      })
    }
  },
  modules: {
  }
})
