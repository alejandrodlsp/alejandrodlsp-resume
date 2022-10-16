<template>
  <section class="fullpage about" id="about">
    <div class="about-container">
      <div class="about-title">
        <span>Hello! <i class="about-subtitle">I'm Alex</i></span>
        <div class="img-box"><img src="../assets/download.png" alt="Me" /></div>
      </div>
      <div class="about-description">
        I am a passionate gamer from Spain 💃, which also happens to love
        software engineering and videogame design and development.
        <br /><br />
        I study <b>computer games development 🎮</b> at
        <b>University of Limerick</b>, in Ireland, where I learn about
        programming and the process of creating videogames using modern day
        technologies and tools. I am currently a final year student at college,
        working towards my final year project developing a videogame engine API
        using the <i>Julia programming language</i> and <i>OpenGL4</i> where I
        am having a blast implementing and learning about the inner processes of
        what makes videogames possible. <br /><br />
        I also work as a 💻 <b>full stack web developer</b>, using the Ruby on
        Rails framework, and a Vue.js frontend. <br /><br />

        <i>*scroll down for some of my projects!*</i>
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-bg-about;
}

.about::before {
  content: "";
  position: absolute;
  bottom: -70px;
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
  font-size: 4rem;
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
  .about-container {
    width: 60%;
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
