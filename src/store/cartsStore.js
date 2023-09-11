import { defineStore, mapState } from "pinia";
import { useProductsStore } from "./productStore";

export const useCartStore = defineStore("carts", {
  state() {
    return {
      cartProducts: [],
    };
  },

  actions: {
    handleAddToCart(productId) {
      const { products } = useProductsStore();
      console.log(productId);

      let findProductInCart = this.cartProducts.find(
        (cartProduct) => cartProduct.id === productId
      );

      if (!findProductInCart) {
        let currentProduct = products.find(
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
  },

  getters: {
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
  },
});
