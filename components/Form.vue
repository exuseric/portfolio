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
          class="form-control textarea"
          required
        ></textarea>
      </div>
    </div>
    <button type="submit" class="form-submit gradient-btn">Send Message</button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  min-width: 20rem;

  @include screen-lg {
    width: 40rem;
    margin: auto;
  }
}
.form-group {
  @include flex(column, space-between);
  margin-bottom: $space-md;

  label {
    color: theme('text-mid');
    align-self: flex-start;
    text-transform: capitalize;
  }
}

.form-control {
  width: 100%;
  padding: $space-sm;

  color: theme('text-light');
  background-color: theme('dark-bg');

  border: 1px solid transparent;
  border-radius: 0.15rem;
}

.textarea {
  height: 100%;
  min-height: 10rem; //160px
}

.form-submit {
  font-size: $font-md;

  width: 100%;

  padding: $space-md;
}
</style>
