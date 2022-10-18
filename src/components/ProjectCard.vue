<template>
  <a :href="project.html_url"  target=”_blank”>
    <div class="project-item staggered-animation" :style="animationStyle">
      <div>
        <div class="project-top">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
          <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
        </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </div>

        <div class="project-content">
          <h3>{{ project.name }}</h3>
          <div class="project-description">
          {{ trimmedDescription }}
          </div>
        </div>
      </div>
      <div class="project-footer">
        <div class="stargazers">
          <span>{{ project.stargazers_count }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
        </div>
        <span>{{ mainLanguage }}</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      required: true,
      type: Object
    },
    index: {
      required: true,
      type: Number
    }
  },
  computed: {
    trimmedDescription() {
      const length = 75;
      const description = this.project.description || "";
      return description.length > length ?
        description.substring(0, length - 3) + "..." :
        description;
    },
    mainLanguage() {
      return this.project.language
    },
    animationStyle() {
      return `--animation-order: ${this.index};`
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/app.scss";

.project-item {
  position: relative;
  border: 3px solid $color-white;
  border-radius: 15px;
  min-width: 200px;
  min-height: 230px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 1s !important;
}

.project-item:hover {
  transform: scale(1.1);
}

a {
  color:white;
  text-decoration: none;
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0rem 1.5rem;
}

.project-footer {
  padding: 1rem 1.5rem 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
}

.project-content {
  padding: 0 1.3rem;
}

.stargazers {
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  gap: 3px;
  align-items: baseline;
}
</style>