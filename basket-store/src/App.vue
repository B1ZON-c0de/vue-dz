<script setup>
import { reactive, computed } from 'vue';
import BasketTable from './components/BasketTable.vue';
import { useBasketStore } from './store/basket';

const basketStore = useBasketStore();

const descreaseItemQuantity = (item) => {
  basketStore.descreaseItemQuantity(item);
};

const increaseItemQuantity = (item) => {
  basketStore.increaseItemQuantity(item);
};

const removeItem = (index) => {
  basketStore.removeItem(index);
};

const totalPrice = computed(() => {
  return basketStore.totalPrice;
});

const totalTax = computed(() => {
  return basketStore.totalTax;
});
</script>

<template>
  <div class="container basket">
    <BasketTable
      :basket="basketStore.basket"
      @decrease-quantity="descreaseItemQuantity"
      @increase-quantity="increaseItemQuantity"
      @remove-item="removeItem"
      :totalTax="totalTax"
      :totalPrice="totalPrice"
    />
  </div>
</template>

<style src="./style.css"></style>
