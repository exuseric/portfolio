<template>
  <div class="socials">
    <a
      href="https://www.github.com/exuseric"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
      aria-label="Github"
    >
      <Github />
    </a>
    <a
      href="https://www.twitter.com/exuseric"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
      aria-label="Twitter"
    >
      <Twitter />
    </a>
    <a
      href="https://www.linkedin.com/in/eric-g-48691b165"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
      aria-label="Linkedin"
    >
      <LinkedIn />
    </a>
  </div>
</template>

<script>
import Github from '~/static/images/icons/github.svg?inline'
import Twitter from '~/static/images/icons/twitter.svg?inline'
import LinkedIn from '~/static/images/icons/linkedin.svg?inline'
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
  position: relative;
  z-index: 1;

  @include center;

  width: 3rem; //48px
  height: 3rem; //48px

  color: theme('text-mid');
  background: theme('night');

  border: 2px solid currentColor;
  border-radius: 50%;

  &:hover,
  &:focus {
    color: theme('text-light');
    background: theme('sky');
  }
  svg {
    width: 1.25rem; //20px
    height: 1.25rem; //20px
  }
}
</style>
