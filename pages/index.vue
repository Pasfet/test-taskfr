<template>
  <div>
    <app-breadcrumbs />
    <app-tabs :tabs="tabs">
      <template #tab-1> Tab 1 content </template>
      <template #tab-2> Tab 2 content </template>
      <template #tab-3> Tab 3 content </template>
      <template #tab-4> Tab 4 content </template>
      <template #tab-5>
        <form-respondents />
      </template>
    </app-tabs>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import Tabs from "../components/Tabs.vue";
import FormRespondents from "../components/FormRespondents.vue";

export default {
  async asyncData({ store, $axios }) {
    const { data } = await $axios.get("http://localhost:3001/api/conditions");
    return store.commit("respondents/setConditions", data);
  },
  name: "Index",
  layout: "main",
  components: {
    AppBreadcrumbs: Breadcrumbs,
    AppTabs: Tabs,
    FormRespondents,
  },
  data: () => ({
    tabs: ["Параметры", "Вопросы", "Логика", "Условия", "Респонденты"],
  }),
};
</script>
