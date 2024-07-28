<template>
  <div class="test" :class="{ 'fade-in': isVisible }">
    <div class="d-flex align-items-center">
      <img
        class="image-container me-2"
        src="https://images.ctfassets.net/kftzwdyauwt9/32TaWeYDFTjsFWz6xjwTek/dfc579d0c4961d13ff95e178e87b0734/dall-e1.png?w=1920&q=90&fm=webp"
        alt="logo"
      />
      <div>DALL-E 3</div>
    </div>
    <small>
      <span
        v-for="(char, index) in text"
        :key="index"
        v-show="showText"
        :style="{
          'animation-delay':
            animationDuration + index * textAnimationSpeed + 's',
        }"
        class="char"
        >{{ char }}</span
      >
    </small>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    text: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam blanditiis ipsam itaque, nemo nulla provident quibusdam",
    },
  },
  data() {
    return {
      isVisible: false,
      showText: false,
      textAnimationSpeed: 0.01,
      animationDuration: 0.3,
    };
  },
  mounted() {
    this.isVisible = true;
    setTimeout(() => {
      this.showText = true;
    }, this.animationDuration * 1000);
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    background-color: rgba(79, 79, 79, 0.45);
    height: 0;
    backdrop-filter: blur(200px);
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
  }
  100% {
    transform: translateY(0);
    width: 20rem;
    height: 7rem;
    background-color: rgba(79, 79, 79, 0.45);
    backdrop-filter: blur(200px);
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
  }
}

.fade-in {
  animation: fadeIn 1s forwards;
}

.image-container {
  width: 1rem;
  height: 1rem;
}

small span.char {
  opacity: 0;
  animation: fadeChar 0.3s forwards;
}

@keyframes fadeChar {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
