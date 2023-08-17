<template>
  <div class="col bg-white border border-slate-200 rounded-2xl shadow-md">
    <img class="w-full" :src="image" alt="" />

    <div class="card-body py-4 px-5">
      <h2 class="font font-bold text-xl text-slate-600 mb-1">Product Title</h2>
      <p class="font font-regular text-slate-500 mb-4">
        Lorem ipsum dolor sit amet adipisicing elit.
      </p>
      <div class="flex justify-between items-center">
        <p class="font font-bold text-xl text-slate-600">$200.00</p>
        <button
          class="bg-primary py-2 px-4 rounded-full text-slate-200 font-medium hover:bg-primaryDark transition300 whitespace-nowrap"
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
    imageurl: String,
  },
  inject: ["image"],
};
</script>
