<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../stores/CartStore';
import Back from '../components/Back.vue';
import Cart from '../components/Cart.vue';

export default defineComponent({
  name: 'NumPad',
  components: {
    Back,
    Cart,
  },
  data() {
    return {
      category: '',
      pastry: '',
      cost: 0,
      quantity: null as number | null,
    };
  },
  created() {
    this.category = this.$route.query.category as string;
    this.pastry = this.$route.query.pastry as string;
    this.cost = parseFloat(this.$route.query.cost as string);
  },
  methods: {
    handleClick(number: number) {
      if (this.quantity === null) {
        this.quantity = number;
      } else {
        this.quantity = this.quantity * 10 + number;
      }
    },
    addToCart() {
      if (this.quantity === null || this.quantity === 0) {
        return;
      }
      const cartStore = useCartStore();
      cartStore.addItem({ name: this.pastry, quantity: this.quantity, cost: this.quantity * this.cost });
      this.$router.back();
    },
  },
});
</script>

<template>
  <div>
    <div>
      <h1>{{ category }}</h1>
      <h2>{{ pastry }}</h2>
      <div class="display-window">{{ quantity !== null ? quantity : '' }}</div>
    </div>
    <div class="numpad-container">
      <button @click="handleClick(7)" class="numpad-button">7</button>
      <button @click="handleClick(8)" class="numpad-button">8</button>
      <button @click="handleClick(9)" class="numpad-button">9</button>
      <button @click="handleClick(4)" class="numpad-button">4</button>
      <button @click="handleClick(5)" class="numpad-button">5</button>
      <button @click="handleClick(6)" class="numpad-button">6</button>
      <button @click="handleClick(1)" class="numpad-button">1</button>
      <button @click="handleClick(2)" class="numpad-button">2</button>
      <button @click="handleClick(3)" class="numpad-button">3</button>
      <button @click="addToCart" class="numpad-button">Add to Cart</button>
      <button @click="handleClick(0)" class="numpad-button">0</button>
      <Back class="numpad-button" />
    </div>
  </div>
</template>

<style scoped>
.numpad-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  max-width: 200px;
  position: absolute;
  left: 0;
  margin: 0;
}

.numpad-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 125px;
  font-size: 1.5em;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
}

.numpad-button:hover {
  background-color: #e0e0e0;
}

.display-window {
  font-size: 2em;
  padding-inline: 0;
  margin-bottom: 20px;
}
</style>
