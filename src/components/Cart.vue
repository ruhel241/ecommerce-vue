<template>
  <div>
    <h1 class="my-4">Total Cart</h1>
    <table id="customers">
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.title }}</td>
        <td>${{ item.price }}</td>
        <td><button class="btn btn-sm btn-danger" @click="deleteItem(index)">--</button></td>
      </tr>
      <tr>
        <th>Total</th>
        <th>${{totalItem}}</th>
        <th></th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["items"],


  computed:{
    totalItem(){
      var total = 0;
      this.items.forEach( item => {
        total += parseFloat(item.price);
      })
       return total.toFixed(2);  
    }
  },

  methods:{

      deleteItem(index){
        this.$emit("removeItem", index)
      }

  }


};
</script>

<style lang="stylus" scoped></style>
