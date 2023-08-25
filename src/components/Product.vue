<template>
  <div class="col bg-white border border-slate-200 rounded-2xl shadow-md">
    <div
      class="h-48 overflow-hidden justify-center items-center px-16 py-2 content-center"
    >
      <img class="md:w-full w-36 mx-auto" :src="product.image" alt="" />
    </div>

    <div class="card-body py-4 px-5">
      <h2 class="font font-bold text-lg text-slate-600 mb-1 truncate">
        {{ product.title }}
      </h2>
      <p class="font font-regular text-slate-500 mb-4 truncate">
        {{ product.description }}
      </p>
      <div class="flex justify-between items-center">
        <p class="font font-bold text-xl text-slate-600">
          ${{ product.price }}
        </p>
        <button
          class="bg-primary py-2 px-4 rounded-full text-slate-200 font-medium hover:bg-primaryDark transition300 whitespace-nowrap"
          @click="handleAddToCart(product.id)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: {},
      required: true,
    },
  },
  inject: ["handleAddToCart"],
};
</script>
