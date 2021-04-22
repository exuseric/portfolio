<template>
  <div class="work">
    <Header page="Projects" image="work.svg" />

    <div class="projects">
      <h2 class="heading text-lg title">Work.</h2>
      <div v-for="project in projects" :key="project.id" class="project-card">
        <ProjectCard :data="project" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    }
  },
  async fetch() {
    this.projects = await this.$content('projects').fetch()
  },
}
</script>

<style lang="scss" scoped>
.projects {
  @include flex(row, space-around);
  gap: $space-lg;

  padding: $content-spacing-md $space-sm;
  margin: auto;
}

.project-card {
  width: max-content;
  margin: auto;
}

.title {
  color: theme('text-mid');
}
</style>
