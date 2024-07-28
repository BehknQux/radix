<template>
  <div class="container">
    <h1 class="roadmap-text my-5">Roadmap</h1>
    <div class="d-flex">
      <button
        v-for="button in roadmaps"
        :key="button.label"
        @click="active = button.label"
        :class="[
          'btn',
          'text-light',
          'border-0',
          'px-4',
          'py-2',
          'rounded-5',
          'mx-1',
          { 'btn-dark': active === button.label },
        ]"
      >
        {{ button.label }}
      </button>
    </div>
    <div class="my-5 mx-4 position-relative">
      <div class="line position-absolute" ref="line">
        <div
          class="progress-bar bg-white"
          :style="{ height: getPercentOfProgress() + '%' }"
        ></div>
      </div>
      <div
        class="row roadmap-item"
        v-for="(rm, index) in activeRoadmapData"
        :key="index"
        :class="{
          'normal-roadmap': !isElementBelowViewport(index),
          'gray-roadmap': isElementBelowViewport(index),
        }"
        :ref="'roadmap-' + index"
      >
        <div class="col-1 d-flex flex-column align-items-center">
          <div class="bg-black dot-container">
            <p></p>
            <div
              class="border border-2 rounded-circle dot d-flex align-items-center justify-content-center"
            >
              <i class="fa-solid fa-check fs-4"></i>
            </div>
            <p></p>
          </div>
        </div>
        <div class="col-5">
          <h1 class="m-0">{{ rm.title }}</h1>
          <p class="text-primary mt-4 mb-3">{{ rm.blue_text }}</p>
          <p>{{ rm.bottom_text }}</p>
          <div class="py-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "2023",
      roadmaps: [
        {
          label: "2023",
          data: [
            {
              title: "DOCK Token Integration on the Nova Wallet",
              blue_text: "January 2024 · Token",
              bottom_text:
                "DOCK tokens will be supported in this self-custodial iOS/Android application.",
              checked: false,
            },
            {
              title: "DOCK Token Integration on the Nova Wallet",
              blue_text: "January 2024 · Token",
              bottom_text:
                "DOCK tokens will be supported in this self-custodial iOS/Android application.",
              checked: false,
            },
            {
              title: "DOCK Token Integration on the Nova Wallet",
              blue_text: "January 2024 · Token",
              bottom_text:
                "DOCK tokens will be supported in this self-custodial iOS/Android application.",
              checked: false,
            },
            {
              title: "DOCK Token Integration on the Nova Wallet",
              blue_text: "January 2024 · Token",
              bottom_text:
                "DOCK tokens will be supported in this self-custodial iOS/Android application.",
              checked: false,
            },
          ],
        },
        {
          label: "2024",
          data: [
            {
              title: "DOCK Token Integration on the Nova Wallet",
              blue_text: "January 2024 · Token",
              bottom_text:
                "DOCK tokens will be supported in this self-custodial iOS/Android application.",
              checked: false,
            },
          ],
        },
      ],
      offsetTop: 0,
      offsetBottom: 0,
      centerPoint: 0,
    };
  },
  computed: {
    activeRoadmapData() {
      const activeRoadmap = this.roadmaps.find(
        (rm) => rm.label === this.active,
      );
      return activeRoadmap ? activeRoadmap.data : [];
    },
  },
  methods: {
    getElementOffsetTop() {
      this.offsetTop =
        this.$refs.line.getBoundingClientRect().top + window.scrollY;
    },
    getElementOffsetBottom() {
      this.offsetBottom =
        this.$refs.line.getBoundingClientRect().bottom + window.scrollY;
    },
    getCenterPoint() {
      let screenHeight = window.innerHeight;
      let screenCenter = screenHeight / 2;
      this.centerPoint = window.scrollY + screenCenter;
    },
    updateMetrics() {
      this.getElementOffsetTop();
      this.getElementOffsetBottom();
      this.getCenterPoint();
    },
    getPercentOfProgress() {
      let percent =
        ((this.centerPoint - this.offsetTop) * 100) /
        (this.offsetBottom - this.offsetTop);
      if (percent < 100) {
        return percent;
      } else {
        return 100;
      }
    },
    isElementBelowViewport(index) {
      const element = this.$refs[`roadmap-${index}`];
      if (!element || !element[0]) return false;

      const rect = element[0].getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      return rect.top > viewportHeight / 2;
    },
  },
  mounted() {
    this.updateMetrics();
    window.addEventListener("scroll", this.updateMetrics);
    window.addEventListener("resize", this.updateMetrics);
    this.$watch("active", () => {
      this.$nextTick(() => {
        this.updateMetrics();
      });
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateMetrics);
    window.removeEventListener("resize", this.updateMetrics);
  },
};
</script>

<style scoped>
.roadmap-text {
  font-size: 3rem;
}

.dot-container {
  z-index: 0;
}

.dot {
  width: 3rem;
  height: 3rem;
}

.line {
  width: 3px;
  height: 100%;
  left: 2.5rem;
  z-index: -1;
  background-color: rgb(83, 83, 83);
}

.progress-bar {
  z-index: 1;
}

.roadmap-item {
  transition: color 0.3s ease;
}

.roadmap-item .text-primary {
  transition: color 0.3s ease;
}

.normal-roadmap {
  color: white;
}

.normal-roadmap .text-primary {
  color: #007bff !important;
  /* Primary color */
}

.gray-roadmap {
  color: gray;
}

.gray-roadmap .text-primary {
  color: gray !important;
  /* Gri */
}
</style>
