<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <nav class="navigation">
      <div class="navigation-left">
        <RouterLink to="/dashboard" class="">Dashboard</RouterLink>
        <RouterLink to="/tasks">Tasks</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </div>
    </nav>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <Component :is="Component"></Component>
      </Transition>
    </RouterView>
  </div>
</template>

<style src="./style.css"></style>
