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
                <b-button class="mx-2" variant="outline-warning" @click="editCourse(product.id)"><b-icon-pencil/></b-button>
                <b-button class="mx-2" variant="outline-danger" @click="removeCourse(product.id)"><b-icon-trash-fill></b-icon-trash-fill></b-button>
                <b-button id="toggle-btn" class="mx-2" variant="outline-info" @click="itemClicked(product.id)"><b-icon-list-ul></b-icon-list-ul></b-button>               
              </b-td>
            </b-tr>                  
          </b-tbody>
        </b-table-simple>
         <b-modal ref="my-modal" hide-footer title="Ejemplos">
          <div class="d-block text-center">
            <h4>Titulo: {{pro.data.examples.title}}</h4>
            <audio controls>
              <source :src="pro.data.examples.mp3" type="audio/mpeg" />Your browser does not support the audio element.
            </audio>
            <h4>Descripción: {{pro.data.examples.description}}</h4>
          </div>
          <b-button class="mt-2" variant="outline-danger" block @click="toggleModal">Cerrar</b-button>
        </b-modal>
      </div>
    </b-container>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
  export default {
    data(){
      return{
        pro: {
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
    },
    methods:{
      ...mapActions(['getCourses', 'currentCourse', 'updateName', 'updatePicture', 'updateDescription', 'updateExample', 'cancelForm', 'deleteCourse', 'getCurrentCourse']),
      itemClicked: function(product_id) {
        
        this.pro = this.products.find(product =>{
          return product.id == product_id
          
        })
        this.$refs['my-modal'].show();
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
      removeCourse(id){
      let ok = confirm('¿estas seguro?')
      if(ok){
        this.deleteCourse(id)
      }
      },
      editCourse(id){
        //primero establecer el juguete actual
        this.getCurrentCourse(id)
        
      }

    },
    computed:{
      ...mapState(['products']),
      
    },
    created(){
      this.getCourses()
    }
  }
</script>

