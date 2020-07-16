<template>
  <div id="app">
    <router-link :to="{path: ''}"> Home </router-link>
    <router-link :to="{path: '/hello'}"> Hello </router-link>
    <router-link :to="{path: '/item/1'}"> Item </router-link>
   
    <Navber @search="search"></Navber> <br/><br/><br/>

    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <!-- Home slider -->
          <!-- <HomeSlider></HomeSlider> -->
          <!-- Inventory -->
          <router-view></router-view>
          <!-- <Inventory @newItemAdd="addCartItem" :items="items"></Inventory> -->
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
import Cart from "./components/Cart";
// import HomeSlider from "./components/HomeSlider";


export default {
  components: {
    Navber,
    Cart,
    // HomeSlider,
  },

  data() {
    return {
      items: [],
      cart: [],
    };
  },

  mounted() {
  
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
