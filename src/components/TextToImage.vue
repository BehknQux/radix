<template>
  <div class="container my-5">
    <div class="text-center padding">
      <h6>About Dall-e 3</h6>
      <h4 class="my-4">
        DALL·E 3 is now available to all ChatGPT Plus, Team and Enterprise
        users, as well as to developers through our API.
      </h4>
      <p>
        Modern text-to-image systems have a tendency to ignore words or
        descriptions, forcing users to learn prompt engineering. DALL·E 3
        represents a leap forward in our ability to generate images that exactly
        adhere to the text you provide.
      </p>
    </div>
    <div
      class="position-relative image-container d-flex justify-content-center my-5"
    >
      <div
        v-for="(button, index) in buttons"
        :key="index"
        class="position-absolute"
        :style="{ top: button.top + '%', right: button.right + '%' }"
      >
        <div class="position-relative">
          <small
            v-if="button.show"
            class="position-absolute prompt-description p-3 rounded-4 overflow-hidden"
          >
            {{ button.content }}
          </small>
          <button
            class="btn btn-dark rounded-circle"
            @click="toggleDescription(index)"
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <img
        src="https://images.ctfassets.net/kftzwdyauwt9/5JZsznv2kZBJhcntpSLEL9/fbe72de7edaceb8a44176170312ccf2a/picnic-cherry-tree.jpeg?w=1200&q=90&fm=webp"
        alt=""
      />
    </div>
    <div class="text-center padding my-5">
      <h4>
        Even with the same prompt, DALL·E 3 <br />
        significantly improves upon DALL·E 2.
      </h4>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
        <img
          class="w-100 mb-2 rounded-2"
          src="https://images.ctfassets.net/kftzwdyauwt9/10CF5rTTdApJe4nuFn6lQ7/db9982adb2dda75bd5de1046aaccf769/dalle_2_cookie.jpg?w=2048&q=90&fm=webp"
          alt=""
        />
        <p>
          DALL·E 2 · An expressive oil painting of a chocolate chip cookie being
          dipped in a glass of milk, depicted as an explosion of flavors.
        </p>
      </div>
      <div class="col-6">
        <img
          class="w-100 mb-2 rounded-2"
          src="https://images.ctfassets.net/kftzwdyauwt9/1LhyQ3RdyPfvqqHJxEfcYe/78e9693b3e5e9ec1711c7a8e69a97e4e/dalle_3_cookie.jpg?w=2048&q=90&fm=webp"
          alt=""
        />
        <p>
          DALL·E 3 · An expressive oil painting of a chocolate chip cookie being
          dipped in a glass of milk, depicted as an explosion of flavors.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          top: "20",
          right: "20",
          content:
            "Golden hour illuminates blooming cherry blossom trees around a pond.",
          show: false,
        },
        {
          top: "20",
          right: "70",
          content:
            "A woman underneath a cherry blossom tree is setting up a picnic on a yellow checkered blanket.\n" +
            "Golden hour illuminates blooming cherry blossom trees around a pond.\n" +
            "In the distance, a building with Japanese-inspired architecture is perched on the lake.",
          show: false,
        },
        {
          top: "50",
          right: "50",
          content:
            "In the distance, a building with Japanese-inspired architecture is perched on the lake.\n",
          show: false,
        },
        {
          top: "50",
          right: "80",
          content:
            "In the pond, a group of people enjoying the serenity of the sunset in a rowboat.",
          show: false,
        },
      ],
    };
  },
  methods: {
    toggleDescription(index) {
      this.buttons[index].show = !this.buttons[index].show;
    },
  },
};
</script>

<style scoped>
.padding {
  padding: 0 20rem;
}
.prompt-description {
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(0.5rem);
  width: 15rem;
  top: 2.5rem;
  left: -6rem;
}
</style>
