<template>
  <div>
    <div v-for="(product, index) in products" v-bind:key="index">
      <ProductComponent :name="product.name" :description="product.description" />
    </div>
  </div>
</template>

<script>
import ProductComponent from './ProductComponent.vue';

export default {
    name: "ProductsPage",
    data(){
      return{
        products:[
          {name: "Tomatoes", description: "Fresh, Organic"},
          {name: "Green-pepper", description: "Fresh, Non-organic"},
          {name: "Onions", description: "French onions, Organic"},
          {name: "Chilli pepper", description: "Both green and red peppers are available"}
        ]
    }},
    components: {
      ProductComponent
    }
}
</script>

<style>

</style>