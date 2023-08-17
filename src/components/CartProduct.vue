<template>
  <tr class="">
    <td class="px-2 py-4 text-start">
      <input
        class="h-4 w-4 focus:ring-offset-0 focus:ring-0 font-medium"
        type="checkbox"
        value=""
      />
    </td>
    <td class="px-2 py-4">
      <img src="./assets/images/product-1.jpg" class="w-20" alt="" />
    </td>
    <td class="px-2 py-4">
      <div>
        <h2>Product Title</h2>
        <p>3 x $200</p>
      </div>
    </td>
    <td class="px-2 py-4">
      <div class="flex flex-row h-10 w-full rounded-lg bg-transparent mt-1">
        <button
          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
        >
          <span class="m-auto text-2xl font-thin">−</span>
        </button>

        <input
          type="number"
          class="focus:outline-none text-center bg-gray-300 font-semibold text-md hover:text-black flex items-center text-gray-700 outline-none w-10"
          name="custom-input-number"
          value="0"
        />

        <button
          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-e-md cursor-pointer outline-none"
        >
          <span class="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </td>

    <td class="px-2 py-4 text-end">$200</td>
  </tr>
</template>

<script>
export default {};
</script>
