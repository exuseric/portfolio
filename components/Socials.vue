<template>
  <div class="socials">
    <a
      href="https://www.github.com/exuseric"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <Github />
    </a>
    <a
      href="https://www.twitter.com/exuseric"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <Twitter />
    </a>
  </div>
</template>

<script>
import Github from '~/static/icons/github.svg?inline'
import Twitter from '~/static/icons/twitter.svg?inline'
export default {
  components: {
    Github,
    Twitter,
  },
}
</script>

<style lang="scss" scoped>
.socials {
  width: fit-content;
  min-width: 20rem;
  height: auto;

  margin: auto;
  padding: $space-md;

  @include flex-justify(row, space-between);
}
.link {
  svg {
    width: 40px;
    height: 40px;
  }
}
</style>
