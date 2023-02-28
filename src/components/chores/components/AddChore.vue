<template>
  <div class="container">
    <h2>Add Chore:</h2>
    <form @submit.prevent="addChore">
      <input
        v-model="newChoreName"
        type="text"
        placeholder="Enter chore name"
      />
      <button>Add</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useChoresStore } from "../../../stores/chores/index";
import { ref } from "@vue/reactivity";

const choresStore = useChoresStore();
const { chores } = choresStore;

const newChoreName = ref("");

const addChore = () => {
  if (newChoreName.value.trim() !== "") {
    chores.push({
      name: newChoreName.value.trim(),
    });
    newChoreName.value = "";
  }
};
</script>
