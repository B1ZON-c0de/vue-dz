<script setup lang="ts">
import { inject } from 'vue';
import type { Review } from '../types/types';

const { reviewIdx, review } = defineProps<{
  reviewIdx: number;
  review: Review;
}>();

const toggleLike = inject<(review: Review) => void>('toggle-like', () => {
  console.log('Failed to inject function');
});
const removeReview = inject<(index: number) => void>('remove-review', () => {
  console.log('Failed to inject function');
});
</script>

<template>
  <div class="review">
    <div class="review__header">
      <p class="review__author">{{ review.author }}</p>
      <div class="review__rating">
        <span v-for="n in 5" :key="`star-${n}`" class="star">
          {{ n <= review.rating ? '★' : '☆' }}
        </span>
      </div>
    </div>
    <p class="review__text">"{{ review.text }}"</p>
    <div class="review__actions">
      <button @click="toggleLike(review)" class="btn btn--like">
        {{ review.liked ? '❤️' : '🤍' }}
      </button>
      <button @click="removeReview(reviewIdx)" class="btn btn--delete">
        Удалить
      </button>
    </div>
  </div>
</template>
