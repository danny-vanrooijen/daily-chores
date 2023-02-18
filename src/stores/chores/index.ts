import { defineStore } from "pinia";
import { reactive } from "vue";

interface Chore {
  name: string;
}

interface Chores {
  [key: string]: Chore;
}

export const useChoresStore = defineStore("chores", () => {
  const chores = reactive<Chore[]>([
    {
      name: "Walk the dog",
    },
    {
      name: "Brush my teeth",
    },
  ]);

  return { chores };
});
