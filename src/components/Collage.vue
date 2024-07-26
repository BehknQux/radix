<template>
  <div>
    <div
      class="collage container text-center d-flex flex-column justify-content-center align-items-center my-5"
      :class="{ 'show-anim': show, 'hide-anim': !show }"
      ref="collage"
      v-show="show"
    >
      <div
        v-for="(row, index) in videos"
        :key="index"
        class="d-flex justify-content-center w-100 my-1"
        :style="'height:' + row.rowHeight"
      >
        <div
          v-for="item in row.items"
          :key="item.src ? item.src : item.content"
          :style="'height:' + item.height"
          class="d-flex justify-content-center align-items-center"
        >
          <div class="m-1 h-100 position-relative" v-if="item.src">
            <Test v-if="show" class="position-absolute bottom-0" />
            <img alt="image" :src="getImageUrl(item.src)" />
          </div>
          <h1 v-else class="text-center" :style="'width:' + item.width">
            {{ item.content }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Test from "./Test.vue";

export default {
  components: {
    Test,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    videos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      scrollDistance: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScrollDistance);
    this.updateScrollDistance(); // Initialize the distance when the component mounts
    if (this.show) {
      this.startAnimations();
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScrollDistance);
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/SlidingPhotos/${name}`, import.meta.url).href;
    },
    updateScrollDistance() {
      const collageElement = this.$refs.collage;
      if (collageElement) {
        const rect = collageElement.getBoundingClientRect();
        this.scrollDistance = window.scrollY + rect.top;
      }
    },
    startAnimations() {
      this.videos.forEach((video) => {
        video.items.forEach((item) => {
          if (item.src) {
            item.animatedOutput = ""; // Reset animatedOutput
            item.shouldBlink = false; // Reset blinking cursor
            let currentText = "";
            let charIndex = 0;

            const revealNextChar = () => {
              if (charIndex < item.src.length) {
                currentText += item.src[charIndex];
                item.animatedOutput = currentText;
                charIndex++;
              } else {
                clearInterval(interval);
                item.shouldBlink = true; // Start blinking cursor after text is fully revealed
              }
            };

            const interval = setInterval(revealNextChar, 50); // Adjust the speed here
          }
        });
      });
    },
  },
};
</script>

<style scoped>
.cursor {
  display: inline-block;
  width: 10px;
  height: 1em;
  background-color: currentColor;
  animation: blink 1s step-end infinite;
}

.solid-cursor {
  display: inline-block;
  width: 10px;
  height: 1em;
  background-color: currentColor;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.show-anim {
  animation: show 1s forwards;
}

.hide-anim {
  animation: hide 1s forwards;
}

@keyframes show {
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hide {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(2rem);
  }
}

img {
  border-radius: 1rem;
  height: 100%;
}

.scroll-counter {
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  z-index: 1000;
}
</style>
