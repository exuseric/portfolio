<template>
  <header class="navigation">
    <nav class="nav nav-wrapper">
      <!-- Logo -->
      <div class="logo">
        <Logo logo="logo" />
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
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  width: 100%;
  height: $nav-scale-sm;
  padding: 0 $space-md;

  background: theme('candy');

  .logo {
    width: $nav-scale-sm / 2.85;

    @include sm-screen {
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
}

.link {
  position: relative;
  z-index: 2;

  font-size: $font-sm;
  text-decoration: none;
  text-transform: capitalize;

  color: theme('text-dark');

  margin: auto;
  padding: $space-xs - 0.25;

  animation: 1s appear;
  transition: all 0.35s ease-out;

  &:hover {
    color: theme('accent');
  }

  &.nuxt-link-exact-active {
    color: theme('accent');

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      z-index: -1;

      transform: translate(-50%, -50%) scale(1);

      width: 100%;
      height: 0.25rem;

      color: inherit;
      background-color: currentColor;

      border-radius: 10px;

      box-shadow: $tight-shadow;

      animation: ping 0.8s ease-in-out infinite both;
      // animation: appear 3s linear infinite;
    }
  }
}

.link-btn {
  @include center;

  padding: $space-xs $space-md;
}
</style>
