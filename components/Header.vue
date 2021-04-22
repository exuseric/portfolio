<template>
  <header class="header">
    <div class="top">
      <span class="info">
        <h1 class="display">Eric Maina</h1>
        <p class="subtitle">Front-end Developer</p>
      </span>
    </div>
    <div class="bottom">
      <div class="image-wrapper">
        <img
          :src="`/images/illustrations/${image}`"
          alt="robot"
          class="image"
        />
      </div>
      <h2 class="heading current-page">
        {{ page }}
      </h2>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      required: true,
      default: 'Page',
    },
    image: {
      type: String,
      required: true,
      default: 'robot.svg',
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  @include grid-r-2(50%);

  width: 100%;
  height: 31.25rem; //500px
  text-align: center;
}

.top,
.bottom {
  width: 100%;
  height: 100%;
}

.top {
  grid-row: 1 / 2;
  @include center;

  text-align: center;
  padding: $space-md 0;

  .display {
    font-size: $font-lg;
    text-transform: lowercase;
    // text-shadow: $tight-shadow;
    text-shadow: 0 1px 0 theme('text-mid'), 0 2px 0 theme('text-mid'),
      0 3px 0 theme('text-mid'), 0 4px 0 theme('text-mid'),
      0 5px 0 theme('text-mid'), 0 6px 0 theme('text-mid'),
      0 7px 0 theme('text-mid'), 0 8px 0 theme('text-mid'),
      0 9px 0 theme('text-mid');

    color: theme('kobi');
  }
  .subtitle {
    font-size: $font-md;
    color: theme('kobi');
  }
}

.bottom {
  grid-row: 2 / -1;
  @include grid-6;

  .image-wrapper {
    grid-column: 1 / -1;
    grid-row: 1 /-1;

    filter: grayscale(70%) opacity(0.75);

    .image {
      width: 60%;
      height: auto;

      margin: auto;

      object-position: center;
    }
  }

  .current-page {
    z-index: 1;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    flex-wrap: wrap;

    font-size: $font-xl;
    text-transform: capitalize;

    color: theme('candy');

    text-shadow: 0 1px 0 theme('accent'), 0 2px 0 theme('accent'),
      0 3px 0 theme('accent'), 0 4px 0 theme('accent'), 0 5px 0 theme('accent'),
      0 6px 0 theme('accent'), 0 7px 0 theme('accent'), 0 8px 0 theme('accent'),
      0 9px 0 theme('accent');
  }
}
</style>
