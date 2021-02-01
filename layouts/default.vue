<template>
  <main class="main">
    <UnderConstruction v-if="isComplete" />
    <Nuxt />
  </main>
</template>

<script>
export default {
  data() {
    return {
      isComplete: false,
    }
  },
  async fetch() {
    this.isComplete = await this.$content('under-construction').fetch()
  },
}
</script>
