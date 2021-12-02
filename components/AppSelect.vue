<template>
  <div class="select">
    <div class="select-header" @click="toggleOpen">
      {{ selectedOption.name || "Выберите условие" }}
    </div>
    <div class="select-content">
      <ul v-if="isOpen" class="select__list list">
        <li
          v-for="option in options"
          :key="option.id"
          tabindex="0"
          class="list__item"
          @click="selectOption(option)"
          @keydown.enter="selectOption(option)"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSelect",
  props: {
    options: {
      type: Array,
      required: true,
    },
    selectedOption: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    isOpen: false,
  }),
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.$emit("select", option);
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.select {
  width: 100%;
  max-width: 400px;
  position: relative;
}

.select-header {
  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  background-color: #ededed;
  transition: background-color 0.3s ease;
}

.select-header:hover {
  cursor: pointer;
  background-color: #fff;
}

.select-content {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 20;
  background-color: #fff;
}

.list {
  padding: 10px 0;
  list-style-type: none;
  border: 2px solid #e2e2e2;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04),
    0px 20px 20px rgba(44, 39, 56, 0.04);
}

.list__item {
  padding: 10px;
  font-size: 14px;
  color: #000;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.list__item:hover {
  cursor: pointer;
  background-color: #e2e2e2;
  color: #000;
}

.list__item:focus {
  outline: 2px solid #e2e2e2;
}
</style>
