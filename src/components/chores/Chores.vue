<template>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
  <chores-list />
  <add-chore />
</template>

<script setup lang="ts">
import { computed } from "vue";

import ChoresList from "./components/ChoresList.vue";
import AddChore from "./components/AddChore.vue";

const title = computed(() => "My chores for today");
</script>
