<template>
  <div class="respondents">
    <div class="respondents-header">
      <span class="respondents-header__title">Добавить опрос</span>
    </div>
    <div class="respondents-body">
      <transition-group name="quiz-fade">
        <template v-for="cond in getQuiz">
          <condition-card
            :key="cond.id"
            :id="cond.id"
            :options="getConditions"
            @change-condition="saveCondition"
            @remove-condition="removeCondition"
          />
        </template>
      </transition-group>
    </div>
    <div class="respondents-actions">
      <button class="respondents-button__add" @click="addCondition">
        <span class="respondents-button__icon">
          <PlusIcon />
        </span>
        <span class="respondents-button__text">
          Нажмите, чтобы добавить новое условие выборки. Все условия связываются
          между собой логическим &laquo;И&raquo;
        </span>
      </button>
    </div>
    <div class="respondents-footer">
      <button class="respondents-footer__button">Протестировать опрос</button>
      <button class="respondents-footer__button next">Далее</button>
    </div>
  </div>
</template>

<script>
import ConditionCard from "./ConditionCard.vue";
import PlusIcon from "~/assets/PlusIcon.vue";

export default {
  name: "FormRespondents",
  components: {
    ConditionCard,
    PlusIcon,
  },
  computed: {
    getConditions() {
      return this.$store.getters["respondents/getConditions"];
    },
    getQuiz() {
      return this.$store.getters["respondents/getQuiz"];
    },
  },
  methods: {
    addCondition() {
      this.$store.commit("respondents/addCondition");
    },
    saveCondition(payload) {
      this.$store.commit("respondents/saveCondition", payload);
    },
    removeCondition(payload) {
      this.$store.commit("respondents/removeCondition", payload);
    },
  },
};
</script>

<style scoped>
.respondents {
  box-shadow: 0px 0px 2px 1px rgb(131 131 131 / 15%);
  background-color: #fbfbfb;
}

.respondents-header {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
}

.respondents-header__title {
  color: #808080;
  font-weight: bold;
  font-size: 16px;
}

.respondents-actions {
  padding: 40px 20px;
}

.respondents-button__add {
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border: 2px solid #e2e2e2;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.respondents-button__add:hover {
  cursor: pointer;
  background-color: #e2e2e2;
}

.respondents-button__add:hover svg,
.respondents-button__add:hover span {
  fill: #000;
  color: #000;
}

.respondents-button__icon svg {
  width: 32px;
  fill: #85d50b;
  transition: fill 0.3s ease;
}

.respondents-button__text {
  font-size: 18px;
  max-width: 480px;
  color: #85d50b;
  transition: color 0.3s ease;
}

.respondents-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #e1e1e1;
}

.respondents-footer__button {
  color: #85d50b;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px 1px rgb(88 88 88 / 33%);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.respondents-footer__button.next {
  background-color: #85d50b;
  color: #fff;
}

.respondents-footer__button:hover {
  color: #fff;
  background-color: #85d50b;
  cursor: pointer;
}

.respondents-footer__button:hover.next {
  color: #85d50b;
  background-color: #fff;
}

.quiz-fade-enter-active,
.quiz-fade-leave-active {
  transition: opacity 0.5s;
}
.quiz-fade-enter,
.quiz-fade-leave-to {
  opacity: 0;
}
</style>
