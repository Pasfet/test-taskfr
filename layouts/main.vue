<template>
  <div class="layout">
    <app-header class="app-header" />
    <app-sidebar class="app-aside" />
    <main class="app-main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";

export default {
  name: "Main",
  components: {
    AppSidebar: Sidebar,
    AppHeader: Header,
  },
};
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 120px 1fr;
  grid-template-areas:
    "aside header"
    "aside main";
}

.app-header {
  grid-area: header;
}

.app-aside {
  grid-area: aside;
}

.app-main {
  grid-area: main;
}

@media (max-width: 730px) {
  .layout {
    grid-template-columns: 80px 1fr;
  }
}
</style>
