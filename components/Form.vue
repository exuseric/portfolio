<template>
  <form
    action="/success"
    method="post"
    name="under construction"
    class="form"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="under construction" />
    <div class="form-fields">
      <div class="form-group">
        <label for="name">name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Who are you?"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">email:</label>
        <input
          id="email"
          type="email"
          name="email"
          inputmode="email"
          placeholder="What's your email adress?"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">message:</label>
        <textarea
          id="message"
          type="message"
          name="message"
          placeholder="Hello, How are you?"
          class="form-control text-area"
          required
        ></textarea>
      </div>
    </div>
    <button type="submit" class="form-submit">Send Message</button>
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;

  .header {
    text-align: left;
  }

  .form-group {
    @include grid-rows-2(auto);
    row-gap: $space-xs;
    margin: $space-sm 0;

    color: $secondary;

    label {
      width: fit-content;

      text-transform: capitalize;

      color: $gray;
    }
    textarea {
      height: 15rem;
    }
  }

  .form-control {
    padding: $space-sm;

    color: $white;
    background-color: $dark-gray;

    border: 1px solid transparent;
  }

  .form-submit {
    font-size: $font-md;
    font-weight: 700;

    padding: $space-sm;
    margin: auto;
    width: 100%;

    color: $white;
    background-image: $gradient-default;
    background-size: 300% 100%;

    border: 1px solid transparent;
    transition: all 0.4s ease-in-out;

    &:hover {
      background-position: 100% 0;
      transition: all 0.4s ease-in-out;
    }
  }
}

.form-fields {
  @include grid-cols-2(auto);
  @include grid-rows-2(auto);
  column-gap: $space-sm;

  .form-group:nth-child(1),
  .form-group:nth-child(1) {
    grid-row: 1 / 2;
  }
  .form-group:nth-child(1) {
    grid-column: 1 / 2;
  }
  .form-group:nth-child(2) {
    grid-column: 2 / -1;
  }
  .form-group:nth-child(3) {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }
}
</style>
