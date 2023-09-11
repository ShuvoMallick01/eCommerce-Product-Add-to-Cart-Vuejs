<template>
  <div class="lg:col-span-2 col-span-4 lg:order-last order-first">
    <div
      class="border bg-slate-50 px-6 lg:px-8 py-5 rounded-lg shadow-md relative"
      :class="cartProducts.length == 0 ? 'lg:h-screen h-60' : ''"
    >
      <h1 class="px-3 font-bold text-3xl mb-5">Cart</h1>

      <!-- Table -->
      <div>
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-2 py-2 text-start"></th>
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
            <p>{{ calculation.totalItem }}</p>
          </div>
          <div class="flex justify-between text-lg font-medium text-slate-600">
            <p>Items Price</p>
            <p>${{ calculation.itemsPrice.toFixed(2) }}</p>
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
            <p>${{ calculation.totalAmount.toFixed(2) }}</p>
          </div>
        </div>
      </div>

      <div v-if="cartProducts.length === 0">
        <h2
          class="text-slate-400 font-light text-2xl text-center absolute inset-0 top-24 flex justify-center items-center"
        >
          Cart is Empty
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCartStore } from "../store/cartsStore";

export default {
  computed: {
    ...mapState(useCartStore, ["calculation", "cartProducts"]),
  },

  methods: {
    ...mapActions(useCartStore, ["handleAddToCart"]),
  },
};
</script>
