<template>
  <section v-show="!error" class="fullpage projects" id="projects">
    <div class="projects-container">
      <div class="project-title">My Projects</div>
      <div class="projects-block">
        <ProjectCard
          v-for="proj in topProjects"
          :key="proj.name"
          :project="proj"
        />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  name: "Projects",
  components: {
    ProjectCard
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      axios.get("https://api.github.com/users/alejandrodlsp/repos?sort=stars").then((result) => {
        this.projects = result["data"];
      }).catch((error) => {
        console.log("Failed to fetch projects from github API", error);
        this.error = error;
      })
    }
  },
  computed: {
    topProjects() {
      return this.projects.filter((project) => !project.fork).slice(0, 6);
    }
  },
  data() {
    return {
      projects: [],
      error: false
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/app.scss";

.projects {
  min-height: 100vh;
  height: auto;
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

@media only screen and (max-width: 750px) {
  .projects-block {
    flex-direction: column;
  }
}
</style>
