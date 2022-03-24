<template>
  <div>
    <v-app-bar clipped-left app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ app_name }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer prominent clipped v-model="drawer" app>
      <SidebarComponent></SidebarComponent>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import SidebarComponent from "@/components/common/SidebarComponent.vue";
export default {
  data() {
    return {
      drawer: false,
      app_name: "hello",
    };
  },
  components: { SidebarComponent },
};
</script>

<style lang="scss" scoped></style>
