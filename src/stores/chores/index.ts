import { defineStore } from "pinia";
import { reactive } from "vue";

export const useChoresStore = defineStore("chores", () => {
  const chores = reactive([
    {
      name: "Walk the dog",
    },
    {
      name: "Brush my teeth",
    },
  ]);

  return { chores };
});
