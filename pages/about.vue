<template>
  <div class="about">
    <Header page="About Me" image="about.svg" />

    <div class="content">
      <article class="article">
        <p class="article__cap">
          <span class="cap">Hello there, </span>Eric Maina here, I am a
          front-end developer and UX/UI enthusiast with a focus on accessibility
          in software.
        </p>
        <p>
          A visual communicator at heart, my speciality as a developer is
          creating software with a human-centered approach and aesthetically
          minimal.
        </p>
        <p>
          I am always interested in expanding my knowledge of the best available
          methods and practices in making software for all.
        </p>

        <p class="article__mail">
          Hire me or general inquiries
          <a href="mailto:ericmaina.gathoni@gmail.com" class="mail">
            ericmaina.gathoni@gmail.com
          </a>
        </p>
      </article>

      <article class="article">
        <h2 class="article__title heading">Stuff I know?</h2>
        <ol class="article__list">
          <li v-for="stuff in stuff_i_know" :key="stuff.id">
            <span class="list-title">{{ stuff.title }}</span>
            <span class="list-links">
              <a
                v-for="link in stuff.data"
                :key="link.id"
                :href="link.link"
                class="list-link gradient-btn"
              >
                {{ link.title }}
              </a>
            </span>
          </li>
        </ol>
      </article>
      <article class="article">
        <h2 class="article__title heading">Stuff to know?</h2>
        <ol class="article__list">
          <li v-for="stuff in stuff_to_know" :key="stuff.id">
            <span class="list-title">{{ stuff.title }}</span>
            <span class="list-links">
              <a
                v-for="link in stuff.data"
                :key="link.id"
                :href="link.link"
                class="list-link gradient-btn"
              >
                {{ link.title }}
              </a>
            </span>
          </li>
        </ol>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stuff_i_know: [],
      stuff_to_know: [],
    }
  },
  async fetch() {
    this.stuff_i_know = await this.$content('stuff-i-know').fetch()
    this.stuff_to_know = await this.$content('stuff-to-know').fetch()
  },
}
</script>

<style lang="scss" scoped>
.article__cap {
  position: relative;
  .cap {
    font-size: $font-md;
    top: 0;
    left: 0;

    color: theme('kobi');
  }
}

.article__title {
  font-family: $heading;
  font-size: $font-md * 1.45;
  text-align: center;

  color: theme('kobi');

  padding: ($space-md + 0.85) 0;
}

.article__mail {
  text-align: center;
  padding: $content-spacing-md 0;

  .mail {
    text-decoration: none;
    color: theme('candy');
  }
}

.article__list {
  text-align: center;
  li {
    @include flex(column, space-between);
    padding: $space-md 0;

    line-height: 1;

    list-style-type: decimal;
  }
  .list-links {
    @include flex(row, space-evenly);
    .list-link {
      text-decoration: none;

      padding: $space-sm $space-md;
      border-radius: 0.85rem;
    }
  }
}
</style>
