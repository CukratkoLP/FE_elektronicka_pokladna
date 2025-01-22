import { defineStore } from 'pinia';
interface Item {
  id: number;
  name: string;
  cost: number;
}

interface State {
  sweetItems: Item[];
  saltyItems: Item[];
  drinkitems: Item[];
}

export const usePastryStore = defineStore('pastry', {
  state: (): State => ({
    sweetItems: [
      { id: 1, name: 'Jahodový croissant', cost: 2.2 },
      { id: 2, name: 'Čokoládový croissant', cost: 2.2 },
      { id: 3, name: 'Pistáciový croissant', cost: 2.2 },
      { id: 4, name: 'Malinový croissant', cost: 2.2 },
      { id: 5, name: 'Višňový croissant', cost: 2.2 },
      { id: 6, name: 'Čučoriedkový croissant', cost: 2.2 },
      { id: 7, name: 'Jahodový závin', cost: 1.8 },
      { id: 8, name: 'Čokoládový závin', cost: 1.8 },
      { id: 9, name: 'Pistáciový závin', cost: 1.8 },
      { id: 10, name: 'Malinový závin', cost: 1.8 },
      { id: 11, name: 'Višňový závin', cost: 1.8 },
      { id: 12, name: 'Čučoriedkový závin', cost: 1.8 },
      { id: 13, name: 'Jahodový pletenec', cost: 1.5 },
      { id: 14, name: 'Čokoládový pletenec', cost: 1.5 },
      { id: 15, name: 'Pistáciový pletenec', cost: 1.5 },
      { id: 16, name: 'Malinový pletenec', cost: 1.5 },
      { id: 17, name: 'Višňový pletenec', cost: 1.5 },
      { id: 18, name: 'Čučoriedkový pletenec', cost: 1.5 },
      { id: 19, name: 'Jahodový muffin', cost: 1.0 },
      { id: 20, name: 'Čokoládový muffin', cost: 1.0 },
      { id: 21, name: 'Pistáciový muffin', cost: 1.0 },
      { id: 22, name: 'Malinový muffin', cost: 1.0 },
      { id: 23, name: 'Višňový muffin', cost: 1.0 },
      { id: 24, name: 'Čučoriedkový muffin', cost: 1.0 },
      { id: 25, name: 'Jahodový hrebeň', cost: 0.9 },
      { id: 26, name: 'Čokoládový hrebeň', cost: 0.9 },
      { id: 27, name: 'Pistáciový hrebeň', cost: 0.9 },
      { id: 28, name: 'Malinový hrebeň', cost: 0.9 },
      { id: 29, name: 'Višňový hrebeň', cost: 0.9 },
      { id: 30, name: 'Čučoriedkový hrebeň', cost: 0.9 }
    ],
    saltyItems: [
      { "id": 1, "name": "Syrový croissant", "cost": 2.5 },
      { "id": 2, "name": "Šunkový croissant", "cost": 2.5 },
      { "id": 3, "name": "Slaninový croissant", "cost": 2.5 },
      { "id": 4, "name": "Salámový croissant", "cost": 2.5 },
      { "id": 5, "name": "Paradajkový croissant", "cost": 2.5 },
      { "id": 6, "name": "Špenátový croissant", "cost": 2.5 },
      { "id": 7, "name": "Bryndzový závin", "cost": 2.8 },
      { "id": 8, "name": "Syrový závin", "cost": 2.8 },
      { "id": 9, "name": "Šunkový závin", "cost": 2.8 },
      { "id": 10, "name": "Olivový závin", "cost": 2.8 },
      { "id": 11, "name": "Paradajkový závin", "cost": 2.8 },
      { "id": 12, "name": "Špenátový závin", "cost": 2.8 },
      { "id": 13, "name": "Šampiňónový pletenec", "cost": 2.3 },
      { "id": 14, "name": "Syrový pletenec", "cost": 2.3 },
      { "id": 15, "name": "Cibuľový pletenec", "cost": 2.3 },
      { "id": 16, "name": "Zemiakový pletenec", "cost": 2.3 },
      { "id": 17, "name": "Špenátový pletenec", "cost": 2.3 },
      { "id": 18, "name": "Paradajkový pletenec", "cost": 2.3 },
      { "id": 19, "name": "Syrový muffin", "cost": 1.5 },
      { "id": 20, "name": "Šunkový muffin", "cost": 1.5 },
      { "id": 21, "name": "Šampiňónový muffin", "cost": 1.5 },
      { "id": 22, "name": "Slaninový muffin", "cost": 1.5 },
      { "id": 23, "name": "Cibuľový muffin", "cost": 1.5 },
      { "id": 24, "name": "Paradajkový muffin", "cost": 1.5 },
      { "id": 25, "name": "Syrový hrebeň", "cost": 1.8 },
      { "id": 26, "name": "Šunkový hrebeň", "cost": 1.8 },
      { "id": 27, "name": "Paradajkový hrebeň", "cost": 1.8 },
      { "id": 28, "name": "Špenátový hrebeň", "cost": 1.8 },
      { "id": 29, "name": "Slaninový hrebeň", "cost": 1.8 },
      { "id": 30, "name": "Cibuľový hrebeň", "cost": 1.8 }
    ],
    drinkitems: [
      { "id": 1, "name": "Espresso", "cost": 2.0 },
      { "id": 2, "name": "Latte", "cost": 2.5 },
      { "id": 3, "name": "Cappuccino", "cost": 2.5 },
      { "id": 4, "name": "Americano", "cost": 2.2 },
      { "id": 5, "name": "Flat White", "cost": 2.6 },
      { "id": 6, "name": "Horúca čokoláda", "cost": 2.8 },
      { "id": 7, "name": "Bylinkovný čaj", "cost": 2.0 },
      { "id": 8, "name": "Ovocný čaj", "cost": 2.2 },
      { "id": 9, "name": "Zelený čaj", "cost": 2.3 },
      { "id": 10, "name": "Ľadová káva", "cost": 2.5 },
      { "id": 11, "name": "Moka", "cost": 2.9 },
      { "id": 12, "name": "Mliečny koktail", "cost": 2.5 },
      { "id": 13, "name": "Limonáda", "cost": 2.3 },
      { "id": 14, "name": "Pomarančový džús", "cost": 2.5 },
      { "id": 15, "name": "Smoothie", "cost": 2.8 },
      { "id": 16, "name": "Energetický nápoj", "cost": 2.5 },
      { "id": 17, "name": "Športový nápoj", "cost": 2.7 },
      { "id": 18, "name": "Perlivá voda", "cost": 2.0 },
      { "id": 19, "name": "Kola", "cost": 2.0 },
      { "id": 20, "name": "Ľadový čaj", "cost": 2.4 }
    ],
  }),
  getters: {
    sweets : (state) => state.sweetItems,
    saltys : (state) => state.saltyItems,
    drinks : (state) => state.drinkitems,
  },
});
