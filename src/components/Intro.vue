<template>
    <div class="container text-center vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 class="header m-0">{{ header }}</h1>
      <h1 class="changing-text m-2">AI {{ text }}</h1>
      <p class="fs-3">{{ subHeader }}</p>
      <div class="row justify-content-center">
        <div class="col-sm-5 d-flex justify-content-center">
          <button class="cool-button w-100 px-5 py-3 mx-4 my-2 rounded-5">Button1</button>
        </div>
        <div class="col-sm-5 d-flex justify-content-center">
          <button class="cool-button w-100 px-5 py-3 mx-4 my-2 rounded-5">Button2</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        wordSpeed: 2000,
        charSpeed: 35,
        words: ['test1', 'example', 'apple', 'banana', 'computer', 'keyboard', 'mouse'],
        header: 'Build, deploy & monetize',
        subHeader: 'An open platform for the new AI economy',
        text: '',
        currentWordIndex: 0,
        currentCharIndex: 0,
        addCharInterval: null,
        removeCharInterval: null,
        wordInterval: null
      };
    },
    mounted() {
      this.startWordCycle();
    },
    beforeDestroy() {
      clearInterval(this.wordInterval);
      clearInterval(this.addCharInterval);
      clearInterval(this.removeCharInterval);
    },
    methods: {
      startWordCycle() {
        this.wordInterval = setInterval(() => {
          this.removeWord();
        }, this.wordSpeed);
      },
      addWord() {
        this.addCharInterval = setInterval(() => {
          if (this.currentCharIndex < this.words[this.currentWordIndex].length) {
            this.text += this.words[this.currentWordIndex][this.currentCharIndex];
            this.currentCharIndex++;
          } else {
            clearInterval(this.addCharInterval);
          }
        }, this.charSpeed);
      },
      removeWord() {
        this.removeCharInterval = setInterval(() => {
          if (this.currentCharIndex > 0) {
            this.text = this.text.slice(0, -1);
            this.currentCharIndex--;
          } else {
            clearInterval(this.removeCharInterval);
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
            this.addWord();
          }
        }, this.charSpeed);
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    font-size: 4.5rem;
  }
  
  .changing-text {
    font-size: 4rem;
    background: linear-gradient(90deg, blue, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .cool-button {
    color: white;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 500;
    text-shadow: none;
    background: transparent;
    cursor: pointer;
    box-shadow: transparent;
    border: 3px solid white;
    transition: 0.5s ease;
    user-select: none;
  }
  
  .cool-button:hover {
    color: #ffffff;
    background: #008cff;
    border: 3px solid #008cff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff, 0 0 100px #008cff;
  }
  </style>
  