<script lang="ts" setup>
import { login } from '../auth';

const handleLogInBtn = () => {
  login();
};
</script>

<template>
  <main class="container">
    <div class="login">
      <h1>Вход</h1>
      <button @click="handleLogInBtn" class="btn-login">
        Войти как пользователь
      </button>
    </div>
  </main>
</template>
