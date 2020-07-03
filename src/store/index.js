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
    //currentUser: getFromStorage('user') || undefined,
  },
  mutations: {
    GET_COURSES(state, data){state.products = data},
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
    postCourse({state, dispatch}){
      axios.post(`${baseUrl}/product`, state.currentCourse.data)
      .then(()=>{
        dispatch('getCourses')
      })
    }
  },
  
  modules: {
  }
})
