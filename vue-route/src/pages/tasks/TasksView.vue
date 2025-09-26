<template>
  <main class="container">
    <div v-if="!$route.params.id">
      <h1>Список задач</h1>
      <ul class="task-list">
        <li class="task-item">
          <RouterLink to="/tasks/1" class="task-link" replace
            >Задача 1</RouterLink
          >
        </li>
        <li class="task-item">
          <RouterLink to="/tasks/2" class="task-link" replace
            >Задача 2</RouterLink
          >
        </li>
      </ul>
    </div>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <Component :is="Component"></Component>
      </Transition>
    </RouterView>
  </main>
</template>
