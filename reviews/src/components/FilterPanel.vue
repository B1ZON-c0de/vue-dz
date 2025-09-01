<script setup lang="ts">
type FilterOptions = {
  value: string;
  label: string;
  active: boolean;
};

const { filterOptions } = defineProps<{
  filterOptions: FilterOptions[];
}>();
</script>

<template>
  <div class="filters">
    <button
      v-for="filter in filterOptions"
      class="btn btn--filter"
      :class="{ 'btn--active': filter.active }"
      @click="$emit('set-filter', filter.value)"
      :key="filter.value"
    >
      {{ filter.label }}
    </button>
  </div>
</template>
