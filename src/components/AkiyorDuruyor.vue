<template>
  <div class="vw-100">
    <Vue3Marquee :pauseOnHover="true" :duration="5" :clone="true">
      <div v-for="item in items">
        <img :src="item" alt="" />
      </div>
    </Vue3Marquee>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";

export default {
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      items: [
        "https://cosmos.network/_nuxt/img/e4e8374.svg",
        "https://cosmos.network/_nuxt/img/3c4860a.svg",
      ],
    };
  },
};
</script>

<style scoped></style>
