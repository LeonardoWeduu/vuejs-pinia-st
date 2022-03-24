<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import { mapActions } from "pinia";
import { configStore } from "@/stores/config";

export default {
  name: "App",
  methods: {
    ...mapActions(configStore, ["initApp"]),
  },
  created() {
    this.initApp();
  },
};
</script>
