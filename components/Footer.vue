<template>
  <footer class="footer">
    <div class="wrapper">
      <Socials />
      <div class="content">
        <a href="mailto:ericmaina.gathoni@gmail.com" class="link">
          ericmaina.gathoni@gmail.com
        </a>
        <p>
          Copyright &copy; {{ new Date().getFullYear() }} Eric Maina Gathoni.
        </p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @include center;

  text-align: center;
  color: theme('text-mid');
}

.wrapper {
  width: 100%;
  margin: auto;
}

.link {
  text-transform: lowercase;
  color: theme('text-mid');
}

.content {
  padding: $space-md 0;
  p {
    padding: $space-sm 0;
  }
}
</style>
