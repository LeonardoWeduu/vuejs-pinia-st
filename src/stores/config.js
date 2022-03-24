import { defineStore } from "pinia";

export const configStore = defineStore("config", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    initApp: () => {
      console.log("Função de inicialização do aplicativo");
    },
  },
});
