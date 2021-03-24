import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    inputValue: "aaa",
    nextId: 5,
    viewKey: 'all'
  },
  mutations: {
    initList(state, list) {
      state.list = list
    },
    setInputValue(state, value) {
      state.inputValue = value;
    },
    addItem(state) {
      const obj = {
        id: state.nextId,
        info: state.inputValue.trim(),
        done: false
      }
      state.list.push(obj)
      state.nextId++
      state.inputValue = ''
    },
    removeItem(state, id) {
      // state.list
      state.list.splice(id, 1)
    },
    changeStatus(state, param) {
      state.list[param.id].done = param.status
    },
    cleanDone(state) {
      state.list = state.list.filter(i => i.done === false)

    },
    changeBar(state, key) {
      state.viewKey = key

    }
  },
  actions: {
    getList(context) {
      axios.get('/list.json').then(({ data }) => {
        // console.log(data);
        context.commit('initList', data)
      })
    }
  },
  getters: {
    unDoneLength(state) {
      return state.list.filter(i => {
        return i.done == false
      }).length
    },
    infoList(state) {
      if (state.viewKey == 'all') {
        return state.list
      }
      if (state.viewKey === 'undone') {
        return state.list.filter(i => i.done === false)
      }
      if (state.viewKey === 'done') {
        return state.list.filter(i => i.done === true)
      } else {
        return state.list
      }
    }
  },
  modules: {
  }

})
