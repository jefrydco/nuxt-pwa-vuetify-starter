<template>
  <div id="component" class="mb-3">
    <v-text-field
      v-validate="'required'"
      v-model="example"
      :error-messages="errors.collect('example')"
      box=""
      label="Example"
      required=""
      data-vv-name="example"
      data-vv-as="Example"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      example: null
    };
  }
};
</script>
