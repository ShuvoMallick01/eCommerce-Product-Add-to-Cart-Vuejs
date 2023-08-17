<template>
  <section class="myContainer grid grid-cols-4 py-10 order-2 lg:gap-16 gap-10">
    <!-- PRODUCT LIST -->
    <ProductList :products="products"></ProductList>

    <!-- CART SECTION -->
    <Cart></Cart>
  </section>
</template>

<!-- FUNCTIONALITY -->
<script>
// import imageUrl from "./assets/images/product-1.jpg";
import { products } from "./data/products";

export default {
  data() {
    return {
      products: [...products],
    };
  },

  provide() {
    return {
      products: this.products,
    };
  },
};
</script>
