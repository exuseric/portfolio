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
    <a
      href="https://www.linkedin.com/exuseric"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <LinkedIn />
    </a>
  </div>
</template>

<script>
import Github from '~/static/icons/github.svg?inline'
import Twitter from '~/static/icons/twitter.svg?inline'
import LinkedIn from '~/static/icons/linkedin.svg?inline'
export default {
  components: {
    Github,
    Twitter,
    LinkedIn,
  },
}
</script>

<style lang="scss" scoped>
.socials {
  width: fit-content;
  min-width: 15rem; //240px
  height: auto;

  margin: auto;
  padding: $space-md;

  @include flex(row, space-between);
}
.link {
  @include center;

  width: 3rem; //48px
  height: 3rem; //48px

  border: 2px solid currentColor;
  border-radius: 50%;

  color: theme('text-mid');
  background-color: theme('main-bg');

  &:hover,
  &:focus {
    color: theme('text-secondary');
  }
  svg {
    width: 1.25rem; //20px
    height: 1.25rem; //20px
  }
}
</style>
