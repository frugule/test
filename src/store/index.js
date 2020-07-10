import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseUrl = "https://us-central1-pruebaslack-7d7b4.cloudfunctions.net/products"

function emptyCourse()  {
  return{
    id: null,
      data: {
      name: '',
      picture: '',
      description:'',
      examples: {
        title: '',
        mp3: '',
        description: ''
      },
      }
  }             
}
export default new Vuex.Store({
  state: {
    products:[],
    currentCourse: emptyCourse(),
    showExample: false,
    
  },
  mutations: {
    SET_EMPTY_COURSE(state) {
      state.currentCourse.id = null
      const base = emptyCourse()
      Object.keys(base.data).forEach(key => {
        state.currentCourse.data[key] = base.data[key]
      })
    },
    GET_COURSES(state, data){state.products = data},
    UPDATE_SHOW_EXAMPLE(state, value) {
      state.showExample = value
    },
    //CREATE_COURSE(state, data){state.currentCourse = data}
  },
  actions: {
    getCourses({commit}) {
      axios.get(`${baseUrl}/products`, {
        headers: {
          "Content-type": "text/plain"
        }
      })
      .then(response => {
        commit('GET_COURSES', response.data)
        console.log(response.data)
      })
    },
    //send data to database (one product)
    //add product to database
    postCourse({state, dispatch, commit}){
      axios.post(`${baseUrl}/product`, state.currentCourse.data)
      .then(() => {
        commit('SET_EMPTY_COURSE')
        dispatch('getCourses')
      })
    },
    updateShowExample({commit}, val) {
      console.log('setting showCart to ', val)
      return new Promise((resolve, reject) => {
        try {
          commit('UPDATE_SHOW_EXAMPLE', !!val) // !! double-negation for Boolen casting
          resolve(true)
        } catch(e) { reject(e) }
      })
    },
  },
  
  modules: {
  },
  getters:{
    showExample: state => state.showExample,
  }
})
