<template>
  <div class="lg:col-span-2 col-span-4">
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Product -->
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>

      <!-- End -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageurl: String,
  },
};
</script>
