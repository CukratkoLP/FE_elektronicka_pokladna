<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackButton',
  methods: {
    goBack() {
      this.$router.back();
    },
  },
});
</script>

<template>
  <button @click="goBack">späť</button>
</template>

<style scoped>
</style>
