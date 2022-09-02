<template>
  <div class="flex items-center flex-col p-2.5 bg-blue-200">
    <Todo
      class="todo"
      v-for="n in todoState.getLength"
      :index="n - 1"
      :key="`todo-${n}`"
    />
  </div>
</template>

<script setup>
import Todo from "../components/Todo.vue";
import { todoState } from "../context/state";
</script>
