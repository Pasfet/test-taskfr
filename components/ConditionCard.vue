<template>
  <div class="card" :style="{ backgroundColor: $options.colors[id] }">
    <div class="card-header card-row">
      <span class="card-header__title">Условие {{ id + 1 }}</span>
      <app-select
        :options="options"
        :selectedOption="currentSelect"
        class="card-column"
        @select="selectOption"
      />
    </div>
    <div v-if="currentSelect.type === 'range'" class="card-body">
      <template v-for="range in currentSelect.value">
        <app-input-with-range
          :key="range.id"
          :range="range"
          @change="setRange"
        />
      </template>
    </div>
    <div
      v-if="currentSelect.value && currentSelect.type !== 'range'"
      class="card-select"
    >
      <app-select
        :options="currentSelect.value"
        :selectedOption="currentCard"
        @select="selectCard"
      />
    </div>

    <div class="card-actions">
      <button
        v-if="Object.keys(currentSelect).length"
        class="add__btn"
        @click="saveCondition"
      >
        <plus-icon />
        <span>{{ $options.cardButtonList[currentSelect.type].name }}</span>
      </button>
      <button class="remove__btn" @click="removeCondition">
        <trash-icon />
        <span>Удалить условие</span>
      </button>
    </div>
    <div
      v-if="id"
      class="card_and"
      :style="{ backgroundColor: $options.colors[id] }"
    >
      И
    </div>
  </div>
</template>

<script>
import AppSelect from "./AppSelect.vue";
import AppInputWithRange from "./AppInputWithRange.vue";
import PlusIcon from "~/assets/PlusIcon.vue";
import TrashIcon from "~/assets/TrashIcon.vue";

export default {
  name: "ConditionCard",
  props: {
    id: {
      type: String | Number,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  components: {
    AppSelect,
    AppInputWithRange,
    TrashIcon,
    PlusIcon,
  },
  cardButtonList: {
    range: {
      name: "Добавить диапозон",
    },
    select_card: {
      name: "Добавить тип",
    },
    select_status: {
      name: "Добавить статус",
    },
  },
  colors: ["#f7fda2", "#caeaff", "#cfe5c9"],
  data: () => ({
    currentSelect: {},
    currentCard: {},
  }),
  methods: {
    selectOption(option) {
      this.currentSelect = { ...option, value: option.value.map((c) => c) };
    },
    selectCard(card) {
      this.currentCard = card;
    },
    setRange(range) {
      this.currentSelect.value = this.currentSelect.value.map((cond) =>
        cond.id === range.id ? range : cond
      );
    },
    saveCondition() {
      if (this.currentSelect.type === "range") {
        this.$emit("change-condition", {
          payload: { id: this.id, cond: this.currentSelect },
        });
      } else {
        this.$emit("change-condition", {
          payload: {
            id: this.id,
            cond: { ...this.currentSelect, value: this.currentCard },
          },
        });
      }
    },
    removeCondition() {
      this.$emit("remove-condition", { payload: { id: this.id } });
      this.currentSelect = {};
      this.changedRanges = [];
    },
  },
  watch: {
    currentSelect(newVal) {
      if (newVal.type === "range") {
        if (newVal.value.length) {
          this.changedRanges = newVal.value.map((range) => ({ ...range }));
        } else {
          this.changedRanges = [{ id: "1", from: 18, to: 35 }];
        }
      }
    },
  },
};
</script>

<style scoped>
.card {
  padding: 10px 30px;
  position: relative;
}

.card_and {
  text-transform: uppercase;
  position: absolute;
  top: -25px;
  padding: 12px 20px;
  box-shadow: 0px 0px 1px 1px rgb(175 175 175);
  border-radius: 10px;
}

.card-row {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
}

.card-header__title {
  font-size: 18px;
  font-weight: 600;
  color: #c98633;
}

.card-body {
  font-size: 18px;
}

.card-select {
  width: 50%;
  margin: 20px auto;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin-left: auto;
}

.add__btn {
  align-self: flex-start;
  display: flex;
  align-items: center;
  background-color: rgba(255 255 255, 0.7);
  border: 1px solid #85d50b;
  border-radius: 5px;
  padding: 10px 15px;
  color: #85d50b;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.add__btn svg {
  width: 16px;
  fill: #85d585;
  margin-right: 5px;
  transition: fill 0.3s ease;
}

.add__btn:hover {
  color: #fff;
  background-color: #85d50b;
  cursor: pointer;
}
.add__btn:hover svg {
  fill: #fff;
}

.remove__btn {
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #e50000;
  padding: 10px 15px;
  color: #e50000;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.remove__btn svg {
  width: 16px;
  fill: #e50000;
  margin-right: 5px;
  transition: fill 0.3s ease;
}

.remove__btn:hover {
  color: #fff;
  background-color: #e50000;
  cursor: pointer;
}
.remove__btn:hover svg {
  fill: #fff;
}

@media (max-width: 760px) {
  .card-body {
    font-size: 14px;
  }
}

@media (max-width: 620px) {
  .card-row {
    grid-template-columns: 1fr 2fr;
  }

  .card-actions {
    width: 100%;
  }

  .card_and {
    padding: 10px;
    left: -5px;
  }
}

@media (max-width: 550px) {
  .card-row {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .card-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .add__btn {
    margin-bottom: 10px;
  }
}
</style>
