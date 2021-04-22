<template>
  <div class="wrapper gallery">
    <header>
      <div class="title">
        <h1 class="heading text-lg">{{ project.title }}</h1>
        <p class="tag">
          {{ project.tagline }}
        </p>
        <p class="project-desc">{{ project.description }}</p>
      </div>

      <div class="image">
        <img
          :src="`/images/gallery/cuppa/${project.cover}`"
          :alt="`${project.title}
        logo`"
        />
      </div>
    </header>
    <div class="images">
      <div class="title">
        <h2 class="heading text-lg">Designs</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {},
    }
  },
  async fetch() {
    const filter = await this.$route.params.project
    if (filter) {
      const { 0: data } = await this.$content('projects')
        .where({ slug: { $contains: filter } })
        .fetch()
      this.project = data
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  padding: $space-md 0;

  .heading {
    color: theme('candy');
    line-height: 0.65;
  }
  .tag,
  h2 {
    color: theme('kobi');
  }
}
.project-desc {
  padding: $space-sm 0;
  text-align: center;
}

.image {
  width: 20rem;
  height: 20rem;
}
</style>
