<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link :to="{path: '/'}"> Ecommerce </router-link>
    
      <a class="navbar-brand" href="#"></a>
      
       <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link :to="{path: '/'}" class="nav-link"> 
              Home <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item"> 
           <router-link :to="{path: 'about'}" class="nav-link"> About </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>

      <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>

    </div>
  </nav>
</template>

<script>

import axios from "axios";

export default {
  data(){
    return {
      keyword: "",
    }
  },

  mounted(){
  // console.log(this.keyword);
  },

  methods: {
    search(){
      //this.$emit("search", this.keyword);
      var self = this;
      // console.log(this.keyword);
      axios.get('http://localhost:3000/search/'+ this.keyword ).then(response => {
        self.$store.commit('setInventory', response.data);
      })
    }
  }




};
</script>

<style lang="stylus" scoped></style>
