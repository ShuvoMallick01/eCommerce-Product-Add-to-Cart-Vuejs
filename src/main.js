import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// IMPORT COMPONENT
import Product from "./components/Product.vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
import CartProduct from "./components/CartProduct.vue";
import Pagination from "./components/Pagination.vue";

// MAIN APP
const app = createApp(App);
const pinia = createPinia();

// COMPONENTS
app.component("Product", Product);
app.component("ProductList", ProductList);
app.component("Cart", Cart);
app.component("CartProduct", CartProduct);
app.component("Pagination", Pagination);

app.use(pinia);
app.mount("#app");
