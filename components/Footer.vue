<template>
  <footer class="footer">
    <article class="footer__article">
      <Socials />
      <div class="footer__wrapper">
        <a href="mailto:ericmaina.gathoni@gmail.com" class="mail">
          ericmaina.gathoni@gmail.com
        </a>
        <div class="copyright">
          <p>
            Copyright &copy; {{ new Date().getFullYear() }} Eric Maina Gathoni.
          </p>
          <p>All Rights Reserved</p>
        </div>
        <!-- Logo -->
        <div class="logo">
          <Logo logo="logo-light" />
        </div>
      </div>
    </article>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @include center;

  text-align: center;
  color: theme('main-text');

  padding: $space-lg 0;
}

.mail {
  display: block;
  padding: $space-sm 0;
  text-transform: lowercase;
  text-decoration: none;
  color: theme('candy');
}

.copyright {
  padding: $space-md 0;
}

.logo {
  width: $nav-scale-sm / 2.85;
  margin: auto;
  padding: $space-md 0 0;
}
</style>
