<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../stores/CartStore';

export default defineComponent({
  name: 'Cart',
  data() {
    const cartStore = useCartStore();
    return {
      cartStore,
      showPaymentOptions: false,
      processingPayment: false,
    };
  },
  computed: {
    totalCost() {
      return this.cartStore.items.reduce((total, item) => total + item.cost, 0).toFixed(2);
    },
    hasItems() {
      return this.cartStore.items.length > 0;
    },
    cartItems() {
      return this.cartStore.items;
    },
  },
  methods: {
    pay() {
      this.showPaymentOptions = true;
    },
    processPayment() {
      this.processingPayment = true;
      setTimeout(() => {
        this.cartStore.items = [];
        this.processingPayment = false;
        this.showPaymentOptions = false;
        this.$router.push('/');
      }, 2000);
    },
  },
});
</script>

<template>
  <div>
    <h1>Košík</h1>
    <ul>
      <li v-for="item in cartItems" :key="item.name">
        {{ item.name }} - {{ item.quantity }} x {{ (item.cost / item.quantity).toFixed(2) }}€ = {{ item.cost.toFixed(2) }}€
      </li>
    </ul>
    <p>Cena spolu: {{ totalCost }}€</p>
    <button @click="pay" v-if="hasItems && !showPaymentOptions && !processingPayment">Zaplatiť</button>
    <div v-if="showPaymentOptions && !processingPayment">
      <button @click="processPayment">Hotovosťou</button>
      <button @click="processPayment">Kartou</button>
    </div>
    <div class="uspesna">
    <p v-if="processingPayment">Transakcia prebieha ...</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2em;
}
ul {
  font-size: 1.2em;
}
.uspesna {
  font-size: 1.2em;
  color: #00f80c;
}
p {
  font-size: 1.2em;
}
button {
  font-size: 1.2em;
  padding: 10px 20px;
  width: 130px;
  height: 130px;
  margin: 5px;
}
</style>
