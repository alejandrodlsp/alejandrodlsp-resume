<template>
<div class="sections-menu">
  <span
  class="menu-point"
  :class="{active: activeSection == index}"
  v-on:click="scrollToSection(index, true)"
  v-for="(offset, index) in offsets"
  v-bind:key="index"
  >
  </span>
</div>
</template>

<script>
export default {
  name: "ScrollableController",
  data() {
    return {
      inMove: false,
      inMoveDelay: 400,
      activeSection: 0,
      offsets: [],
    }
  },

  mounted() {
    this.calculateSectionOffsets();

    window.addEventListener('DOMMouseScroll', this.handleMouseWheel); // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }); // Other browsers

    this.emitter.on("scrollToSection", section => {
      this.scrollToSection(section, true);
    });
  },

  unmounted() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }); // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheel); // Mozilla Firefox
  },

  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      let offsets = []
      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        offsets.push(sectionOffset);
      }
      this.offsets = offsets
    },

    scrollToSection(id, force=false) {
      if(this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document.getElementsByTagName("section")[id].scrollIntoView({
        behavior: 'smooth'
      })

      setTimeout(() => {
        this.inMove = false;
      }, this.inMoveDelay)
    },

    handleMouseWheel: function() {
      let currentScroll = (document.documentElement.scrollTop || document.body.scrollTop)
      let currentAccuredOffset = 0
      for (let i = 0; i < this.offsets.length; i++) {
        currentAccuredOffset += this.offsets[i]
        if(currentAccuredOffset > currentScroll) {
          this.activeSection = i;
          break;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #FFF;
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease all;
}
.sections-menu .menu-point:hover {
opacity: .8;
transform: scale(1.3);
}
.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
@media only screen and (max-width: 1400px) {
  .sections-menu {
    display: none;
  }
}
</style>