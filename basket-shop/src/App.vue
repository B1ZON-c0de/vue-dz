<script setup lang="ts">
import { computed, reactive } from 'vue';

type Goods = {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

if (!localStorage.getItem('goods')) {
  localStorage.setItem(
    'goods',
    JSON.stringify([
      {
        id: 1,
        name: 'Blue Flower Print Crop Top',
        color: 'Yellow',
        size: 'M',
        price: 29.0,
        quantity: 1,
        imageUrl: '/src/assets/crop-top.png',
      },
      {
        id: 2,
        name: 'Levender Hoodie',
        color: 'Levender',
        size: 'XXL',
        price: 119.0,
        quantity: 1,
        imageUrl: '/src/assets/hoodie.png',
      },
      {
        id: 3,
        name: 'Black Sweatshirt',
        color: 'Black',
        size: 'XXL',
        price: 123.0,
        quantity: 1,
        imageUrl: '/src/assets/sweatshirt.png',
      },
    ])
  );
}
const savedBasket = localStorage.getItem('goods');

const basket = reactive<Goods[]>(savedBasket ? JSON.parse(savedBasket) : []);

const basketPrice = computed(() =>
  basket.reduce(
    (acc: number, item: Goods) => item.price * item.quantity + acc,
    0
  )
);

const addGoodsCount = (goods: Goods) => {
  goods.quantity++;
  localStorage.setItem('goods', JSON.stringify(basket));
};

const reduceGoodsCount = (goods: Goods) => {
  if (goods.quantity >= 2) {
    goods.quantity--;
    localStorage.setItem('goods', JSON.stringify(basket));
  }
};
const removeGoods = (idx: number) => {
  basket.splice(idx, 1);
  localStorage.setItem('goods', JSON.stringify(basket));
};
</script>

<template>
  <div class="container basket">
    <table class="basket-table">
      <thead class="basket-table__header">
        <tr>
          <th>Product Details</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody class="basket-table__body">
        <template v-if="basket.length > 0">
          <tr v-for="(goods, idx) in basket" :key="goods.id">
            <td>
              <div class="basket-item">
                <div class="basket-item__image">
                  <img :src="goods.imageUrl" alt="" />
                </div>
                <div class="basket-item__info">
                  <h2 class="basket-item__info-h2">{{ goods.name }}</h2>
                  <p class="basket-item__info-p">Color: {{ goods.color }}</p>
                  <p class="basket-item__info-p">Size: {{ goods.size }}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="basket-item__price">${{ goods.price.toFixed(2) }}</p>
            </td>
            <td>
              <div class="basket-item__quantity">
                <button
                  class="quantity-button"
                  @click="reduceGoodsCount(goods)"
                >
                  –
                </button>
                <input type="number" :value="goods.quantity" min="1" disabled />
                <button class="quantity-button" @click="addGoodsCount(goods)">
                  +
                </button>
              </div>
            </td>
            <td>
              <p class="basket-item__price">
                ${{ (goods.price * goods.quantity).toFixed(2) }}
              </p>
            </td>
            <td>
              <button
                class="btn btn-delete"
                @click="removeGoods(idx)"
                aria-label="Удалить"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </template>

        <tr v-else>
          <td colspan="5">
            <p class="basket-table__empty">No items</p>
          </td>
        </tr>

        <tr>
          <td colspan="5">
            <div class="basket-table__summary" v-if="basket.length > 0">
              <p class="basket-table__total">
                Total
                <b>${{ basketPrice.toFixed(2) }}</b>
              </p>
              <p>Tax ${{ (basketPrice * 0.1).toFixed(2) }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style src="./style.css"></style>
