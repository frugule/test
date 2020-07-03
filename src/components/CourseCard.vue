<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12" md="6" lg="4" v-for="product in products" :key= "product.id">
          <b-card-group columns deck >
            <b-card
              :title="product.data.name"
              :img-src="product.data.picture"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2">
              <b-card-text>
              {{product.data.description}}
              </b-card-text>

              <b-button href="#" variant="primary">Description</b-button>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
        name:'CourseCard',
        methods:{
        ...mapActions(['getCourses'])
        },

        computed: {
        ...mapState(['products']),
        // cardList() {
        // console.log(this.courses)
        // return this.courses
        // }
        },
  created() {
    this.$store.dispatch('getCourses')
  },
 }



</script>



<style>

</style>
