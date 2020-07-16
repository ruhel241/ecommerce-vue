<template>

    <div v-if="item" class="row" style="border: solid 1px #ddd; padding:20px; margin-bottom:30px">
        <div class="col-md-4"> 
            <img
                class="card-img-top"
                :src="item.photo"
                alt=""
                style="height:250px"
            />
        </div>

        <div class="col-md-8">
            <div class="card-body">
                <h4 class="card-title">
                <a href="#">{{ item.title }}</a>
                </h4>
                <h5>{{ item.price }}</h5>
                <p class="card-text">{{ item.description }}</p>
            </div>
            <div class="card-foote" style="margin-left:20px">
                 <button class="btn btn-md btn-success" @click="addToCart(item)">Add To Cart</button>
            </div>
        </div>
    </div>
    <h1 v-else> Looding... </h1>
</template>


<script>

import axios from "axios";


export default { 
    data() {
       return {
          item: null
        }
    },

    mounted(){
        this.featchItem();
    },


    methods: {
        featchItem(){
            var self = this;
            axios.get("http://localhost:3000/item/"+ this.$route.params.id).then(response => {
                self.item = response.data;
                //console.log(response)
            })
        },

        addToCart(item){
            return this.$store.commit('addToCart', item);
        }

    }



    

}
</script>

<style scoped>

</style>