<template>
  <header class="navigation">
    <nav class="nav nav-wrapper">
      <!-- Logo -->
      <div class="logo">
        <Logo />
      </div>

      <!-- Menu -->
      <ul class="menu">
        <li v-for="link in links" :key="link.route">
          <nuxt-link :to="link.route" class="link">
            {{ link.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      links: [
        { name: 'work', route: '/' },
        { name: 'about', route: '/about' },
        { name: 'contact', route: '/contact' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  width: 100%;
  height: $nav-scale-sm;
  padding: 0 $space-md;

  background-color: theme('main-bg');

  .logo {
    width: $nav-scale-sm / 1.75;

    @include screen-lg {
      width: $nav-scale-lg / 1.75;
    }
  }

  .nav {
    @include flex(row, space-between);

    width: 100%;
    max-width: 100rem;
    height: 100%;
    margin: auto;

    background-color: inherit;
  }
  .menu {
    @include flex(row, space-between);
    gap: $space-md;
  }
  @include screen-lg {
    height: $nav-scale-lg;
  }
}

.link-btn {
  @include center;

  padding: $space-xs $space-md;
}

.icon__hide {
  opacity: 0;
  pointer-events: none;
}
.icon__show {
  opacity: 1;
  pointer-events: auto;
}

.mobile-menu {
  background-color: inherit;
}

.menu-btn {
  @include center;

  color: theme('lemon');
  background-color: transparent;
}

.icon {
  color: inherit;
}
</style>
