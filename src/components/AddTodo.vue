<script setup>
import { ref } from "vue";
import { todoState } from "../context/state";

const title = ref("");
</script>

<template>
  <form
    @submit.prevent="
      () => {
        todoState.addTodo(title);
        title = '';
      }
    "
    class="p-5 flex justify-center items-center"
  >
    <input
      type="text "
      v-model="title"
      class="border border-blue-300 text-blue-800 text-sm p-2.5 w-2/3 h-12 block focus:border-blue-900 focus:ring-blue-500"
    />
    <button
      class="px-5 h-12 bg-blue-600 text-white text-sm font-bold transition ease-in-out hover:bg-blue-800"
    >
      Add
    </button>
  </form>
</template>
