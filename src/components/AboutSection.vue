<template>
  <section class="fullpage about" id="about">
    <div class="about-container">
      <div class="about-title">
        <span><span class="section-heading stroke-shadow">Hello!</span> <i class="about-subtitle">I'm Alex</i></span>
        <div class="img-box"><img src="../assets/download.png" alt="Alejandro de los Santos (Me)" /></div>
      </div>
      <div class="about-description">
        I am a passionate gamer from Spain 💃, which also happens to love
        software engineering and videogame design and development.
        <br /><br />
        I also work as a 💻 <b>full stack web developer</b>, using the Ruby on
        Rails framework, and a Vue.js frontend. 

        <br /><br />
        I am a results-oriented Ruby on Rails Engineer with a strong passion for clean and efficient code. 
        Working as an independent contractor with ample experience in the development of full stack web applications.<br /><br />

        Over 3 years of profesional experience working in the web development sector with <b v-on:click="this.emitter.emit('scrollToSection', 3)" class="link">several programming tools</b>
        and languages to deliver quality results to clients. <br /><br />

        If you would like to know more about past projects, clients and services, please <b v-on:click="this.emitter.emit('scrollToSection', 4)" class="link">get in touch</b>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
@import "../assets/app.scss";

.about {
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-bg-about;
}

.about::before {
  content: "";
  position: absolute;
  bottom: -1px;
  right: 0;
  width: 100%;
  height: 70px;
  background: linear-gradient(to top, $color-bg-about, transparent);
  z-index: 3;
}

.about-container {
  width: 45%;
}

.about-title {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.about-subtitle {
  color: white;
  font-size: 3rem;
  filter: brightness(85%);
}

.img-box {
  float: right;
  width: 300px;
  transition: 0.5s;
}

.img-box img {
  margin-left: 30px;
  -webkit-transform: rotate(10deg); /* Safari & Chrome */
  -moz-transform: rotate(10deg); /* Firefox */
}

.img-box:hover {
  transform: scale(1.05);
}

.about-description {
  font-size: 1.2rem;
}

@media only screen and (max-width: 1400px) {
  .about-container {
    width: 70%;
  }
}

@media only screen and (max-width: 1000px) {
  .about-title {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  .about-subtitle {
    color: white;
    font-size: 3rem;
    filter: brightness(85%);
  }
  .about-container {
    width: 60%;
    padding: 1rem;
  }
  .img-box {
    display: none;
    float: none;
    margin: 0;
  }
  .img-box img {
    margin: 0;
  }
}

@media only screen and (max-width: 750px) {
  .about-container {
    width: 70%;
  }
  .about-title {
    font-size: 3.5rem;
  }
}
</style>
