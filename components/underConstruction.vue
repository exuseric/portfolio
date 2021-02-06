<template>
  <div class="wrapper">
    <section class="content">
      <header class="header">
        <h1 class="text-lg heading primary">Eric Maina</h1>
        <p class="text-md">Front-end Developer</p>
      </header>
      <div class="image">
        <img src="/images/robot-illustration.svg" alt="robot" />
      </div>
    </section>

    <section class="message-form">
      <header class="header message-form__header">
        <h2 class="text-sm">Work in Progress</h2>
      </header>

      <Form />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  @include flex(column, space-between);

  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100vw;
  height: 100%;
  min-height: 100vh;

  padding: $nav-scale-sm / 2 1.25rem; //20px

  background-color: theme('main-bg');

  @include screen-lg {
    @include grid-cols-2(50%);
    padding: $nav-scale-lg / 2 2.5rem; //40px
  }
}

.content,
.message-form {
  // @include flex(column, space-evenly);
  height: 100%;
}

.header {
  width: 100%;
  height: auto;

  padding: $space-md;
  text-align: center;
}

.message-form {
  @include flex(column, space-evenly);

  @include screen-lg {
    background: theme('light-bg');

    border-radius: 0.85rem;
    overflow: hidden;

    &__header {
      padding: $space-md;
      background: theme('dark-bg');
    }
  }
}
</style>
