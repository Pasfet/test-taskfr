<template>
  <div class="container">
    <ul class="tabs">
      <li
        v-for="(tab, idx) in tabs"
        :key="idx"
        class="tabs__item"
        :class="{ active_tab: idx + 1 === activeTab }"
      >
        <label :for="`${_uid}${idx}`" v-text="tab" class="tabs__item__button" />
        <input
          :id="`${_uid}${idx}`"
          type="radio"
          :name="`${_uid}-tab`"
          :value="idx + 1"
          v-model="activeTab"
          class="hidden"
        />
      </li>
    </ul>
    <template v-for="(tab, idx) in tabs">
      <div :key="idx" v-if="idx + 1 === activeTab" class="tabs__content">
        <slot :name="`tab-${idx + 1}`" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    activeTab: 5,
  }),
};
</script>

<style scoped>
.container {
  padding: 30px;
}

.tabs {
  list-style-type: none;
  display: flex;
  border-bottom: 1px solid #85d50b;
}

.tabs__item {
  padding: 15px;
  color: #85d50b;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  transition: border 0.3s ease, color 0.3s ease;
}

.tabs__item:hover {
  border-bottom: 1px solid #85d585;
  color: #000;
  cursor: pointer;
}

.tabs__item__button {
  cursor: pointer;
}

.tabs__content {
  padding: 20px 0;
}

.active_tab {
  color: #000;
  border-bottom: 2px solid #85d50b;
}

.hidden {
  width: 0;
  height: 0;
  position: absolute;
  visibility: hidden;
}
</style>
