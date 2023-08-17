import "./assets/css/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// IMPORT COMPONENT
import Product from "./components/Product.vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
import CartProduct from "./components/CartProduct.vue";

// MAIN APP
const app = createApp(App);

// COMPONENTS
app.component("Product", Product);
app.component("ProductList", ProductList);
app.component("Cart", Cart);
app.component("CartProduct", CartProduct);

app.mount("#app");
