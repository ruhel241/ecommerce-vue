export const storage = {
    state: {
        inventory : [],
        cart: []
    },
    getters: {
        getInventory(state){
            return state.inventory
        },
        getCart(state){
            return state.cart
        }
    },

    mutations: {
        setInventory(state, payload){
            state.inventory = payload;
        },

        addToCart(state, payload){
            state.cart.push(payload)
        },
        removeItem(state, payload){
            state.cart.splice(payload, 1)
        },

        cleaCart(state){
            state.cart = [];
        }
    },

    /**
     * using actions for large project, its asynchronous 
     */

    actions: {
        addToCart(contex, payload){
          contex.commit('addToCart', payload)
        }
    }
}