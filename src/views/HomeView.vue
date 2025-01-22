<script lang="ts">
import { defineComponent } from 'vue';
import Cart from "@/components/Cart.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    Cart,
  },
});
</script>

<template>
  <div class="container">
    <div class="left-column">
      <h1>Vitajte v pokladni</h1>
      <button @click="$router.push('/sweet-pastry')">Sladké</button>
      <button @click="$router.push('/salty-pastry')">Slané</button>
      <button @click="$router.push('/drink')">Nápoje</button>
    </div>
    <div class="right-column">
      <cart />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.left-column {
  flex: 1;
}

.right-column {
  flex: 1;
}

button {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 1.2em;
}
</style>
