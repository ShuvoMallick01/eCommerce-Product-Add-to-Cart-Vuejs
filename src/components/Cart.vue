<template>
  <div
    class="lg:col-span-2 col-span-4 lg:order-last order-first bg-slate-50 lg:px-8 lg:py-8 md:p-4 py-3 rounded-lg border shadow-md"
  >
    <h1 class="px-1 font-bold text-2xl mb-5">Cart</h1>

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
            <th class="px-2 py-2 text-end">Price</th>
          </tr>
        </thead>

        <tbody class="gap-4">
          <CartProduct></CartProduct>
        </tbody>
      </table>
    </div>

    <!-- Calculation -->
    <div class="px-3 space-y-1 mt-10 pt-5 border-t-2">
      <div class="flex justify-between text-lg font-medium text-slate-600">
        <p>Total Item</p>
        <p>99</p>
      </div>
      <div class="flex justify-between text-lg font-medium text-slate-600">
        <p>Items Price</p>
        <p>$1800</p>
      </div>
      <div class="flex justify-between text-lg font-medium text-slate-600 pb-3">
        <p>Shipping Charge</p>
        <p>$10</p>
      </div>
      <div
        class="flex justify-between text-lg font-bold text-slate-700 pt-3 border-t-2"
      >
        <p>Total Amount</p>
        <p>$1000</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
