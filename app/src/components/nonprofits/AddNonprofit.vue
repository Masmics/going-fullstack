<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="nonprofit.name" require>

    <button>Add</button>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      nonprofit: {
        name: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.nonprofit)
        .then(() => {
          this.nonprofit = { name: '' };
        });
    }
  }
};
</script>

<style>
</style>