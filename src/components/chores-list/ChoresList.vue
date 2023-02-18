<template>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
  <div class="container">
    <div class="grid grid-cols-3">
      <div v-for="chore in chores" :key="chore.name" class="">
        <Chore :name="chore.name" />
      </div>
    </div>
  </div>
  <div class="container">
    <h2>Add a chore</h2>
    <div class="">
      <input class="border border-black" type="text" v-model="newChore" />
      <button @click="addChore">Add</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from "vue";
import { useChoresStore } from "../../stores/chores";
import Chore from "./components/Chore.vue";

const choresStore = useChoresStore();
const { chores } = choresStore;

const title = computed(() => "My chores for today");

let newChore = ref("");

const addChore = () => {
  chores.push({ name: newChore.value });
};
</script>
