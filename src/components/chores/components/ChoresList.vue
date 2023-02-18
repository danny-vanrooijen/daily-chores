<!-- ChoresList.vue -->
<template>
  <div class="container">
    <h2>Chores:</h2>
    <ul>
      <li v-for="(chore, index) in chores" :key="index">{{ chore.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useChoresStore } from "../../../stores/chores/index";

const choresStore = useChoresStore();

const chores = choresStore.chores;
</script>
