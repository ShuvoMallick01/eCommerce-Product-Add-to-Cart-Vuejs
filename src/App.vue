<template>
  <section class="myContainer grid grid-cols-4 py-10 order-2 lg:gap-16 gap-10">
    <!-- PRODUCT LIST -->
    <ProductList></ProductList>

    <!-- CART SECTION -->
    <Cart></Cart>
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
      cartProducts: [],
      paginationProducts: [],
      pageIndex: 1,
      totalPage: null,
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
      this.cartProducts = this.cartProducts.map((cartProduct) => {
        if (cartProduct.id === productId) {
          let newQty = cartProduct.qty > 0 ? cartProduct.qty - 1 : 0;
          return { ...cartProduct, qty: newQty };
        } else {
          return cartProduct;
        }
      });
    },

    handleNextPagination() {
      this.pageIndex++;
    },

    handlePrevPagination() {
      this.pageIndex--;
    },

    handlePaginationNumber(num) {
      this.pageIndex = num;
    },
  },

  computed: {
    calculation() {
      let totalItem = this.cartProducts.reduce((total, product) => {
        return total + product.qty;
      }, 0);

      let itemsPrice = this.cartProducts.reduce((total, product) => {
        return total + product.price * product.qty;
      }, 0);

      let totalAmount = itemsPrice === 0 ? 0 : itemsPrice + 10;

      return {
        totalItem,
        itemsPrice,
        totalAmount,
      };
    },

    handleTotalPage() {
      return Math.ceil(this.products.length / 4);
    },

    handlePaginationProducts() {
      let start = (this.pageIndex - 1) * 4;
      let end = this.pageIndex * 4;
      //0(0*4), 4(1*4) | 4(1*4) - 8(2*4) | 8(2*4) - 12(3*4)
      this.paginationProducts = this.products.slice(start, end);

      return { products: this.paginationProducts };
    },
  },

  provide() {
    return {
      products: computed(() => this.products),
      cartProducts: computed(() => this.cartProducts),
      totalPage: computed(() => this.handleTotalPage),
      pageIndex: computed(() => this.pageIndex),
      handleAddToCart: this.handleAddToCart,
      handleProductQuantityPlus: this.handleProductQuantityPlus,
      handleProductQuantityMinus: this.handleProductQuantityMinus,
      handleDeleteProduct: this.handleDeleteProduct,
      nextPagination: this.handleNextPagination,
      prevPagination: this.handlePrevPagination,
      paginationNumber: this.handlePaginationNumber,
      calculation: computed(() => this.calculation),
      paginationProducts: computed(() => this.handlePaginationProducts),
    };
  },
};
</script>
