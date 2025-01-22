<script lang="ts">
import { defineComponent } from 'vue';
import Salty from '../components/Salty.vue';
export default defineComponent({
  name: 'SaltyPastryView',
  components: {
    Salty,
  },
});
</script>

<template>
  <div>
    <h1>Slané pečivo</h1>
    <Salty />
  </div>
</template>

<style scoped>
h1  {
  text-align: center;
  padding-right: 350px;
}
</style>
