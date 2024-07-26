import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(VueApexCharts).mount('#app')
