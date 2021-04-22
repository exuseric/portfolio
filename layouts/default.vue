<template>
  <main class="main">
    <Navigation />
    <UnderConstruction v-if="!isComplete" />
    <div class="main__content">
      <Nuxt v-if="isComplete" />
    </div>
    <Footer />
  </main>
</template>

<script>
export default {
  data() {
    return {
      isComplete: '',
    }
  },
  async fetch() {
    const data = await this.$content('under-construction').fetch()
    this.isComplete = data[0].isComplete
  },
}
</script>
