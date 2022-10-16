<template>
  <nav class="nav">
    <div class="nav-container">
      <div></div>
      <div class="nav-menu">
        <a @click="goTo('about')" class="nav-link">about</a>
        <a @click="goTo('projects')" class="nav-link">work</a>
        <a @click="goTo('skills')" class="nav-link">skills</a>
        <a href="https://www.linkedin.com/in/alejandro-de-los-santos-84152916b/" target="_blank" @mouseover="mouseHoverEnter('linkedin')" @mouseleave="mouseHoverLeave"><i id="linkedin" class="nav-icon fab fa-linkedin"></i></a>
        <a href="https://github.com/alejandrodlsp" target="_blank" @mouseover="mouseHoverEnter('github')" @mouseleave="mouseHoverLeave"><i id="github" class="nav-icon fab fa-github"></i></a>
        <a href="mailto:alejandrodlsp@hotmail.es" target="_blank" @mouseover="mouseHoverEnter('mail')" @mouseleave="mouseHoverLeave"><i id="mail" class="nav-icon fas fa-envelope"></i></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  methods: {
    goTo(id) {
      let el = document.getElementById(id)
      if (el) el.scrollIntoView({behavior: "smooth"});
    },

    mouseHoverEnter(color) {
      if(color == "linkedin") this.setBodyClass('background-linkedin');
      if(color == "github") this.setBodyClass('background-github');
      if(color == "mail") this.setBodyClass('background-mail');
    },

    mouseHoverLeave() {
      this.setBodyClass('')
    },

    setBodyClass(nm) {
      document.body.className = nm;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/app.scss';

.nav {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  position: fixed;
}
.nav-container {
  margin-top: 5px;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.nav-brand {
  height: 100%;
  text-decoration: none;
  color: $color-white;
  font-size: 2.13rem;
  line-height:50px;
  margin-left: 2rem;
}
.nav-menu {
  height: 100%;
  display: flex;
  font-size: 20px;
  align-items: center;
  margin-right: 3rem;
}
.nav-link {
  cursor: pointer;
  margin-right: rem;
  transition: 0.3s;
  margin-right: 1rem;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
}
.nav-link:hover {
  color: $color-pink;
  text-shadow: 1.5px 1.5px 0px $color-white;
  -webkit-transform: translateX(-3px);
}
.nav-icon {
  cursor: pointer;
  margin-left: 0.4rem;
  color:white;
  transition: 0.3s;
}
.nav-icon:hover {
  transform: scale(1.2);
}
</style>
