<script lang="ts">
import { defineComponent } from 'vue';
import Drink from '../components/Drink.vue';

export default defineComponent({
  name: 'DrinkView',
  components: {
    Drink,
  },
});
</script>

<template>
  <div>
    <Drink />
  </div>
</template>

<style scoped>
</style>
