<template>
  <section class="myContainer grid grid-cols-4 py-10 order-2 lg:gap-16 gap-10">
    <!-- PRODUCT LIST -->
    <ProductList :products="products"></ProductList>

    <!-- CART SECTION -->
    <Cart
      :totalItem="totalItem"
      :itemsPrice="itemsPrice"
      :totalAmount="totalAmount"
    ></Cart>
    {{ calculation }}
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
      // productsCopy: [...products],
      // cartProduct: { image: "", title: "", quantity: 1, price: null },
      cartProducts: [],
      // cartProductQuantity: 1,
      totalItem: 0,
      itemsPrice: 0,
      totalAmount: 0,
    };
  },

  methods: {
    handleAddToCart(productId) {
      let findProductInCart = this.cartProducts.find(
        (cartProduct) => cartProduct.id === productId
      );

      if (!findProductInCart) {
        let currentProduct = this.products.find(
          (product) => product.id === productId
        );

        this.cartProducts.push({ ...currentProduct, qty: 1 });
      } else {
        this.cartProducts = this.cartProducts.map((cartProduct) =>
          cartProduct.id === productId
            ? { ...cartProduct, qty: cartProduct.qty + 1 }
            : cartProduct
        );
      }
    },

    handleDeleteProduct(productId) {
      this.cartProducts = this.cartProducts.filter(
        (product) => product.id != productId
      );
    },

    handleProductQuantityPlus(productId) {
      this.cartProducts = this.cartProducts.map((cartProduct) =>
        cartProduct.id === productId
          ? { ...cartProduct, qty: cartProduct.qty + 1 }
          : cartProduct
      );
    },

    handleProductQuantityMinus(productId) {
      this.cartProducts = this.cartProducts.map((cartProduct) =>
        cartProduct.id === productId
          ? { ...cartProduct, qty: cartProduct.qty - 1 }
          : cartProduct
      );
    },
  },

  computed: {
    calculation() {
      this.totalItem = this.cartProducts.reduce((total, product) => {
        return total + product.qty;
      }, 0);

      this.itemsPrice = this.cartProducts.reduce((total, product) => {
        return total + product.price * product.qty;
      }, 0);

      this.totalAmount = this.itemsPrice === 0 ? 0 : this.itemsPrice + 10;
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
