import { defineStore } from "pinia";
import { products } from "../data/products";

export const useProductsStore = defineStore("products", {
  state() {
    return {
      products: [...products],
      paginationProducts: [],
      pageIndex: 1,
    };
  },

  actions: {
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

  getters: {
    handlePaginationProducts() {
      let start = (this.pageIndex - 1) * 4;
      let end = this.pageIndex * 4;
      //0(0*4), 4(1*4) | 4(1*4) - 8(2*4) | 8(2*4) - 12(3*4)
      this.paginationProducts = this.products.slice(start, end);
      return { products: this.paginationProducts };
    },
  },
});
