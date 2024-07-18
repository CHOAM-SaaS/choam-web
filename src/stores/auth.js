import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    // you can use getters with the same name as state properties
    squareCount: (state) => state.counter ** 2,
  },
  actions: {
    // you can have actions here
    doubleCount() {
      this.counter++;
    },
  },
});
