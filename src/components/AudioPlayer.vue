<template>
  <div>
    <div class="card">
      <div class="one">
        <span class="fs-4 fw-bold text-light">QV</span>
        <div class="music">
          <i class="fs-3 fa-solid fa-rainbow"></i>
        </div>
        <div class="mb-4 mt-2">
          <label class="container">
            <input checked="checked" type="checkbox" />
            <svg
              viewBox="0 0 320 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="pause"
            >
              <path
                d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
              ></path>
            </svg>
            <svg
              viewBox="0 0 384 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              class="play"
            >
              <path
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              ></path>
            </svg>
          </label>
        </div>
      </div>
      <div class="two"></div>
      <div class="three"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  width: 190px;
  height: 230px;
  background: black;
  border-radius: 10px;
  position: relative;
}

.card .one {
  width: 190px;
  height: 230px;
  z-index: 10;
  position: absolute;
  background: rgba(0, 0, 0, 0.55);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card .one .music {
  width: 80px;
  height: 80px;
  background: rgb(255, 255, 255);
  margin: 30px auto;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  --color: #a5a5b0;
  --size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: var(--size);
  user-select: none;
  fill: var(--color);
}

.container .play {
  position: absolute;
  animation: keyframes-fill 0.5s;
}

.container .pause {
  position: absolute;
  display: none;
  animation: keyframes-fill 0.5s;
}

.container input:checked ~ .play {
  display: none;
}

.container input:checked ~ .pause {
  display: block;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.card .two {
  width: 60px;
  height: 60px;
  background-color: rgb(0, 10, 255);
  filter: drop-shadow(0 0 10px rgb(0, 40, 255));
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 20px;
  animation: one 5s infinite;
}

.card .three {
  width: 60px;
  height: 60px;
  background-color: rgb(255, 0, 0);
  filter: drop-shadow(0 0 10px rgb(255, 0, 0));
  border-radius: 50%;
  position: absolute;
  top: 90px;
  left: 90px;
  animation: two 5s infinite;
}

@keyframes one {
  0% {
    top: 30px;
    left: 20px;
  }
  20% {
    top: 50px;
    left: 40px;
  }
  40% {
    top: 80px;
    left: 70px;
  }
  50% {
    top: 60px;
    left: 40px;
  }
  60% {
    top: 35px;
    left: 90px;
  }
  80% {
    top: 70px;
    left: 70px;
  }
  100% {
    top: 30px;
    left: 20px;
  }
}

@keyframes two {
  0% {
    top: 90px;
    left: 90px;
  }
  20% {
    top: 50px;
    left: 40px;
  }
  40% {
    top: 60px;
    left: 20px;
  }
  50% {
    top: 80px;
    left: 30px;
  }
  60% {
    top: 35px;
    left: 90px;
  }
  80% {
    top: 70px;
    left: 60px;
  }
  100% {
    top: 90px;
    left: 90px;
  }
}

@keyframes keyframes-fill {
  0% {
    transform: rotate(-180deg) scale(0);
    opacity: 0;
  }

  50% {
    transform: rotate(-10deg) scale(1.2);
  }
}
</style>
