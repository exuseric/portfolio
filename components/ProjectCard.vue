<template>
  <article class="card" :style="`border: 2px solid ${data.overlayColor}`">
    <aside class="aside">
      <figure class="figure">
        <span class="logo">
          <img
            :src="`/images/gallery/${data.title}/${data.cover}`"
            :alt="data.title"
            class="logo__img"
          />
        </span>
        <span class="mockup">
          <img
            :src="`/images/gallery/${data.title}/mockup.png`"
            :alt="data.title"
            class="mockup__img"
          />
        </span>

        <a
          :href="`${data.url}`"
          target="_blank"
          rel="noopener noreferrer"
          class="visit"
          :title="`Open ${data.title} on a new tab`"
          :aria-label="`Open ${data.title} on a new tab`"
        >
          <External />
        </a>
      </figure>
    </aside>

    <header class="header">
      <h2 class="heading text-lg header__title">
        {{ data.title }}
      </h2>
      <h3 class="header__subtitle">
        {{ data.tagline }}
      </h3>
    </header>

    <div class="body">
      <p class="body__copy">
        {{ data.description }}
      </p>
    </div>

    <footer class="footer">
      <div class="repo">
        <a
          class="repo__link"
          :href="`${data.repo.url}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ data.repo.title }}
        </a>
      </div>
      <div class="stack">
        <a
          v-for="stack in data.stack"
          :key="stack.id"
          class="stack__link"
          :href="`${stack.url}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ stack.title }}
        </a>
      </div>
    </footer>
  </article>
</template>

<script>
import External from '~/static/images/icons/external-link-alt.svg?inline'

export default {
  components: {
    External,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  @include grid(1fr, 40% 20% 1fr 20%, 0);

  width: 100vw;
  min-height: 105vh;
  height: 100%;

  background: theme('main-bg');

  border-radius: 0.85rem;

  overflow: hidden;

  & > * {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;
  }
}

.figure {
  width: 100%;
  height: 100%;

  @include grid(repeat(6, 1fr), repeat(6, 1fr), 0);

  width: 100%;
  height: 100%;

  padding: $space-sm;
  .logo {
    grid-column: 1 / -1;
    grid-row: 1/ -1;
  }

  .mockup {
    grid-column: 1 / 5;
    grid-row: 1 / -1;

    &__img {
      max-height: 20rem;
      width: auto;
    }
  }
}

.visit {
  @include center;

  grid-column: 6 / -1;
  grid-row: 1 / 2;

  width: 100%;
  height: 100%;

  color: theme('candy');

  text-decoration: none;
  font-weight: 700;
}

.header {
  color: theme('kobi');

  text-align: center;
  line-height: 1;

  &__title {
    line-height: 0.5;
  }

  &__subtitle {
    font-weight: 400;
  }
}

.body {
  padding: 0 $space-md + 0.85;
}

.footer {
  @include grid-r-2(50%);

  .repo {
    @include center;
    grid-row: 1 / 2;

    &__link {
      padding: $space-sm - 0.25 $space-md + 2.45;

      font-size: $font-md;
      color: theme('text-light');
      background: theme('sky');
      text-transform: capitalize;
      text-decoration: none;

      border: 2px solid currentColor;
      border-radius: 30px;
    }
  }

  .stack {
    @include flex(row, space-between);
    grid-row: 2 / -1;

    padding: 0 $space-md;

    &__link {
      padding: $space-sm;

      color: theme('text-mid');
      text-decoration: none;
    }
  }
}
</style>
