<template>
    <div class="row"> 
        <div class="col-md-12">
        <table class="table table-bordered">
            <thead class="thead-inverse cart_thead" style="background-color: #1A7DA7">
                <tr>
                    <th> Product Image</th> 
                    <th> Title </th>
                    <th> Price </th>
                    <th> Quantity </th>
                    <th> Total</th>
                    <th> </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in items" :key="index">   
                    <td class="cart_img"> 
                        <img :src="item.photo" style="width: 30%;">
                    </td>  
                    <td>{{item.title}}</td>
                    <td>${{item.price}}</td>
                    <td>
                      <button type="submit" class="btn btn-sm btn-default" style="width:50px; margin-top: 4px"> OK </button>
                    </td>
                    <td>${{item.price}}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" type="submit" value="Delete">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td></td>    
                    <td></td>    
                    <td></td>    
                    <td></td>    
                    <td><b>${{totalItem}}</b></td>    
                    <td></td>    
                </tr>
            </tbody>

            </table>
            <div class="form-group">        
            <div class="pull-right" style="margin-right: 15px">
                <button type="submit" class="btn btn-primary" style="width: 200px; font-size:16px; font-variant: small-caps;">Confirm</button>
            </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    
    computed:{
        items(){
            return this.$store.getters.getCart
        },

        totalItem(){
            var total = 0;
            this.items.forEach( item => {
                total += parseFloat(item.price);
            })
            return total.toFixed(2);  
        }
    }


}
</script>