<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { isLoggedIn, logout } from './auth';

const handleLogOutBtn = () => {
  logout();
};
</script>

<template>
  <div class="wrapper">
    <nav class="navigation">
      <div class="navigation-left">
        <RouterLink to="/dashboard" class="">Dashboard</RouterLink>
        <RouterLink to="/tasks">Tasks</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </div>
      <div class="navigation-right">
        <RouterLink to="/login" v-if="!isLoggedIn">Login</RouterLink>
        <button @click="handleLogOutBtn" v-else class="btn-logout">
          Logout
        </button>
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
