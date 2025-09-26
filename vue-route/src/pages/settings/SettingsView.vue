<template>
  <main class="container">
    <div>
      <h1>Настройки</h1>
      <div class="settings-tabs">
        <RouterLink to="../settings/profile" class="settings-tab">
          Профиль
        </RouterLink>
        <RouterLink to="../settings/security" class="settings-tab"
          >Безопасность</RouterLink
        >
      </div>
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <Component :is="Component"></Component>
        </Transition>
      </RouterView>
    </div>
  </main>
</template>
