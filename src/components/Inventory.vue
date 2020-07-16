<template>
    <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <HomeSlider/>
          <div v-if="!loading" class="row">
            
            <div
              class="col-lg-4 col-md-6 mb-4"
              v-for="(item, index) in items"
              :key="index"
            >
              <div class="card h-100">
                <router-link :to="{path: '/item/' + item.id}"> 
                  <img
                      class="card-img-top"
                      :src="item.photo"
                      alt=""
                      style="height:250px"
                  />

                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">{{ item.title }}</a>
                    </h4>
                    <h5>{{ item.price }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                  </div>
                </router-link>


                <div class="card-footer">
                  <button class="btn btn-md btn-success" @click="addToCart(item)">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>

          <h1 v-else> Loading...... </h1>

          </div>
        </div>
    </div>

  <!-- /.row -->
</template>

<script>
import axios from 'axios'
import HomeSlider from './HomeSlider'
//import data from "../data";
export default {
  // props: {
  //   items: {
  //     required: true,
  //   },
  // },
  components:{
    HomeSlider
  },

  data() {
    return {
      loading: true,
     // items: []
    }
  },

  computed: {
    items(){
      return this.$store.getters.getInventory
    }
  },

  mounted() {
    //this.items = data;
     this.fetchInventory();
  },

  methods:{
    addToCart(item){
      //this.$emit("newItemAdd", item)
      //this.$store.commit('addToCart', item);

      this.$store.dispatch('addToCart', item); //lager project
    },
    fetchInventory(){
      var self = this;
      axios.get('http://localhost:3000/items').then(response => {
        setTimeout(function(){
          //self.items = response.data;
          self.loading = false;
          self.$store.commit('setInventory', response.data);
          //console.log(response)
        }, 100);
      })
    }
  }


};
</script>

<style lang="stylus" scoped></style>
