<template>
  <div class="input-range card-row">
    <div class="input-range-left">
      <span v-if="countDiapasons !== '1'" class="input-or">или</span>Диапозон
      {{ countDiapasons }}
    </div>
    <div class="input-range-right">
      <div>
        <label class="input__label">
          <span class="input__text">от</span>
          <input type="number" v-model.number="from" class="input__field" />
        </label>
        <label class="input__label">
          <span class="input__text">до</span>
          <input type="number" v-model.number="to" class="input__field" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInputWithRange",
  props: {
    range: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    id: "",
    from: 0,
    to: 1,
  }),
  computed: {
    countDiapasons() {
      return this.id[this.id.length - 1];
    },
  },
  created() {
    const { id, from, to } = this.range;
    this.id = id;
    this.from = from;
    this.to = to;
  },
  watch: {
    from(newVal) {
      this.$emit("change", {
        from: newVal,
        to: this.to,
        id: `${this.id}`,
      });
    },
    to(newVal) {
      this.$emit("change", {
        from: this.from,
        to: newVal,
        id: `${this.id}`,
      });
    },
  },
};
</script>

<style scoped>
.input-or {
  padding: 5px;
  opacity: 0.5;
}

.input__field {
  border-radius: 5px;
  border: 2px solid #e2e2e2;
  margin-right: 10px;
  padding-left: 5px;
  width: 100px;
  height: 50px;
  font-size: 16px;
}

.input-range-right {
  display: flex;
  flex-direction: column;
}

@media (max-width: 420px) {
  .input__field {
    width: 50px;
    height: 50px;
  }
}
</style>
