<template>
  <div>
    <b-container class="mt-5">
      <div>
        <b-table-simple hover small caption-top responsive fixed >
          
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>Nombre del Curso</b-th>
              <b-th>Url de la Imagen</b-th>
              <b-th>Descripción</b-th>
              
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="product in products" :key="product.id">
              <b-td>{{ product.data.name }}</b-td>
              <b-td><img :src="product.data.picture" height="100px" alt=""/></b-td>
              <b-td>{{ product.data.description }}</b-td>
              <b-td class="d-flex">
                <b-button class="mx-2" variant="outline-warning"><b-icon-pencil/></b-button>
                <b-button class="mx-2" variant="outline-danger"><b-icon-trash-fill></b-icon-trash-fill></b-button>
                <b-button id="toggle-btn" @click="toggleModal" class="mx-2" variant="outline-info"><b-icon-list-ul></b-icon-list-ul></b-button>               
              </b-td> 
            </b-tr>                  
          </b-tbody>
        </b-table-simple>
        <b-modal ref="my-modal" hide-footer title="Using Component Methods">
          <div class="d-block text-center">
            <h3>Hello From My Modal!</h3>
          </div>
          <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
        </b-modal>
      </div>
    </b-container>
  </div>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'
  export default {
    methods:{
      ...mapActions(['getCourses', 'currentCourse']),
      
      
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }

    },
    computed:{
      ...mapState(['products'])
    },
    created(){
      this.getCourses()
    }
  }
</script>

