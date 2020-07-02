<template>
  <div>
    <b-form @submit.prevent="login" @reset="onReset" v-if="show">
      <!--Email-->
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
      >
      <b-form-input
        id="input-1"
        v-model="email"
        type="email"
        required
        placeholder="Ingresa tu Mail"
      ></b-form-input>
      </b-form-group>
      <!--Password-->
      <b-form-group
        id="input-group-1"
        label="Contraseña:"
        label-for="input-1"
      >
      <b-input
        id="text-password"
        v-model="password"
        aria-describedby="password-help-block"
        type="password"
        required
        placeholder="Ingresa tu Contraseña"
      ></b-input>
      </b-form-group>
      
      <b-button type="submit" variant="primary">Iniciar Sesión</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <div>
      <b-alert show variant="danger" v-if="error">{{ error }}</b-alert>
    </div>
  </div>
</template>

<script>
//import db from '../../config/firebase'
import firebase from 'firebase';
  export default {
    data (){
      return {
        email: '',
        password: '',
        show: true,
        error: '',
      }
    },
    methods: {
      login(){
        if( this.email && this.password){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(user =>{
            console.log(user)
            this.$router.push('/home')
          }).catch(err =>{
            this.error = err.menssage
          })
        }else {
          this.error = 'Faltan campos por rellenar'
        }
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.email = '';
        this.password = '';
        // Trick to reset/clear native browser form validation state
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
