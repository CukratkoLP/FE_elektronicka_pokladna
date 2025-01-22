<script lang="ts">
import { defineComponent } from 'vue';
import Sweet from '../components/Sweet.vue';
export default defineComponent({
  name: 'SweetPastryView',
  components: {
    Sweet,
  },
});
</script>

<template>
  <div>
    <h1>Sladké pečivo</h1>
    <Sweet />
  </div>
</template>

<style scoped>
h1  {
  text-align: center;
  padding-right: 350px;
}
</style>
