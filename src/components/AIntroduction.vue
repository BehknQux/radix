<template>
  <div>
    <div class="sa">
      <div class="sticky-top d-flex align-items-center justify-content-center">
        <div
          class="position-relative vh-100 w-100 d-flex align-items-center justify-content-center"
        >
          <transition name="fade" mode="out-in">
            <div
              v-if="isFirstVisible"
              class="vh-100 d-flex align-items-center justify-content-center first-item"
            >
              <h1 class="position-absolute">{{ title }}</h1>
            </div>
            <div
              v-else
              class="vh-100 d-flex align-items-center justify-content-center second-item"
            >
              <p class="fs-2 position-absolute">{{ description }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isFirstVisible: true,
      scrollListener: null,
    };
  },
  mounted() {
    const saElement = this.$el.querySelector(".sa");
    const saHeight = saElement.offsetHeight;

    this.scrollListener = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const threshold = saElement.offsetTop + saHeight / 2;

      this.isFirstVisible = scrollPosition < threshold;
    };

    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.sa {
  height: 300dvh;
}

.first-item,
.second-item {
  display: flex;
}

.position-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
