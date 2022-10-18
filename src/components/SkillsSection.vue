<template>
<section class="fullpage skills">
  <div class="wrapper">
    <div class="header">
      <p class="section-heading stroke-shadow">My Skills</p>
      <h3>Some of the languagues and tools I enjoy and have learnt over the years, both <i>profesionally</i> and as a <i>hobbyist.</i></h3>
      <a href="" class="link link-secondary">
        <strong>You can also download my resume here 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
          <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
        </svg></strong>
      </a>
    </div>
    <div class="container">
      <div v-for="skillTree in skills" :key="skillTree.name" class="skills-container">
        <div class="title"><span class="underline">{{ skillTree.name }}</span></div>
        <div class="skill-container">
          <div class="skill-item tooltip staggered-animation" :style="`--animation-order: ${index};`" v-for="(skill, index) in skillTree.skills" :key="skill.name">
            <span class="tooltiptext">{{skill.name}}</span>
            <img class="skill-image" :src="skill.image"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      skills: [
        {
          name: "Fullstack Development",
          skills: [
            {
              name: "Vue (2 yrs)",
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            },
            {
              name: "Ruby (2 yrs)",
              image: "https://cdn-icons-png.flaticon.com/512/919/919842.png"
            },
            {
              name: "RoR (2 yrs)",
              image: "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png"
            },
            {
              name: "PostgreSQL (2 yrs)",
              image: "https://user-images.githubusercontent.com/24623425/36042969-f87531d4-0d8a-11e8-9dee-e87ab8c6a9e3.png"
            },
            {
              name: "Redis (2 yrs)",
              image: "https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png"
            },
            {
              name: "HTML5 (2 yrs)",
              image: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
            },
            {
              name: "CSS (2.5 yrs)",
              image: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
            },
            {
              name: "JavaScript (2.5 yrs)",
              image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            },
            {
              name: "TypeScript (2 yrs)",
              image: "https://play-lh.googleusercontent.com/BbuKPu-946B_nkgFYcE4Y-uxbfoUm8SWNM4j7jMWoCS-jk8TFQWeLTfbLsn6umaQn38"
            },
          ]
        },
        {
          name: "Languages & Frameworks",
          skills: [
            {
              name: "Java (4 yrs)",
              image: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
            },
            {
              name: "C# (4 yrs)",
              image: "https://static-00.iconduck.com/assets.00/c-sharp-c-icon-456x512-9sej0lrz.png"
            },
            {
              name: "Julia (1 year)",
              image: "https://avatars.githubusercontent.com/u/743164?s=400&v=4"
            },
            {
              name: "Python (2 yrs)",
              image: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
            },
            {
              name: "Selenium (1 year)",
              image: "https://static-00.iconduck.com/assets.00/selenium-icon-512x496-obrnvg2v.png"
            },
            {
              name: "Unity (4 yrs)",
              image: "https://cdn-icons-png.flaticon.com/512/5969/5969294.png"
            }
          ]
        },
        {
          name: "Tools & Services",
          skills: [
            {
              name: "VsCode",
              image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
            },
            {
              name: "Jira",
              image: "https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
            },
            {
              name: "Git",
              image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            },
            {
              name: "Jenkins",
              image: "https://cdn.icon-icons.com/icons2/2699/PNG/512/jenkins_logo_icon_170552.png"
            },
            {
              name: "Firebase",
              image: "https://cdn.iconscout.com/icon/free/png-256/firebase-3629364-3032357.png"
            },
            {
              name: "AWS",
              image: "https://cdn.iconscout.com/icon/free/png-256/aws-1869025-1583149.png"
            }
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped >
@import "../assets/app.scss";

.skills {
  width: 100%;
  background-color: $color-bg-skills;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.wrapper {
  width: 70%;
}

.wrapper > .container {
  min-height: 400px;
  background-color: $color-white;
  margin: 0;
  padding: 2rem;
  border-radius: 30px;
  color: $color-black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  margin-top: 1rem;
}

.skills-container {
  width: 33%;
}

.header > p{
  margin: 0;
}

.header > h3 {
  color: white;
}

.header > h3 > i {
  color: $color-burdungy;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: $color-white;
}

.header > a {
  color: white;
}

.skills-container .title {
  font-size: 1.2rem;
  font-weight: 500;
  padding-bottom: 1.5rem;
  margin-left: 1rem;
}

.skill-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  row-gap: 10px;
  column-gap: 10px;
  padding: 0 1rem;
}

.skill-item {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  opacity: 0.8;
  padding: .3rem;
  border-radius: 10px;
  -webkit-box-shadow: 6px 4px 25px -14px rgba(0,0,0,0.75);
  -moz-box-shadow: 6px 4px 25px -14px rgba(0,0,0,0.75);
  box-shadow: 6px 4px 25px -14px rgba(0,0,0,0.75);
  transition: 0.3s;
}

.skill-item:hover {
  transform: scale(1.1);
  background-color: $color-white;
}

.skill-image {
  width: 50px;
}

.skill-name {
  margin-top: 1rem;
}

.underline {
  color: #32557f;
  text-decoration: none;
  border-bottom: 2px dashed #32557f;
  padding-bottom: 3px;
}

.resume-container {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  color: white;
  font-size: 1rem;
}

@media only screen and (max-width: 1400px) {
  .wrapper {
    width: 85%;
  }
  .wrapper > .container {
    flex-direction: column;
    gap: 30px;
  }
  .skills-container {
    width: 100%;
  }
}
</style>
