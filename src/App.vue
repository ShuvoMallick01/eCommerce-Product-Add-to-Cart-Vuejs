<template>
  <section class="myContainer grid grid-cols-4 py-10 order-2 gap-10">
    <!-- PRODUCT LIST -->
    <ProductList></ProductList>

    <!-- CART SECTION -->
    <Cart></Cart>
  </section>
</template>

<!-- FUNCTIONALITY -->
<script>
import imageUrl from "./assets/images/product-1.jpg";

export default {
  data() {
    return {
      image: imageUrl,
    };
  },

  provide() {
    return {
      image: this.image,
    };
  },
};
</script>
