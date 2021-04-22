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
    <header class="header">
      <h2 class="heading text-md">
        I'd love to hear from you. I am available for both local and remote
        projects.
      </h2>
    </header>
    <div class="form-content">
      <div class="form-group">
        <label for="name" class="label"> Name </label>
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
        <label for="email" class="label"> Email </label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="How can I reach you?"
          inputmode="email"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="message" class="label"> Message </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me something?"
          class="form-control__message"
          required
        ></textarea>
      </div>
      <button type="submit" class="form-submit text-md">Send Message</button>
    </div>
  </form>
</template>

<script>
// import Person from '~/static/images/icons/person.svg?inline'
// import Email from '~/static/images/icons/email.svg?inline'
// import Message from '~/static/images/icons/message.svg?inline'

// export default {
//   components: {
//     Person,
//     Email,
//     Message,
//   },
// }
</script>
<style lang="scss" scoped>
.form {
  padding: $space-lg 0;
  width: 100%;
  margin: auto;

  border-radius: 0.5rem;
  box-shadow: $tight-shadow;

  ::placeholder {
    color: transparentize($color: theme('kobi'), $amount: 0.65);
  }
}

.header {
  padding-bottom: $space-lg;
}

.heading {
  font-weight: 400;
  text-align: center;
  color: theme('text-light');

  letter-spacing: 1.2px;
  line-height: 1.25;
}

.form-content,
.form-group {
  @include flex(row, space-between);
}
.form-content {
  gap: 1rem;
}

.form-group {
  gap: 0.25rem;
  width: 100%;
  .label {
    color: theme('kobi');
  }
}

.form-control,
.form-control__message,
.form-submit {
  padding: $space-sm $space-xs;
  width: 100%;

  border-radius: 0.25rem;
}

.form-control,
.form-control__message {
  font-weight: 600;
  color: theme('kobi');
  letter-spacing: 0.15rem;

  outline-color: lighten($color: theme('kobi'), $amount: 55);

  &:focus {
    box-shadow: $tight-shadow;
  }

  &:valid {
    color: theme('text-dark');
    background-color: theme('kobi');
  }
  &:not(:placeholder-shown):invalid {
    color: theme('text-light');
    background-color: red;
  }
}

.form-control__message {
  min-height: 10rem;
  resize: none;
}

.form-control,
.form-control__message {
  border: 1px solid transparent;
  background-color: transparentize($color: theme('kobi'), $amount: 0.95);
}

.form-submit {
  font-weight: bold;

  color: theme('text-light');
  background-color: theme('dark-bg');

  transition: background-color 0.35s ease-out;

  &:hover {
    background-color: theme('candy');
  }
}
</style>
