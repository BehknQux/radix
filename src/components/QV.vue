<template>
  <div class="container d-flex flex-column align-items-center">
    <div class="row my-5">
      <div class="d-flex justify-content-center align-items-center col-sm-4">
        <AudioPlayer />
      </div>
      <div class="d-flex justify-content-center align-items-center col-sm-4">
        <h1 class="m-5">to</h1>
      </div>
      <div class="d-flex justify-content-center align-items-center col-sm-4">
        <div
          class="d-flex flex-column justify-content-center text-center"
          style="width: 190px"
        >
          <h1>Prompt</h1>
          <small
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            itaque necessitatibus neque quos sunt velit.</small
          >
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="d-flex justify-content-center align-items-center col-sm-4">
        <div
          class="d-flex flex-column justify-content-center text-center"
          style="width: 190px"
        >
          <h1>Prompt</h1>
          <small
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            itaque necessitatibus neque quos sunt velit.</small
          >
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center col-sm-4">
        <h1 class="m-5">to</h1>
      </div>

      <div class="d-flex justify-content-center align-items-center col-sm-4">
        <AudioPlayer />
      </div>
    </div>
    <div class="row my-5">
      <div class="d-flex justify-content-center align-items-center col-sm-4">
        <AudioPlayer />
      </div>
      <div class="d-flex justify-content-center align-items-center col-sm-4">
        <h1 class="m-5">to</h1>
      </div>
      <div class="d-flex justify-content-center align-items-center col-sm-4">
        <AudioPlayer />
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlayer from "./AudioPlayer.vue";
export default {
  components: {
    AudioPlayer,
  },
};
</script>

<style scoped>
.prompt-width {
  width: 300px;
}
.container-padding {
  padding: 0 15rem;
}
</style>
