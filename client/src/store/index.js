import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let baseUrl = "http://localhost:5000"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false,
    sales: [],
  },
  mutations: {
    ISLOGIN(state,payload){
      state.isLogin = payload
    },
  },
  actions: {
    loginUser(context, payload){
      return new Promise((resolve,reject)=>{
         let url = `${baseUrl}/login`
         axios({
           method: 'POST',
           url,
           data : payload
         })
         .then(({data})=>{
             resolve(data)
             context.commit('ISLOGIN', true)
         })
         .catch(err=>{
             reject(err)
         })
      })
     }
  },
  modules: {
  }
})
