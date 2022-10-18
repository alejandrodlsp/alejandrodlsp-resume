<template>
  <section v-show="!error" class="fullpage projects" id="projects">
    <div class="projects-container">
      <p class="section-heading stroke-shadow">My Projects</p>
      <div class="projects-block">
        <ProjectCard
          v-for="(proj, index) in topProjects"
          :index="index+1"
          :key="index"
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
      return this.projects.filter((project) =>
        !project.fork &&
        !project.private &&
        project.name != "alejandrodlsp"
      ).sort(function(x, y) {
        if(x.stargazers_count < y.stargazers_count) return 1
        if(x.stargazers_count > y.stargazers_count) return -1
        return 0
      }).slice(0, 8);
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

.projects-container {
  width: 65%;
}

.projects-block {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
}

.project-title {
  font-size: 3.5rem;
  margin-bottom: 4rem;
}

@media only screen and (max-width: 800px) {
  .projects-block {
    display: flex;
    flex-direction: column;
  }
  .projects {
    padding: 3rem 0 3rem 0;
  }
}

@media only screen and (max-width: 1200px) and (min-width: 800px) {
  .projects-block {
    display: grid;
    grid-template-columns: auto auto;
  }
}

@media only screen and (max-width: 1400px) and (min-width: 1200px) {
  .projects-block {
    display: grid;
    grid-template-columns: auto auto auto;
  }
}
</style>
