import Vue from 'vue'
import Vuex from 'vuex'

// 1 安装插件
Vue.use(Vuex)

// 2 创建对象并导出

export default new Vuex.Store({
  state: {
    count: 1000
  },
  // 修改state 必须通过mutation
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }

  },
  // 全局计算属性
  getters: {

  },
  actions: {
  },
  // 模块 可重复定义模块
  modules: {
    a: {
      state: {},
      mutations: {},
      actions: {}
    },
    b: {

    }
  }
})
// 单一状态树