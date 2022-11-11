import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.js";
//Step 1 - Import VueRouter
import { createRouter, createWebHashHistory } from "vue-router";

//Step 2 - Import all components to be used for routing
import HomePage from './components/HomePage.vue'
import ProductsPage from './components/ProductsPage.vue'
import ServicesPage from './components/ServicesPage.vue'
import AboutUsPage from './components/AboutUsPage.vue'

//Step 3 - Create the routes
const routes = [
	{ path: "/", component: HomePage },
    {path: "/products", component: ProductsPage},
    {path: "/services", component: ServicesPage},
	{ path: "/about", component: AboutUsPage },
];

//Step 4 - Configure the router and pass routes to it
const router = createRouter({
	history: createWebHashHistory(),
	routes, // short for `routes: routes`
});

//Step 5 - Creating the application
let app = createApp(App)

//Step 6 - Using the router as a middleware
app.use(router);

//Step 7 - Mounting the app to ...
app.mount('#app')
