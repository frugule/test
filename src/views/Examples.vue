<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="my-5" lg="6" v-for="product in products" :key="product.id">
          <b-card-group>
            <b-card 
            no-body class="overflow-hidden" 
            style="max-width: 540px;"
            >
              <b-row no-gutters>
                <b-col md="12">
                  <b-card-img :src="product.data.picture" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body :title="product.data.examples.title">
                    <b-card-text>
                      {{product.data.examples.description}}
                    </b-card-text>
                    <audio controls>
                    <source :src="product.data.examples.mp3" type="audio/mpeg" />Your browser does not support the audio element.
                  </audio>
                  </b-card-body>
                </b-col>
              </b-row>
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
