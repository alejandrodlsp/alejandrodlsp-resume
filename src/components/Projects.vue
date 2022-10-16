<template>
  <div class="projects" id="projects">
    <div class="projects-container">
      <div class="project-title">Some of my work...</div>
      <div class="projects-block">
        <div
          class="project-item"
          v-for="proj in projects"
          v-bind:key="proj.name"
        >
          ASD
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Project 1",
          description: "Project 1 desc",
          image: "../assets/logo.png",
          link: "Link1",
        },
        {
          name: "Project 2",
          description: "Project 1 desc",
          image: "../assets/logo.png",
          link: "Link1",
        },
        {
          name: "Project 3",
          description: "Project 1 desc",
          image: "../assets/logo.png",
          link: "Link1",
        },
        {
          name: "Project 4",
          description: "Project 1 desc",
          image: "../assets/logo.png",
          link: "Link1",
        },
        {
          name: "Project 5",
          description: "Project 1 desc",
          image: "../assets/logo.png",
          link: "Link1",
        },
        {
          name: "Project 6",
          description: "Project 1 desc",
          image: "../assets/logo.png",
          link: "Link1",
        },
        {
          name: "Project 7",
          description: "Project 1 desc",
          image: "../assets/logo.png",
          link: "Link1",
        },
        {
          name: "Project 8",
          description: "Project 1 desc",
          image: "../assets/logo.png",
          link: "Link1",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/app.scss";

.projects {
  min-height: 100vh;
  width: 100%;
  background-color: $color-bg-projects;
  display: flex;
  justify-content: center;
  align-items: center;
}

.projects::before {
  content: "";
  position: absolute;
  bottom: calc(-100vh - 70px);
  right: 0;
  width: 100%;
  height: 70px;
  background: linear-gradient(to top, $color-bg-projects, transparent);
  z-index: 3;
}

.projects-container {
  width: 65%;
}

.projects-block {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  gap: 20px;
}

.project-title {
  font-size: 3.5rem;
  margin-top: 6rem;
  margin-bottom: 4rem;
}

.project-item {
  border: 5px solid $color-white;
  min-width: 300px;
  min-height: 300px;
}

@media only screen and (max-width: 750px) {
  .projects-block {
    flex-direction: column;
  }
}
</style>
