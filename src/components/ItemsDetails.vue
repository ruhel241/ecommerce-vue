<template>
 <h1> ItemsDetails Router {{ $route.params.id }} </h1>
</template>


<script>
import data from "../data";
export default { 
    data() {
       return {
          items: []
        }
    },

    mounted(){
        this.items = data;
    }

    

}
</script>

<style scoped>

</style>