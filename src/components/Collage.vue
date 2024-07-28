<template>
  <div
    class="d-flex flex-column align-items-center"
    :class="{ gelisss: yeter, gidisss: bruh }"
  >
    <div class="row justify-content-center">
      <div
        class="col-xl d-flex flex-column justify-content-center my-1"
        :class="{
          'align-items-end': index === 0,
          'align-items-start': index === 1,
        }"
        v-for="(image, index) in content"
        :key="index"
      >
        <div v-if="image.src" class="position-relative">
          <img
            class="rounded-4"
            :src="image.src"
            alt=""
            :style="{ height: image.height + 'px' }"
          />
          <Test class="position-absolute bottom-0 right-0"></Test>
        </div>
        <h2 v-else>{{ image.text }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Test from "./Test.vue";
export default {
  props: {
    content: {
      type: Array,
      default: null,
    },
  },
  components: {
    Test,
  },
  data() {
    return {
      yeter: false,
      bruh: false,
    };
  },
  mounted() {
    this.yeter = true;
  },
  beforeDestroy() {
    this.bruh = true;
  },
};
</script>

<style scoped>
@media (max-width: 576px) {
  img {
    height: 15rem !important;
  }
}
.gelisss {
  animation: forwards 1s artikyeter;
}

@keyframes artikyeter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(-2rem);
  }
}
.gidisss {
  animation: forwards 1s yeterartik;
}

@keyframes yeterartik {
  0% {
    opacity: 1;
    transform: translateY(-2rem);
  }
  100% {
    opacity: 0;
  }
}
</style>
