<template>
  <div class="col-span-4 lg:col-span-2">
    <div class="grid gap-8 grid-cols-1 xl:grid-cols-2">
      <!-- Product -->
      <Product
        v-for="product in paginationProducts.products"
        :product="product"
        :key="product.id"
      ></Product>

      <!-- End -->
    </div>

    <!-- PAGINATION -->
    <Pagination></Pagination>
  </div>
</template>

<script>
export default {
  props: {},

  inject: ["paginationProducts"],
};
</script>
