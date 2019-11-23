<template>
  <div id="app">
    <!-- Navigation -->
    <Navber></Navber> <br /><br /><br />

    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <!-- Home slider -->
          <HomeSlider></HomeSlider>
          <!-- Inventory -->
          <Inventory :items="items"></Inventory>
        </div>

        <div class="col-lg-3">
          <!-- Cart -->
          <Cart></Cart>
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
    };
  },

  mounted() {
    this.items = data;
    //console.log(this.items);
  },
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
