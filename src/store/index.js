import Vue from 'vue'
import Vuex from 'vuex'
import VuexPromiseMiddleware from 'vuex-promise-middleware'

import * as articles from '@/store/articles'

Vue.use(Vuex)

const plugins = [VuexPromiseMiddleware]

export default new Vuex.Store({
  plugins,
  events:{},
  state: {},
  mutations: {},
  actions: {},
  modules:{
    articles,
  }
})
