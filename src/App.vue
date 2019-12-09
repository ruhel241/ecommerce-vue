<template>
  <div id="app">
    <!-- Navigation --> 
    <!-- <router-view></router-view> -->
    <Navber @search="search"></Navber> <br/><br/><br/>

    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <!-- Home slider -->
          <HomeSlider></HomeSlider>
          <!-- Inventory -->
          <Inventory @newItemAdd="addCartItem" :items="items"></Inventory>
        </div>

        <div class="col-lg-3">
          <!-- Cart -->
          <Cart @removeItem="remove" :items="cart"></Cart> 
        </div>
      </div>
    </div>

    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; Your Website 2019
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navber from "./components/Navber";
import Inventory from "./components/Inventory";
import Cart from "./components/Cart";
import HomeSlider from "./components/HomeSlider";
import data from "./data.js";

export default {
  components: {
    Navber,
    Inventory,
    Cart,
    HomeSlider,
  },

  data() {
    return {
      items: [],
      cart: [],
    };
  },

  mounted() {
    this.items = data;
    //console.log(this.items);
    // console.log("serch:"+this.items);
  },


  methods:{
    addCartItem(item){
      this.cart.push(item);
    },


    remove(index){
      this.cart.splice(index, 1);
    },

    search(keyword){
      this.items = data.filter(item => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== 1
      })
    }
  }




};
</script>
<style>
#customers {
  width: 100%;
}
#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
