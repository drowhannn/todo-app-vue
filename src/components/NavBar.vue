<script setup>
import { todoState } from "../context/state";
</script>

<template>
  <nav class="w-full text-center p-5 bg-blue-200 text-white font-bold">
    <h1 class="text-4xl p-5">
      {{ `${todoState.getCompletedTodosLength}/${todoState.getLength}` }} Todos
    </h1>
  </nav>
</template>
