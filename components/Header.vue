<template>
  <header class="header">
    <div class="top">
      <span class="info">
        <h1 class="heading">Eric Maina</h1>
        <p class="subtitle">Front-end Developer</p>
      </span>
    </div>
    <div class="bottom">
      <img :src="`/images/illustrations/${image}`" alt="robot" />
      <h2 class="heading">
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
  @include grid(
    $column: repeat(6, 1fr),
    $row: repeat(6, ((50 / $base) + rem)),
    $gap: $space-xs
  );

  text-align: center;

  max-width: 100rem;
  height: auto;

  margin: auto;

  .top {
    grid-column: 1 / -1;
    grid-row: 1 / 6;

    width: 100%;
    height: 100%;

    padding: $space-md;
    background-color: theme('lemon');

    border-radius: 1rem;

    @include screen-lg {
      padding: $space-lg;
      border-rdaius: 2rem;
    }
  }

  .bottom {
    grid-column: 2 / -2;
    grid-row: 3 / -1;

    width: 100%;
    height: 100%;
    padding: $space-md 0;

    z-index: 2;

    @include screen-lg {
      grid-column: 3 / -3;
    }
  }

  @include screen-lg {
    @include grid(
      $column: repeat(6, 1fr),
      $row: repeat(6, ((100 / $base) + rem)),
      $gap: $space-xs
    );
    height: (800 / $base) + rem;
  }
}

.content {
  @include center;
}

.bottom {
  text-align: center;

  .heading {
    color: theme('highlight');
    font-size: $font-md;
    padding: $space-md 0;
  }
}
.info {
  width: 100%;
  height: 100%;

  text-align: center;
  background: plum;

  .heading {
    color: theme('text-light');
    font-size: $font-lg;

    @include screen-lg {
      font-size: $font-2xl;
    }
  }
  .subtitle {
    color: theme('text-dark');
    font-size: $font-md;
  }
}
</style>
