<template>
  <div class="lg:col-span-2 col-span-4">
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Product -->
      <Product
        v-for="product in products"
        :product="product"
        :key="product.id"
      ></Product>

      <!-- End -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: [],
      required: true,
    },
  },
};
</script>
