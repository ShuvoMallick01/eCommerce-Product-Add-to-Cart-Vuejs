<template>
  <section class="myContainer grid grid-cols-4 py-10 order-2 gap-10">
    <!-- Product List -->
    <div class="lg:col-span-2 col-span-4">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Product -->
        <div class="col bg-white border border-slate-200 rounded-2xl shadow-md">
          <img class="w-full" src="./assets/images/product-1.jpg" alt="" />

          <div class="card-body py-4 px-5">
            <h2 class="font font-bold text-xl text-slate-600 mb-1">
              Product Title
            </h2>
            <p class="font font-regular text-slate-500 mb-4">
              Lorem ipsum dolor sit amet adipisicing elit.
            </p>
            <div class="flex justify-between">
              <p class="font font-bold text-xl text-slate-600">$200.00</p>
              <button
                class="bg-primary py-2 px-4 rounded-full text-slate-200 font-medium hover:bg-primaryDark transition300 whitespace-nowrap"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <!-- Product -->
        <div class="col bg-white border border-slate-200 rounded-2xl shadow-md">
          <img class="w-full" src="./assets/images/product-1.jpg" alt="" />

          <div class="card-body py-4 px-5">
            <h2 class="font font-bold text-xl text-slate-600 mb-1">
              Product Title
            </h2>
            <p class="font font-regular text-slate-500 mb-4">
              Lorem ipsum dolor sit amet adipisicing elit.
            </p>
            <div class="flex justify-between">
              <p class="font font-bold text-xl text-slate-600">$200.00</p>
              <button
                class="bg-primary py-2 px-4 rounded-full text-slate-200 font-medium hover:bg-primaryDark transition300 whitespace-nowrap"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <!-- End -->
      </div>
    </div>

    <!-- Cart List -->
    <div
      class="lg:col-span-2 col-span-4 lg:order-last order-first bg-slate-50 lg:p-6 md:p-4 py-3 rounded-lg shadow-md"
    >
      <h1 class="">Cart</h1>

      <!-- Table -->
      <div>
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-2 py-2 text-start">
                <input
                  class="h-4 w-4 focus:ring-offset-0 focus:ring-0 font-medium"
                  type="checkbox"
                />
              </th>
              <th class="px-2 py-2 text-start">Image</th>
              <th class="px-2 py-2 text-start">Product</th>
              <th class="px-2 py-2 text-start">Quantity</th>
              <th class="px-2 py-2 text-center">Price</th>
            </tr>
          </thead>

          <tbody class="gap-4">
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
                <div
                  class="flex flex-row h-10 w-full rounded-lg bg-transparent mt-1"
                >
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

              <td class="px-2 py-4 text-center">$200</td>
            </tr>
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
                <div
                  class="flex flex-row h-10 w-full rounded-lg bg-transparent mt-1"
                >
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

              <td class="px-2 py-4 text-center">$200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<!-- FUNCTIONALITY -->
<script>
export default {
  data() {
    return {};
  },
};
</script>
