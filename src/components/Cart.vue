<template>
  <div class="lg:col-span-2 col-span-4 lg:order-last order-first">
    <div
      class="border bg-slate-50 px-4 lg:px-8 lg:py-8 md:p-4 py-5 rounded-lg shadow-md relative h-60"
      :class="cartProducts.length == 0 ? 'lg:h-screen' : ''"
    >
      <h1 class="px-3 font-bold text-2xl mb-5">Cart</h1>

      <!-- Table -->
      <div>
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-2 py-2 text-start">
                <!-- <input
                class="h-4 w-4 focus:ring-offset-0 focus:ring-0 font-medium"
                type="checkbox"
              /> -->
              </th>
              <th class="px-2 py-2 text-start">Image</th>
              <th class="px-2 py-2 text-start">Product</th>
              <th class="px-2 py-2 text-start">Quantity</th>
              <th class="px-2 py-2 text-end">Price</th>
            </tr>
          </thead>

          <tbody class="gap-4">
            <!-- Card Product List -->
            <CartProduct
              v-for="cartProduct in cartProducts"
              :cartProduct="cartProduct"
              :key="cartProduct.id"
            ></CartProduct>
          </tbody>
        </table>
      </div>

      <!-- Calculation -->
      <div v-if="cartProducts.length > 0">
        <div class="px-3 space-y-1 mt-10 pt-5 border-t-2 pb-5">
          <div class="flex justify-between text-lg font-medium text-slate-600">
            <p>Total Item</p>
            <p>{{ totalItem }}</p>
          </div>
          <div class="flex justify-between text-lg font-medium text-slate-600">
            <p>Items Price</p>
            <p>${{ itemsPrice.toFixed(2) }}</p>
          </div>
          <div
            class="flex justify-between text-lg font-medium text-slate-600 pb-3"
          >
            <p>Shipping Charge</p>
            <p>$10</p>
          </div>
          <div
            class="flex justify-between text-lg font-bold text-slate-700 pt-3 border-t-2"
          >
            <p>Total Amount</p>
            <p>${{ totalAmount.toFixed(2) }}</p>
          </div>
        </div>
      </div>

      <div v-if="cartProducts.length === 0">
        <h2
          class="text-slate-400 font-light text-2xl text-center absolute inset-0 top-20 flex justify-center items-center"
        >
          Cart is Empty
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalItem: Number,
    itemsPrice: Number,
    totalAmount: Number,
  },
  inject: ["cartProducts"],
};
</script>
