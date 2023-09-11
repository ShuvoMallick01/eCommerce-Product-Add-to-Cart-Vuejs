<template>
  <tr>
    <td class="px-2 py-4 text-start">
      <button @click="handleDeleteProduct(cartProduct.id)">
        <i
          class="fa-solid fa-trash-can cursor-pointer hover:text-red-600 transition-all duration-300"
        ></i>
      </button>
    </td>
    <td class="px-2 py-4">
      <img :src="cartProduct.image" class="w-20" alt="" />
    </td>
    <td class="px-2 py-4">
      <div>
        <h2>{{ cartProduct.title }}</h2>
        <p>
          {{ cartProduct.qty }} x
          {{ (cartProduct.price * cartProduct.qty).toFixed(2) }}
        </p>
      </div>
    </td>

    <td class="px-2 py-4">
      <div class="flex flex-row h-10 w-full rounded-lg bg-transparent mt-1">
        <button
          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
          @click="handleProductQuantityMinus(cartProduct.id)"
        >
          <span class="m-auto text-2xl font-thin">−</span>
        </button>

        <input
          type="number"
          class="focus:outline-none text-center bg-gray-300 font-semibold text-md hover:text-black flex items-center text-gray-700 outline-none w-10"
          name="custom-input-number"
          :value="cartProduct.qty"
        />

        <button
          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-e-md cursor-pointer outline-none"
          @click="handleProductQuantityPlus(cartProduct.id)"
        >
          <span class="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </td>

    <td class="px-2 py-4 text-end">
      ${{ (cartProduct.price * cartProduct.qty).toFixed(2) }}
    </td>
  </tr>
</template>

<script>
import { mapActions } from "pinia";
import { useCartStore } from "../store/cartsStore";
export default {
  props: {
    cartProduct: Object,
  },

  methods: {
    ...mapActions(useCartStore, [
      "handleProductQuantityPlus",
      "handleProductQuantityMinus",
      "handleDeleteProduct",
    ]),
  },
};
</script>
