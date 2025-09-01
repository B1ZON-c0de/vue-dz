<script setup lang="ts">
import ReviewListItem from './ReviewListItem.vue';
import type { Review } from '../types/types';

const { filteredReviews } = defineProps<{
  filteredReviews: Review[];
}>();
</script>

<template>
  <ul class="review-tiles">
    <li
      v-if="filteredReviews.length === 0"
      class="reviews-tiles__item reviews-tiles__item--empty"
    >
      <p>Нет отзывов по выбранному фильтру.</p>
    </li>
    <li
      v-for="(review, index) in filteredReviews"
      :key="review.id"
      class="review-tiles__item"
    >
      <ReviewListItem :review-idx="index" :review="review" />
    </li>
  </ul>
</template>
