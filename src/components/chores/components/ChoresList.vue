<template>
  <div class="container">
    <h2>Chores:</h2>
  </div>
  <div class="container grid grid-cols-4 gap-8">
    <div
      v-for="(chore, index) in chores"
      :key="index"
      class="p-8 aspect-square rounded-xl bg-sky-800 shadow-choreButton text-white uppercase text-3xl font-thin border-l border-r border-sky-900 text-center"
    >
      {{ chore.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useChoresStore } from "../../../stores/chores/index";

const choresStore = useChoresStore();

const chores = choresStore.chores;
</script>
