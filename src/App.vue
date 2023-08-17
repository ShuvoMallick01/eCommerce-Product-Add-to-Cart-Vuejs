<template>
  <section class="myContainer grid grid-cols-4 py-10 order-2 lg:gap-16 gap-10">
    <!-- PRODUCT LIST -->
    <ProductList :products="products"></ProductList>
    {{ calculation }}
    <!-- CART SECTION -->
    <Cart
      :totalItem="totalItem"
      :itemsPrice="itemsPrice"
      :totalAmount="totalAmount"
    ></Cart>
  </section>
</template>

<!-- FUNCTIONALITY -->
<script>
import { computed } from "vue";
import { products } from "./data/products";

export default {
  data() {
    return {
      products: [...products],
      // cartProduct: { image: "", title: "", quantity: 1, price: null },
      cartProducts: [],
      cartProductQuantity: 1,
      totalItem: 0,
      itemsPrice: 0,
      totalAmount: 0,
    };
  },

  methods: {
    handleAddToCart(productId) {
      let product = {};
      product = this.products.find((item) => item.id === productId);
      product.quantity = this.cartProductQuantity;
      this.cartProducts.push(product);

      console.log(product);
    },

    handleDeleteProduct(productId) {
      this.cartProducts = this.cartProducts.filter(
        (product) => product.id != productId
      );
    },

    handleProductQuantityPlus(productId) {
      this.cartProductQuantity++;

      this.cartProducts.map((product) => {
        if (product.id === productId) {
          product.quantity = this.cartProductQuantity;
        }
      });

      console.log(this.cartProductQuantity);
    },

    handleProductQuantityMinus(productId) {
      if (this.cartProductQuantity > 1) {
        this.cartProductQuantity--;
        console.log(this.cartProductQuantity);
      }

      this.cartProducts.map((product) => {
        if (product.id === productId) {
          product.quantity = this.cartProductQuantity;
        }
      });
    },
  },

  computed: {
    calculation() {
      this.totalItem = this.cartProducts.reduce((total, product) => {
        return total + product.quantity;
      }, 0);

      this.itemsPrice = this.cartProducts.reduce((total, product) => {
        return total + product.price;
      }, 1);

      this.totalAmount = this.cartProducts.reduce((total, product) => {
        return total + product.price;
      }, 10);
    },
  },

  provide() {
    return {
      products: computed(() => this.products),
      handleAddToCart: computed(() => this.handleAddToCart),
      cartProducts: computed(() => this.cartProducts),
      handleProductQuantityPlus: computed(() => this.handleProductQuantityPlus),
      handleProductQuantityMinus: computed(
        () => this.handleProductQuantityMinus
      ),
      handleDeleteProduct: computed(() => this.handleDeleteProduct),
    };
  },
};
</script>
