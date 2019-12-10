<template>
  <div v-if="!loading" class="row">
    <div
      class="col-lg-4 col-md-6 mb-4"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="card h-100">
        <a href="#"
          ><img
            class="card-img-top"
            :src="item.photo"
            alt=""
            style="height:250px"
        /></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">{{ item.title }}</a>
          </h4>
          <h5>{{ item.price }}</h5>
          <p class="card-text">{{ item.description }}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-md btn-success" @click="addToCart(item)">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>

  <h1 v-else> Loading...... </h1>


  <!-- /.row -->
</template>

<script>
import axios from 'axios'
//import data from "../data";
export default {
  // props: {
  //   items: {
  //     required: true,
  //   },
  // },

  data() {
    return {
      loading: true,
      items: []
    }
  },



  mounted() {
    //this.items = data;
    
    this.fetchInventory();
  },

  methods:{
    addToCart(item){
      this.$emit("newItemAdd", item)
    },
    fetchInventory(){
      var self = this;
      axios.get('http://localhost:3000/items').then(response => {

        setTimeout(function(){
          self.items = response.data;
          self.loading = false;
          console.log(response)
        }, 3000);

       
      })
    }
  }


};
</script>

<style lang="stylus" scoped></style>
