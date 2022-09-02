<script setup>
import { todoState } from "./context/state";
import NavBar from "./components/NavBar.vue";
import AddTodo from "./components/AddTodo.vue";
import Todos from "./components/Todos.vue";

todoState.loadTodos();
</script>

<template>
  <div class="w-full">
    <NavBar />
    <AddTodo />
    <Todos />
  </div>
</template>
