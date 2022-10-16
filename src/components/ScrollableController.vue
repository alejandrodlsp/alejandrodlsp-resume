<template>
<div class="sections-menu">
  <span
  class="menu-point"
  :class="{active: activeSection == index}"
  v-on:click="scrollToSection(index)"
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
      touchStartY: 0
    }
  },

  mounted() {
    this.calculateSectionOffsets();

    window.addEventListener('DOMMouseScroll', this.handleMouseWheel); // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }); // Other browsers
    window.addEventListener('touchstart', this.touchStart, {
      passive: false
    }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, {
      passive: false
    }); // mobile devices
  },

  unmounted() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    }); // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheel); // Mozilla Firefox
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
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

    handleMouseWheel: function(e) {
      e.preventDefault()
      if(this.inMove) return false

      if(e.wheelDelta < 30) {
        this.moveUp();
      } else {
        this.moveDown();
      }

      return false;
    },

    moveDown() {
      this.inMove = true
      if(this.activeSection > 0)
        this.activeSection--
      this.scrollToSection(this.activeSection, true)
    },

    moveUp() {
      this.inMove = true
      if(this.activeSection < this.offsets.length - 1)
        this.activeSection++
      this.scrollToSection(this.activeSection, true)
    },

    touchStart(e) {
      e.preventDefault();
      this.touchStartY = e.touches[0].clientY
    },

    touchMove(e) {
      e.preventDefault()
      if(this.inMove) return false;
      const currentY = e.touches[0].clientY
      if(this.touchStartY < currentY)
        this.moveDown()
      else
        this.moveUp()
      this.touchStartY = 0
      return false
    }
  }
}
</script>

<style>
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
</style>