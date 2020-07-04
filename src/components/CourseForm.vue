<template>
  <div>
    <b-container>
      <b-form @submit.prevent="" @reset="onReset" v-if="show">
        <h1>Agregar Curso</h1>
        <!--Curso-->
        <b-form-group
          id="input-group-1"
          label="Ingrese el nombre del curso:"
          label-for="input-1"
        >
          <b-form-input
            v-model="currentCourse.data.name"
            id="input-1"
            required
          ></b-form-input>
        </b-form-group>
        <!--Imagen-->
        <b-form-group id="input-group-2" label="Ingrese la URL de la imagen:" label-for="input-2">
          
          <b-form-input
            v-model="currentCourse.data.picture"
            id="input-2"
            required
          ></b-form-input>
        </b-form-group>
        <!--Description-->
        <b-form-group id="input-group-2" label="Descripción:" label-for="input-2">
          
          <b-form-textarea
          id="textarea-large"
          size="lg"
          placeholder="Large textarea"
        ></b-form-textarea>
        </b-form-group>
        <!--Example-->
        <h2>Ejemplos</h2>
        <!--Title-->
        <b-form-group
        id="input-group-1"
        label="Titulo:"
        label-for="input-1"
        >
        <b-form-input
          v-model="currentCourse.data.examples.title"
          id="input-1"
          required
        ></b-form-input>
        </b-form-group>
        <!--MP3-->
        <b-form-group
        id="input-group-1"
        label="MP3:"
        label-for="input-1"
        >
        <b-form-input
          v-model="currentCourse.data.examples.mp3"
          id="input-1"
          required
        ></b-form-input>
        </b-form-group>
        <!--Description-->
        <b-form-group
        id="input-group-1"
        label="Descripción:"
        label-for="input-1"
        >
        <b-form-textarea
          v-model="currentCourse.data.examples.description"
          id="textarea-large"
          size="lg"
          placeholder="Large textarea"
        ></b-form-textarea>
        </b-form-group>

        <b-button @click="submitForm" type="submit" variant="primary">Enviar</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
  export default {
    data() {
      return {
        show: true
      }
    },
    computed:{
      ...mapState(['currentCourse'])
    },
    methods: {
      ...mapActions(['postCourse']),
      submitForm(){
        if(this.currentCourse.id){
          console.log(this.currentCourse.id)
        }else{
          this.postCourse()
        }
      },
      /*
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },*/
      
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
