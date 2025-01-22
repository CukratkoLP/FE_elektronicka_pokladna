<script lang="ts">
import { defineComponent } from 'vue';
import { usePastryStore } from '../stores/PastryStore';
import Back from '../components/Back.vue';
import Cart from "@/components/Cart.vue";

export default defineComponent({
  name: 'Salty',
  components: {
    Back,
    Cart,
  },
  data() {
    const pastryStore = usePastryStore();
    return {
      saltyItems: pastryStore.saltyItems,
    };
  },
  methods: {
    goToNumPad(item: any) {
      this.$router.push({ name: 'NumPad', query: { category: 'slané pečivo', pastry: item.name, cost: item.cost } });
    },
  },
});
</script>

<template>
  <div class="container">
    <div class="left-column">
      <div class="grid-container">
        <div v-for="item in saltyItems" :key="item.name" class="grid-item">
          <button @click="goToNumPad(item)">{{ item.name }}</button>
        </div>
      </div>
      <div class="back-container">
        <Back />
      </div>
    </div>
    <div class="right-column">
      <Cart />
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, auto);
  gap: 10px;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

button {
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: 1.5em;
}

.back-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.back-container button {
  padding: 10px 20px;
  font-size: 1em;
}
</style>
