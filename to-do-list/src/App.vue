<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import TodoListItem from './components/TodoListItem.vue';
import TodoForm from './components/TodoForm.vue';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

let idCount = 0;
const todos = reactive([
  { id: idCount++, text: 'Пример задачи', completed: false },
  { id: idCount++, text: 'Почесать кота', completed: false },
  { id: idCount++, text: 'Вырастить кактус', completed: false },
  { id: idCount++, text: 'Листать рилсы', completed: false },
  { id: idCount++, text: 'Покушать ', completed: false },
]);
const newTodoText = ref('');

const checkTodo = (todo: Todo) => {
  todo.completed = true;
};

const removeTodo = (idx: number) => {
  todos.splice(idx, 1);
};

const unCompletedTodosCount = computed(() => {
  return [...todos].filter((todo) => !todo.completed).length;
});

const clearAllTodos = () => {
  todos.splice(0, todos.length);
};

const clearCompletedTodos = () => {
  const uncompletedTodos = [...todos].filter((todo) => !todo.completed);
  todos.splice(0, todos.length, ...uncompletedTodos);
};

const addTodo = () => {
  console.log(newTodoText.value);
  todos.push({ id: Date.now(), text: newTodoText.value, completed: false });
};
</script>

<template>
  <div class="container todo-app">
    <h1 class="title">Todo List</h1>

    <TodoForm v-model="newTodoText" @add-todo="addTodo" />

    <div class="todo-app__main">
      <ul v-if="todos.length > 0" class="todo-list">
        <li
          v-for="(todo, idx) in todos"
          class="todo-list__item"
          :class="{ 'todo-list__item--completed': todo.completed }"
          :key="todo.id"
        >
          <TodoListItem
            :="todo"
            :id="idx"
            @complete-todo.once="checkTodo(todo)"
            @remove-todo="removeTodo(idx)"
          />
        </li>
      </ul>
      <div v-else class="todo-list__empty">
        <p>Список задач пуст</p>
      </div>
    </div>

    <div v-if="todos.length > 0" class="todo-app__footer">
      <p class="todo-app__footer-text">
        Осталось {{ unCompletedTodosCount }} задания(й)
      </p>
      <button class="btn btn--clear" @click="clearCompletedTodos">
        Удалить завершенные
      </button>
      <button class="btn btn--clear" @click="clearAllTodos">
        Очистить список
      </button>
    </div>
  </div>
</template>

<style src="./style.css"></style>
