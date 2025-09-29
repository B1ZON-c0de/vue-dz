import { defineStore, acceptHMRUpdate } from 'pinia';
import { computed, reactive } from 'vue';
import type { Goods } from '../types/type';

export const useBasketStore = defineStore('basket', () => {
  //STATE
  const basket = reactive([
    {
      id: 1,
      name: 'Blue Flower Print Crop Top',
      color: 'Yellow',
      size: 'M',
      price: 29.0,
      quantity: 1,
      imageUrl: 'src/assets/crop-top.png',
    },
    {
      id: 2,
      name: 'Levender Hoodie',
      color: 'Levender',
      size: 'XXL',
      price: 119.0,
      quantity: 1,
      imageUrl: 'src/assets/hoodie.png',
    },
    {
      id: 3,
      name: 'Black Sweatshirt',
      color: 'Black',
      size: 'XXL',
      price: 123.0,
      quantity: 1,
      imageUrl: 'src/assets/sweatshirt.png',
    },
  ]);

  // COMPUTED

  const totalPrice = computed(() => {
    return basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
  });
  const totalTax = computed(() => {
    return totalPrice.value * 0.1;
  });

  // ACTIONS

  const descreaseItemQuantity = (item: Goods) => {
    if (item.quantity > 1) {
      item.quantity--;
    }
  };

  const increaseItemQuantity = (item: Goods) => {
    item.quantity++;
  };

  const removeItem = (index: number) => {
    basket.splice(index, 1);
  };

  return {
    basket,
    totalPrice,
    totalTax,
    descreaseItemQuantity,
    increaseItemQuantity,
    removeItem,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBasketStore, import.meta.hot));
}
