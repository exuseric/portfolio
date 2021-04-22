<template>
  <nuxt-link to="/">
    <img :src="`/${logo}.png`" alt="logo" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: 'logo',
    },
  },
}
</script>
