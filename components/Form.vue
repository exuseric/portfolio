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
    <div class="form-group">
      <label for="name" class="label">
        <div class="label_icon">
          <span class="icon">
            <Person />
          </span>
          <span class="desc">Name</span>
        </div>
      </label>
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
      <label for="email" class="label">
        <div class="label_icon">
          <span class="icon">
            <Email />
          </span>
          <span class="desc">Email</span>
        </div>
      </label>
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
    <div class="form-group__message">
      <label for="message" class="label">
        <div class="label_icon">
          <span class="icon">
            <Message />
          </span>
          <span class="desc">Message</span>
        </div>
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Tell me something?"
        class="form-control__message"
        required
      ></textarea>
    </div>
    <button type="submit" class="form-submit">Send Message</button>
  </form>
</template>

<script>
import Person from '~/static/images/icons/person.svg?inline'
import Email from '~/static/images/icons/email.svg?inline'
import Message from '~/static/images/icons/message.svg?inline'

export default {
  components: {
    Person,
    Email,
    Message,
  },
}
</script>
<style lang="scss" scoped>
.form {
  @include grid($column: 1fr, $row: 1fr, $gap: $space-md);
  width: 100%;
  max-width: 50rem;
  margin: auto;
}

.form-group {
  @include grid($column: 20% 80%, $row: auto, $gap: 0);

  &,
  &__message {
    border: 1px solid;
    border-color: theme('text-mid');
    border-radius: (5 / 16) + rem;

    overflow: hidden;

    transition: border-color 0.35s ease-out;
  }

  &__message {
    @include grid($column: auto, $row: 20% 1fr, $gap: 0);

    height: 100%;
    min-height: (300 / 16) + rem;

    .label {
      @include center;
      align-self: left;

      width: fit-content;
      padding: 0 $space-sm;

      color: theme('text-mid');

      transition: color 0.45s ease-out;
    }
  }

  &:focus-within,
  &__message:focus-within {
    border-color: theme('highlight');

    .label {
      color: theme('highlight');
    }
  }

  .label {
    @include center;

    width: 100%;
    height: 100%;
    color: theme('text-mid');

    transition: color 0.45s ease-out;
  }
  .form-control,
  &__message > .form-control__message {
    width: 100%;
    height: 100%;

    padding: 0 $space-sm;

    border-color: transparent;
    outline: none;

    &::placeholder {
      color: theme('text-mid');
    }
  }
}

.label_icon {
  @include grid-rows-2(1fr);
  gap: $space-xs;
  text-align: center;
  // @include flex(column, space-between);
}

.icon,
.desc {
  width: 100%;
  height: (20 / 16) + rem;
}

.form-submit,
.form-group {
  height: (80 / 16) + rem;
}

.form-submit {
  font-family: $heading;
  font-weight: 700;
  font-size: $font-md;

  color: theme('text-light');
  background-color: theme('highlight');
}
</style>
