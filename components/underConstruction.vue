<template>
  <div class="container">
    <section class="content">
      <header class="header">
        <h1 class="text-lg heading">Eric Maina</h1>
        <p class="text-md heading">Front-end Developer</p>
      </header>
      <Form />
    </section>

    <section class="illustration">
      <header class="header">
        <h2 class="text-md heading">Work in Progress</h2>
      </header>

      <div class="image">
        <img src="/images/robot-illustration.svg" alt="robot" />
      </div>

      <div class="socials">
        <Socials />
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  @include grid-cols-2(50%);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  background-color: $black;
  .illustration {
    grid-column: 2 / -1;
    grid-row: 1 / -1;

    width: 100%;
    height: auto;

    padding: $space-lg;
  }
}

.content {
  @include grid-rows-2(auto);
  grid-column: 1 / 2;
  grid-row: 1 / -1;

  width: 100%;
  height: 100%;

  padding: $space-lg;
}

.header {
  h1 {
    color: $primary;
  }
  p {
    color: $secondary;
  }
}
</style>
