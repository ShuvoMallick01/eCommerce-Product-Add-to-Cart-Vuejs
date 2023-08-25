<template>
  <div class="col-span-4 lg:col-span-2">
    <div class="grid gap-8 grid-cols-1 md:grid-cols-2">
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
