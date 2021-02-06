<template>
  <main class="main">
    <Navigation />
    <UnderConstruction v-if="notComplete" />
    <Nuxt v-if="!notComplete" />
    <Footer />
  </main>
</template>

<script>
export default {
  data() {
    return {
      notComplete: true,
    }
  },
  async fetch() {
    this.notComplete = await this.$content('under-construction').fetch()
  },
}
</script>
