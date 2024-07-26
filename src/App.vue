<template>
  <div>
    <AIntroduction />
    <div ref="gpt4component1"></div>
    <Collage
      :show="yukseklik > gpt4_1 - windowHeight / 2"
      :videos="collagedata1"
    />
    <div ref="gpt4component2"></div>
    <Collage
      :show="yukseklik > gpt4_2 - windowHeight / 2"
      :videos="collagedata2"
    />
    <div ref="gpt4component3"></div>
    <Collage
      :show="yukseklik > gpt4_3 - windowHeight / 2"
      :videos="collagedata3"
    />
    <AIntroduction />
  </div>
</template>

<script>
import AkiyorDuruyor from "./components/AkiyorDuruyor.vue";
import SlidingPhotos from "./components/SlidingPhotos.vue";
import AIntroduction from "./components/AIntroduction.vue";
import TextToImage from "./components/TextToImage.vue";
import Collage from "./components/Collage.vue";
import RoadMap from "./components/RoadMap.vue";
import Footer from "./components/Footer.vue";
import TextAI from "./components/TextAI.vue";
import Intro from "./components/Intro.vue";
import Cards from "./components/Cards.vue";
import Donut from "./components/Donut.vue";
import QV from "./components/QV.vue";

export default {
  components: {
    SlidingPhotos,
    AkiyorDuruyor,
    AIntroduction,
    TextToImage,
    Collage,
    RoadMap,
    TextAI,
    Footer,
    Intro,
    Cards,
    Donut,
    QV,
  },
  data() {
    return {
      gpt4_1: "",
      gpt4_2: "",
      gpt4_3: "",
      yukseklik: 0,
      windowHeight: window.innerHeight,
      collagedata1: [
        {
          rowHeight: "300px",
          items: [
            {
              content: "High–quality videos from text & images",
              width: "600px",
            },
            {
              src: "1.png",
              height: "",
            },
          ],
        },
      ],
      collagedata2: [
        {
          rowHeight: "450px",
          items: [
            {
              src: "2.png",
              height: "",
            },
            {
              src: "3.png",
              height: "",
            },
          ],
        },
      ],
      collagedata3: [
        {
          rowHeight: "375px",
          items: [
            {
              src: "4.png",
              height: "255px",
            },
            {
              src: "5.png",
              height: "",
            },
          ],
        },
      ],
    };
  },
  methods: {
    updateScrollPosition() {
      this.yukseklik = window.scrollY;
    },
    updateComponentPositions() {
      this.gpt4_1 =
        this.$refs.gpt4component1.getBoundingClientRect().top + window.scrollY;
      this.gpt4_2 =
        this.$refs.gpt4component2.getBoundingClientRect().top + window.scrollY;
      this.gpt4_3 =
        this.$refs.gpt4component3.getBoundingClientRect().top + window.scrollY;
    },
  },
  mounted() {
    this.updateComponentPositions();
    this.updateScrollPosition();
    window.addEventListener("scroll", this.updateScrollPosition);
    window.addEventListener("resize", this.updateComponentPositions);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScrollPosition);
    window.removeEventListener("resize", this.updateComponentPositions);
  },
};
</script>

<style scoped></style>
