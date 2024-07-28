<template>
  <div>
    <Intro />
    <div id="collageID1">
      <Collage v-if="collageDistance1 <= currentDistance" :content="content1" />
    </div>
    <div id="collageID2">
      <Collage v-if="collageDistance2 <= currentDistance" :content="content2" />
    </div>
    <div id="collageID3">
      <Collage v-if="collageDistance3 <= currentDistance" :content="content3" />
    </div>
    <AIntroduction title="QI" description="Image bot" />
    <AIntroduction title="QC" description="Chat bot" />
    <TextAI />
    <AIntroduction title="QC" description="Image scan" />
    <TextToImage />
    <SlidingPhotos />
    <AIntroduction title="QV" description="Voice bot" />
    <QV />
    <RoadMap />
    <AkiyorDuruyor />
    <Donut />
    <Cards />
    <Footer />
  </div>
  <!--  <div class="position-fixed top-0">-->
  <!--    {{ collageDistance }}-->
  <!--    <br />-->
  <!--    {{ currentDistance }}-->
  <!--  </div>-->
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
      collageDistance1: 0,
      collageDistance2: 0,
      collageDistance3: 0,
      currentDistance: 0,
      content1: [
        {
          src: new URL("./assets/SlidingPhotos/1.png", import.meta.url).href,
          height: "300",
        },
        {
          src: new URL("./assets/SlidingPhotos/2.png", import.meta.url).href,
          height: "200",
        },
      ],
      content2: [
        {
          src: new URL("./assets/SlidingPhotos/3.png", import.meta.url).href,
          height: "200",
        },
        {
          src: new URL("./assets/SlidingPhotos/4.png", import.meta.url).href,
          height: "300",
        },
      ],
      content3: [
        {
          src: new URL("./assets/SlidingPhotos/5.png", import.meta.url).href,
          height: "300",
        },
        {
          src: new URL("./assets/SlidingPhotos/6.png", import.meta.url).href,
          height: "350",
        },
      ],
    };
  },
  methods: {
    updateScroll() {
      this.currentDistance = window.scrollY + window.innerHeight / 2;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.collageDistance1 =
      document.getElementById("collageID1").getBoundingClientRect().top +
      window.scrollY;
    this.collageDistance2 =
      document.getElementById("collageID2").getBoundingClientRect().top +
      window.scrollY;
    this.collageDistance3 =
      document.getElementById("collageID3").getBoundingClientRect().top +
      window.scrollY;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped></style>
