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
    
  },
  mutations: {
    SET_EMPTY_COURSE(state) {
      state.currentCourse.id = null
      const base = emptyCourse()
      Object.keys(base.data).forEach(key => {
        state.currentCourse.data[key] = base.data[key]
      })
    },
    GET_CURRENT_COURSE(state, product){state.currentCourse = product},
    GET_COURSES(state, data){state.products = data},
    UPDATE_NAME(state, name){state.currentCourse.data.name = name},
    UPDATE_PICTURE(state, picture){state.currentCourse.data.picture = picture},
    UPDATE_DESCRIPTION(state, description){state.currentCourse.data.description = description},
    UPDATE_EXAMPLE(state, example){state.currentCourse.data.example = example},
    //CREATE_COURSE(state, data){state.currentCourse = data}
  },
  actions: {
    getCourses({commit}) {
      commit('SET_EMPTY_COURSE')
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
    deleteCourse({dispatch, commit}, id){
      axios.delete(`${baseUrl}/product/${id}`)
      .then(() => {
      //trae los datos de la lista(envia los datos)
      commit('SET_EMPTY_COURSE')
      dispatch('getCourses')
      })
    },
    updateCourse({ state, dispatch }, id){
      axios.put(`${baseUrl}/product/${id}`, state.currentCourse.data)
      .then(() => {
        dispatch('getCourses')
      })
    },
    getCurrentCourse({ commit }, id){
      axios.get(`${baseUrl}/product/${id}`)
      .then((response) =>{
        commit('GET_CURRENT_COURSE', response.data)
      })
    },
    updateName({ commit }, name){ commit('UPDATE_NAME', name)},
    updatePicture({ commit }, picture){ commit('UPDATE_PICTURE', picture)},
    updateDescription({ commit }, description){ commit('UPDATE_DESCRIPTION', description)},
    updateExample({ commit }, example){ commit('UPDATE_EXAMPLE', example)},
    closeForm({commit}){
      commit('SET_EMPTY_COURSE')
    },
    
  },
  
  modules: {
  },
  getters:{
    //showExample: state => state.showExample,
  }
})
