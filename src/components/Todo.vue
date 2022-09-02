<template>
  <div class="todo">
    <div class="todo__title">{{ todoState.todos[props.index].title }}</div>
    <button
      @click="todoState.completeTodo(todoState.todos[props.index].id)"
      :disabled="todoState.todos[props.index].completed"
    >
      Complete
    </button>
    <button @click="todoState.deleteTodo(todoState.todos[props.index].id)">
      Delete
    </button>
  </div>
</template>

<script setup>
import { todoState } from "../context/state";
const props = defineProps(["index"]);
</script>
