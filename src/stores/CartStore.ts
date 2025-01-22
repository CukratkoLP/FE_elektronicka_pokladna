import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as { name: string; quantity: number; cost: number }[],
  }),
  actions: {
    addItem(item: { name: string; quantity: number; cost: number }) {
      this.items.push(item);
    },
  },
});
