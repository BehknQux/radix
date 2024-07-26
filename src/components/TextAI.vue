<template>
  <div :class="{ 'container my-5 sa': true, visible: visible }">
    <h1 class="mb-5">
      GPT-4 surpasses GPT-3.5 in its advanced reasoning capabilities.
    </h1>
    <div class="row mt-5">
      <div
        :style="{ color: item.color + ', 0.5)' }"
        class="col"
        v-for="item in items"
        :key="item.id"
      >
        <h4 :style="{ color: item.color + ', 1)' }">{{ item.title }}</h4>
        <div :style="{ border: '1px solid ' + item.color + ', 0.5)' }">
          <div
            class="p-3"
            :style="{ 'border-bottom': '1px solid ' + item.color + ', 0.5)' }"
          >
            <h5 class="fw-bold mb-3" :style="{ color: item.color + ', 0.5)' }">
              Input
            </h5>
            <p>{{ item.input }}</p>
          </div>
          <div class="p-3" :style="{ color: item.color + ', 1)' }">
            <h5 class="fw-bold mb-3" :style="{ color: item.color + ', 1)' }">
              Output
            </h5>
            <span v-html="item.animatedOutput"></span>
            <span
              :class="{
                cursor: item.shouldBlink,
                'solid-cursor': !item.shouldBlink,
              }"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
      items: [
        {
          title: "GPT-3",
          input:
            "lksafkas jklasflkjasjf kasjk fasjlkf asjlkfsjlkafj kasj lkajf ksajlksajlkasj saklj klasjk lasjfkla jkla",
          output: [
            "bu 1. paragraf",
            "2. paragraf",
            "- liste öğesi 1",
            "- liste öğesi 2",
          ],
          color: "rgb(255, 255, 255",
          id: "0",
          animatedOutput: "",
          shouldBlink: false,
        },
        {
          title: "GPT-3",
          input:
            "lksafkas jklasflkjasjf kasjk fasjlkf asjlkfsjlkafj kasj lkajf ksajlksajlkasj saklj klasjk lasjfkla jkla",
          output: [
            "bu 1. paragraf",
            "2. paragraf",
            "- liste öğesi 1",
            "- liste öğesi 2",
          ],
          color: "rgb(255, 155, 255",
          id: "1",
          animatedOutput: "",
          shouldBlink: false,
        },
      ],
    };
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.startAnimations();
        });
      }
    },
  },
  methods: {
    startAnimations() {
      this.items.forEach((item) => {
        item.animatedOutput = ""; // Reset animatedOutput
        item.shouldBlink = false; // Reset blinking cursor
        let currentText = "";
        let paragraphIndex = 0;

        const revealNextParagraph = () => {
          if (paragraphIndex < item.output.length) {
            let paragraph = item.output[paragraphIndex];
            let charIndex = 0;

            const interval = setInterval(() => {
              if (charIndex < paragraph.length) {
                currentText += paragraph[charIndex];
                item.animatedOutput = currentText.replace(/\n/g, "<br>"); // Convert new lines to <br>
                charIndex++;
              } else {
                clearInterval(interval);
                currentText += "<br>"; // Add new line after each paragraph
                paragraphIndex++;
                revealNextParagraph(); // Move to the next paragraph
              }
            }, 50); // Adjust the speed here
          } else {
            // Ensure no trailing <br> at the end
            item.animatedOutput = currentText
              .replace(/\n/g, "<br>")
              .replace(/<br>$/, "");
            item.shouldBlink = true; // Start blinking cursor after text is fully revealed
          }
        };

        revealNextParagraph();
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

.sa {
  animation: sa 1s forwards;
}

.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity 1s ease-in;
}

.container.my-5.sa:not(.visible) {
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s 1s,
    opacity 1s ease-in;
}
</style>
