<template>
  <div class="welcome">
    <div class="welcome-container">
      <div class="welcome-title">Alejandro de <br />los Santos</div>
      <br />
      <div class="welcome-subtitle">
        <span class="subtitle-1">web developer</span>
        <span class="subtitle-2">
          <span class="st">|</span>
          games programmer
        </span>
        <span class="subtitle-3">
          <span class="st">|</span>
          engineer
        </span>
      </div>
    </div>
    <div class="down-arrow" v-on:click="goDown">
      <i class="fas fa-angle-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goDown() {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/app.scss";

.welcome {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='921' height='110.5' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='3.9' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
  width: 100%;
  height: calc(100vh + 70px);
  margin: auto;
  text-align: center;
  position: relative;
}

.welcome-container {
  position: absolute;
  top: 30%;
  width: 100%;
}

.welcome-title {
  font-size: 5rem;
  color: $color-white;
  text-shadow: 3px 3px 0px $color-blue-accent;
}

.welcome-subtitle {
  justify-content: center;
  display: flex;
  font-size: 2rem;
  width: 100%;
}

.down-arrow {
  position: absolute;
  bottom: 10%;
  font-size: 2rem;
  width: 100%;
  cursor: pointer;
  transition: 0.3s;
  z-index: 3;
}

.down-arrow:hover {
  color: $color-blue-accent;
  text-shadow: 3px 3px 0px $color-blue-accent;
  -webkit-transform: translateY(-5px);
}

.st {
  color: $color-blue-accent;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
}
.subtitle-1 {
  animation: 1s ease-out 0s 1 loadin;
}
.subtitle-2 {
  animation: 2s ease-out 0s 1 loadin;
}
.subtitle-3 {
  animation: 3s ease-out 0s 1 loadin;
}
@keyframes loadin {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}

@media only screen and (max-width: 750px) {
  .welcome-title {
    font-size: 3.5rem;
  }
  .welcome-subtitle {
    flex-direction: column;
    top: 60%;
    font-size: 1.5rem;
  }
  .st {
    visibility: hidden;
    margin: 0;
  }
}
</style>
