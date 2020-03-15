import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '', // 当前的标题
    list: [], // 当前的电影列表
    detail: null // 表示是详情数据
  },
  mutations: {
    UpdateListAndTitle (state, payload) {
      // 直接对state进行赋值
      state.title = payload.title
      state.list = payload.list
    },
    updateDetail (state, payload) {
      state.title = payload.title
      state.detail = payload.detail
    }
  },
  actions: {
    getList (store, type) {
      // 请求豆瓣数据
      jsonp(`http://api.douban.com/v2/movie/${type}?apikey=0df993c66c0c636e29ecbb5344252a4a`, function (err, data) {
        if (err) return false
        // console.log(data)
        store.commit('UpdateListAndTitle', {
          title: data.title,
          list: data.subjects
        })
      })
    },
    // 定义一个action来获取详情数据
    getDetail (store, id) {
      jsonp(`http://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`, function (err, data) {
        if (err) return false
        console.log(data)
        store.commit('updateDetail', {
          title: data.title,
          detail: data
        })
      })
    }
  },
  modules: {
  }
})
